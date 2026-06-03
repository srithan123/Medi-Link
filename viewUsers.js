const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./healthcare.db");

db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
        console.error(err.message);
        return;
    }

    console.table(rows);
});

db.close();