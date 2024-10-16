$(document).ready(function(){

    /**
     * While the document loads, this function 
     * shows loader. 
     * Original code idea from stack overflow
     */
    $('.loader-overlay-wrapper').fadeOut(2500);

    /* This function changes the style of 
    navbar bars when the user clicks on the bars.
    */ 
    $("#barsContainer").click(function () {
        changeBars(this);
    });

    function changeBars(i) {
        i.classList.toggle("change");
    }

    
});

// Modal

window.onload = function() {
  setTimeout(function() {
    var modal = document.getElementById("offerModal");
    modal.style.display = "block";  // Make it visible
      setTimeout(function() {
          modal.style.opacity = "1";  // Change opacity to 1 to fade in
      }, 100);  // Slight delay before starting the fade-in
  }, 8000);
// 8 seconds delay

  document.getElementById("closeModal1").onclick = function() {
    document.getElementById("offerModal").style.display = "none";
  };
  document.getElementById("closeModal2").onclick = function() {
    document.getElementById("offerModal").style.display = "none";
  };

  document.getElementById("emailForm").addEventListener("submit", function(event){
    event.preventDefault();

    // Capture the current date and time in ISO format
    var currentTimestamp = new Date().toISOString();
    document.getElementById("timestamp").value = currentTimestamp; // Set the hidden input value

    
    // Get the email input
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Send data to Google Apps Script using a POST request
    fetch('https://script.google.com/macros/s/AKfycbxFzCtIht908i4JI9HwHUzIarbcKTldDpyE9mPAhIdhc5oGvO0y4J6KsQI1Iqiq1h0E9g/exec', {
      
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
      To redeem your 20% discount on your first appointment, use code OPTIN20 when booking.`;
      document.getElementById("customNotification").style.display = "block";

      // Close the modal after successful submission

      // setTimeout(function() {
      //   document.getElementById("offerModal").style.display = "none";
      // }, 15000); // 15 seconds delay

    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

  // Handle close buttons for custom notifications
document.getElementById("closeNotification1").onclick = function() {
  closeNotifications();
};

document.getElementById("closeNotification2").onclick = function() {
  closeNotifications();
};

// Function to close the notification and modal
function closeNotifications() {
  document.getElementById("customNotification").style.display = "none";
  document.getElementById("offerModal").style.display = "none";
}

  // Show notification when the test button is clicked
};

// loads tooltips 
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

const goUpBtn = document.getElementById("goUpBtn");
  
/**
* When the user scrolls down 
* 20px from the top of the document
* show the button.
*/
window.onscroll = function() {
    scrollFunction();
};

/**
* Scroll function:
* when the user scrolls the page
* Otherwise, the button remains invisible. 
* the button to go up appears. 
*/
const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      goUpBtn.style.display = "block";
    } else {
      goUpBtn.style.display = "none";
    }
  };
  
/**
* When the user clicks on the button
* scroll to the top of the document
*/
const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Event Listener
  
$("#goUpBtn").click(function () {
    topFunction();
});


  
  