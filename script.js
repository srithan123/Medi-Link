// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
  lucide.createIcons();
  
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Call button functionality
  const callButton = document.getElementById('call-button');
  if (callButton) {
    callButton.addEventListener('click', function() {
      alert('Calling toll-free number: 1800-123-4567\n(Note: This is a demo. In a real app, this would initiate a phone call.)');
    });
  }
  
  // Video call button functionality
  const videoCallButton = document.getElementById('video-call-button');
  if (videoCallButton) {
    videoCallButton.addEventListener('click', function() {
      alert('Starting video consultation with a doctor...\n(Note: This is a demo. In a real app, this would initiate a video call.)');
    });
  }
  
  // Format time for medicine reminders
  function formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  }
  
  // Medicine reminder functionality
  const addReminderBtn = document.getElementById('add-reminder');
  if (addReminderBtn) {
    addReminderBtn.addEventListener('click', function() {
      const medicine = document.getElementById('medicine').value.trim();
      const dosage = document.getElementById('dosage').value.trim();
      const time = document.getElementById('time').value;
      
      if (medicine && dosage && time) {
        // In a real app, you would save this to local storage or a database
        alert(`Reminder set for ${medicine} (${dosage}) at ${formatTime(time)}`);
        document.getElementById('medicine').value = '';
        document.getElementById('dosage').value = '';
        document.getElementById('time').value = '';
      } else {
        alert('Please fill in all fields');
      }
    });
  }
  
  // Prescription submission
  const submitPrescriptionBtn = document.getElementById('submit-prescription');
  if (submitPrescriptionBtn) {
    submitPrescriptionBtn.addEventListener('click', function() {
      const prescription = document.getElementById('prescription').value.trim();
      
      if (prescription) {
        alert('Prescription received! Your medicines will be delivered soon.');
        document.getElementById('prescription').value = '';
      } else {
        alert('Please enter your prescription details');
      }
    });
  }
  
  // Emergency SOS button
  const sosButton = document.getElementById('sos-button');
  if (sosButton) {
    sosButton.addEventListener('click', function() {
      alert('EMERGENCY ALERT: Your location has been shared with emergency services and your emergency contacts.\nHelp is on the way!');
    });
  }
});


// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
  lucide.createIcons();
  
  // Mobile menu toggle for all pages
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Doctor call button functionality
  const callButton = document.getElementById('call-button');
  if (callButton) {
    callButton.addEventListener('click', function() {
      alert('Calling toll-free number: 1800-123-4567\n(Note: This is a demo. In a real app, this would initiate a phone call.)');
    });
  }
  
  // Video call button functionality
  const videoCallButton = document.getElementById('video-call-button');
  if (videoCallButton) {
    videoCallButton.addEventListener('click', function() {
      alert('Starting video consultation with a doctor...\n(Note: This is a demo. In a real app, this would initiate a video call.)');
    });
  }
  
  // SOS button functionality
  const sosButton = document.getElementById('sos-button');
  if (sosButton) {
    sosButton.addEventListener('click', function() {
      if (confirm('Are you sure you want to trigger an emergency alert? This will notify emergency services and your contacts.')) {
        alert('EMERGENCY ALERT: Your location has been shared with emergency services and your emergency contacts.\nHelp is on the way!');
      }
    });
  }
  
  // Medicine reminder functionality
  const addReminderBtn = document.getElementById('add-reminder');
  if (addReminderBtn) {
    addReminderBtn.addEventListener('click', function() {
      const medicine = document.getElementById('medicine').value.trim();
      const dosage = document.getElementById('dosage').value.trim();
      const time = document.getElementById('time').value;
      
      if (medicine && dosage && time) {
        alert(`Reminder set for ${medicine} (${dosage}) at ${formatTime(time)}`);
        document.getElementById('medicine').value = '';
        document.getElementById('dosage').value = '';
        document.getElementById('time').value = '';
      } else {
        alert('Please fill in all fields');
      }
    });
  }
  
  // Prescription submission
  const submitPrescriptionBtn = document.getElementById('submit-prescription');
  if (submitPrescriptionBtn) {
    submitPrescriptionBtn.addEventListener('click', function() {
      const prescription = document.getElementById('prescription').value.trim();
      
      if (prescription) {
        alert('Prescription received! Your medicines will be delivered soon.');
        document.getElementById('prescription').value = '';
      } else {
        alert('Please enter your prescription details');
      }
    });
  }
  
  // Format time for medicine reminders
  function formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  }
  
  // Delivery request form
  const deliveryForm = document.getElementById('delivery-form');
  if (deliveryForm) {
    deliveryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Drone delivery requested! You will receive a confirmation shortly.');
      this.reset();
    });
  }
  
  // Volunteer registration form
  const volunteerForm = document.getElementById('volunteer-form');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your interest in volunteering! We will contact you soon.');
      this.reset();
    });
  }
  
  // Donation form
  const donationForm = document.getElementById('donation-form');
  if (donationForm) {
    donationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your donation! Your contribution will help provide healthcare to those in need.');
      this.reset();
    });
  }
  
  // NGO partnership form
  const ngoForm = document.getElementById('ngo-form');
  if (ngoForm) {
    ngoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your partnership request! Our team will review your application and get back to you.');
      this.reset();
    });
  }
  
  // Initialize map if present on page
  if (document.getElementById('map')) {
    initMap();
  }
});

// Initialize map function
function initMap() {
  // This would be replaced with actual map initialization code
  console.log('Map would be initialized here');
  
  // In a real implementation, you would use Leaflet.js or Google Maps API
  // to create an interactive map with doctor locations
}

// Simulate loading for drone delivery tracking
function simulateDeliveryTracking() {
  const trackingStatus = document.getElementById('tracking-status');
  const trackingProgress = document.getElementById('tracking-progress');
  
  if (trackingStatus && trackingProgress) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      trackingProgress.style.width = `${progress}%`;
      trackingStatus.textContent = `Delivery in progress: ${progress}%`;
      
      if (progress >= 100) {
        clearInterval(interval);
        trackingStatus.textContent = 'Delivery completed!';
      }
    }, 1000);
  }
}

// Call the simulation when drone delivery page loads
if (window.location.pathname.includes('drone.html')) {
  document.addEventListener('DOMContentLoaded', simulateDeliveryTracking);
}



//Availble doctors in doctor tab
