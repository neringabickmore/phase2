// Modal

window.onload = function() {
    setTimeout(function() {
      var modal = document.getElementById("offerModal");
      modal.style.display = "block";  // Make it visible
        setTimeout(function() {
            modal.style.opacity = "1";  // Change opacity to 1 to fade in
        }, 100);  // Slight delay before starting the fade-in
    }, 1500);// 5 seconds delay = 5000; now it is 1.5second for black Friday
    
    // displayed on mobile x button dismisses modal
    document.getElementById("closeModal1").onclick = function() {
      document.getElementById("offerModal").style.display = "none";
    };
    // displayed on web x button dismisses modal
    document.getElementById("closeModal2").onclick = function() {
      document.getElementById("offerModal").style.display = "none";
    };
  
    document.getElementById("emailForm").addEventListener("submit", function(event){
      event.preventDefault();
  
      // Capture the current date and time in ISO format
      var currentTimestamp = new Date().toISOString();
      document.getElementById("timestamp").value = currentTimestamp; // Set the hidden input value
  
      
      // Get the form input
      var name = document.getElementById("name").value;
      var surname = document.getElementById("surname").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
  
      // Send data to Google Apps Script using a POST request
      fetch('https://script.google.com/macros/s/AKfycbwlmgNAp3Mtcs01UwpTJCMB49G_AF8pljlln11htac-w8k0ryFgp6hgh9Cr6H1L2EIlaQ/exec', {
        
        method: 'POST',
        body: new URLSearchParams({
          'timestamp': currentTimestamp,
          'name':name,
          'surname':surname,
          'email': email,
          'phone': phone
        })
      })
      
      .then(() => {
        // Show custom notification with user's name
        var message = document.getElementById("notificationMessage");
        message.textContent = `Thank you, ${name}! Your details have been submitted successfully. 
        We will be in touch with the hair extensions offers very soon!`;
        document.getElementById("customNotification").style.display = "block";
      })
  
     .catch(error => {
        console.error('Error:', error);
      });
    });
  
  // Function to close the notification and modal
    function closeNotifications() {
      var modal = document.getElementById("offerModal");
      var notification = document.getElementById("customNotification");
  
      // Fade out by changing opacity
      modal.style.opacity = "0";
      notification.style.opacity = "0";
  
      // Wait for the transition to complete before setting display to none
      setTimeout(function() {
          modal.style.display = "none";
          notification.style.display = "none";
      }, 1000); // Matches the duration of the CSS transition
    }
  
        // Handle close buttons for custom notifications
        document.getElementById("closeNotification1").onclick = function() {
          closeNotifications();
        };
      
        document.getElementById("closeNotification2").onclick = function() {
          closeNotifications();
        };
  };