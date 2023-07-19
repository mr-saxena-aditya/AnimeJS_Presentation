// Function to hide the preloader
function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hide'); // Add the 'hide' class to start the transition
  
    // After the transition is complete, remove the preloader from the DOM
    setTimeout(function() {
      preloader.style.display = 'none';
    }, 1000); // Set the timeout to 1 second to match the transition duration
  }
  
  // Create a preloader animation
  window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
  
    // Hide the preloader after 2 seconds
    setTimeout(function() {
      hidePreloader();
    }, 1000);
  });
  

// Function to update date and time
function updateDateTime() {
    const currentDateTime = new Date();
    const hours = String(currentDateTime.getHours()).padStart(2, '0');
    const minutes = String(currentDateTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentDateTime.getSeconds()).padStart(2, '0');
    const date = String(currentDateTime.getDate()).padStart(2, '0');
    const month = String(currentDateTime.getMonth() + 1).padStart(2, '0');
    const year = currentDateTime.getFullYear();

    const dateTimeDisplay = document.getElementById('dateTimeDisplay');
    dateTimeDisplay.textContent = `${hours}:${minutes}:${seconds} on ${date}-${month}-${year}`;
    }

    // Update date and time every second
    setInterval(updateDateTime, 1000);

// Function to update time
function updateTimeTop() {
    const currentDateTime = new Date();
    const hours = String(currentDateTime.getHours()).padStart(2, '0');
    const minutes = String(currentDateTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentDateTime.getSeconds()).padStart(2, '0');

    const dateTimeDisplay = document.getElementById('timeDisplayTop');
    dateTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Update date and time every second
    setInterval(updateTimeTop, 1000);

// Function to update time
function updateTimeBottom() {
    const currentDateTime = new Date();
    const hours = String(currentDateTime.getHours()).padStart(2, '0');
    const minutes = String(currentDateTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentDateTime.getSeconds()).padStart(2, '0');

    const dateTimeDisplay = document.getElementById('timeDisplayBottom');
    dateTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Update date and time every second
    setInterval(updateTimeBottom, 1000);

    // Function to create a custom cursor
    document.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.custom-cursor');
        cursor.style.left = (e.pageX - 10) + 'px'; // Adjust the offset based on the circle size
        cursor.style.top = (e.pageY - 10) + 'px'; // Adjust the offset based on the circle size
      });


      
// Function to simulate typing effect for logo text
function typeLogo() {
    const logoText = "[ Aditya Saxena ]"; // Replace with your logo text
    const logoElement = document.querySelector('.nav-logo');
    const typingSpeed = 100; // Speed in milliseconds between each letter
    let charIndex = 0;
    let typingInterval;
  
    function typeNextChar() {
      if (charIndex < logoText.length) {
        logoElement.textContent += logoText.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typingInterval); // Stop the typing animation
      }
    }
  
    typingInterval = setInterval(typeNextChar, typingSpeed);
  }
  
  // Call the typeLogo function after a delay of 5 seconds
  window.addEventListener('load', function() {
    setTimeout(() => {
      typeLogo();
    }, 2000); // 2000 milliseconds = 2.0 seconds
  });


// Function to make the screen full screen
const fullscreenIcon = document.getElementById('fullscreen-icon');
let isFullScreen = false;

fullscreenIcon.addEventListener('click', () => {
  if (!isFullScreen) {
    enterFullscreen();
  } else {
    exitFullscreen();
  }
});

function enterFullscreen() {
  const element = document.documentElement || document.body;
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }

  isFullScreen = true;
  fullscreenIcon.innerHTML = '<i class="icon fa fa-compress"></i>';
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }

  isFullScreen = false;
  fullscreenIcon.innerHTML = '<i class="icon fa fa-arrows-alt"></i>';
}