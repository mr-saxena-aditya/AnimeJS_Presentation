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