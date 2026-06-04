const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve frontend files
app.use(express.static(path.join(__dirname)));

// SQLite Database Connection
const db = new sqlite3.Database("./healthcare.db", (err) => {
    if (err) {
        console.error("Database Connection Error:", err.message);
    } else {
        console.log("✅ SQLite Connected Successfully");
    }
});

// Create Users Table
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        phone TEXT,
        age INTEGER,
        gender TEXT,
        password TEXT NOT NULL
    )
`, (err) => {
    if (err) {
        console.error("Table Creation Error:", err.message);
    } else {
        console.log("✅ Users Table Ready");
    }
});

// ======================
// SIGNUP API
// ======================
app.post("/signup", async (req, res) => {

    try {

        const {
            name,
            email,
            phone,
            age,
            gender,
            password
        } = req.body;

        if (
            !name ||
            !email ||
            !phone ||
            !age ||
            !gender ||
            !password
        ) {
            return res.json({
                success: false,
                message: "All fields are required"
            });
        }

        const hashedPassword =
            await bcrypt.hash(password, 10);

        db.run(
            `INSERT INTO users
            (name,email,phone,age,gender,password)
            VALUES(?,?,?,?,?,?)`,
            [
                name,
                email,
                phone,
                age,
                gender,
                hashedPassword
            ],
            function (err) {

                if (err) {

                    if (
                        err.message.includes(
                            "UNIQUE constraint failed"
                        )
                    ) {
                        return res.json({
                            success: false,
                            message: "Email already exists"
                        });
                    }

                    return res.json({
                        success: false,
                        message: err.message
                    });
                }

                res.json({
                    success: true,
                    message: "Registration Successful",
                    userId: this.lastID
                });
            }
        );

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});

// ======================
// LOGIN API
// ======================
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            success: false,
            message: "Email and Password required"
        });
    }

    db.get(
        `SELECT * FROM users WHERE email = ?`,
        [email],
        async (err, user) => {

            if (err) {
                return res.json({
                    success: false,
                    message: "Database Error"
                });
            }

            if (!user) {
                return res.json({
                    success: false,
                    message: "User not found"
                });
            }

            const passwordMatch =
                await bcrypt.compare(
                    password,
                    user.password
                );

            if (!passwordMatch) {
                return res.json({
                    success: false,
                    message: "Wrong Password"
                });
            }

            res.json({
                success: true,
                message: "Login Successful",
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    age: user.age,
                    gender: user.gender
                }
            });
        }
    );
});

// ======================
// patient details
// ======================
app.post("/saveProfile", (req, res) => {

    const {

        patient_id,
        full_name,
        email,
        phone,
        age,
        gender,
        blood_group,
        height,
        weight,
        address,
        emergency_name,
        emergency_phone,
        allergies,
        diseases,
        medications

    } = req.body;

    db.run(
        `
        UPDATE patients
        SET

        full_name=?,
        email=?,
        phone=?,
        age=?,
        gender=?,
        blood_group=?,
        height=?,
        weight=?,
        address=?,
        emergency_name=?,
        emergency_phone=?,
        allergies=?,
        diseases=?,
        medications=?

        WHERE patient_id=?
        `,
        [

            full_name,
            email,
            phone,
            age,
            gender,
            blood_group,
            height,
            weight,
            address,
            emergency_name,
            emergency_phone,
            allergies,
            diseases,
            medications,

            patient_id

        ],

        function(err) {

            if(err){

                console.log(err);

                return res.json({
                    success:false
                });
            }

            res.json({
                success:true
            });
        }
    );

});

// ======================
// Load Profile API
// ======================
app.get("/profile/:id", (req,res)=>{

    const patientId =
    req.params.id;

    db.get(
        `
        SELECT *
        FROM patients
        WHERE patient_id=?
        `,
        [patientId],

        (err,row)=>{

            if(err){

                return res.json({
                    success:false
                });
            }

            res.json(row);
        }
    );

});
// ======================
// GET ALL USERS (Optional)
// ======================
app.get("/users", (req, res) => {

    db.all(
        "SELECT id,name,email,phone,age,gender FROM users",
        [],
        (err, rows) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.json(rows);
        }
    );
});

// ======================
// HOME ROUTE
// ======================
app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "index.html")
    );
});

// ======================
// START SERVER
// ======================
app.listen(PORT, () => {

    console.log(`
==================================
🚀 Medi-Link Server Running
🌐 http://localhost:${PORT}
==================================
`);
});