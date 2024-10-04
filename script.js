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
    document.getElementById("offerModal").style.display = "block";
  }, 2000); // 8 seconds delay

  document.getElementById("closeModal").onclick = function() {
    document.getElementById("offerModal").style.display = "none";
  };

  document.getElementById("emailForm").addEventListener("submit", function(event){
    event.preventDefault();

    // Capture the current date and time in ISO format
    var currentTimestamp = new Date().toISOString();
    document.getElementById("timestamp").value = currentTimestamp; // Set the hidden input value

    
    // Get the email input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Send data to Google Apps Script using a POST request
    fetch('https://script.google.com/macros/s/AKfycbzz58buHthB2724T_UdYcHczo258JrrcwqEZVnlLTvRcvZbYndcFaXkez1LyZfiqlsWKA/exec', {
      
      method: 'POST',
      body: new URLSearchParams({
        'timestamp': currentTimestamp,
        'name':name,
        'email': email,
        'phone': phone
      })
    })
    .then(() => {
      // Show custom notification with user's name
      var message = document.getElementById("notificationMessage");

      message.textContent = `Thank you, ${name}, for providing the information! Now let's book your appointment to redeem the offer!`;
      document.getElementById("customNotification").style.display = "block";

      // Close the modal after successful submission
      // document.getElementById("offerModal").style.display = "none";
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

  // Handle close button for custom notification
document.getElementById("closeNotification").onclick = function() {
  document.getElementById("customNotification").style.display = "none";
};


  // Close the modal if the user clicks outside the modal content
  window.onclick = function(event) {
    if (event.target == document.getElementById("offerModal")) {
      document.getElementById("offerModal").style.display = "none";
    }
  };
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


  
  