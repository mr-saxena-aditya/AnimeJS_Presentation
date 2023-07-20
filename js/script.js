// Function to hide the preloader
function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hide'); // Add the 'hide' class to start the transition
  
    // After the transition is complete, remove the preloader from the DOM
    setTimeout(function () {
      preloader.style.display = 'none';
    }, 1000); // Set the timeout to 1 second to match the transition duration
  }
  
  // Create a preloader animation
  window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
  
    // Hide the preloader after 2 seconds
    setTimeout(function () {
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
  
  // Function to update time for the top display
  function updateTimeTop() {
    const currentDateTime = new Date();
    const hours = String(currentDateTime.getHours()).padStart(2, '0');
    const minutes = String(currentDateTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentDateTime.getSeconds()).padStart(2, '0');
  
    const dateTimeDisplay = document.getElementById('timeDisplayTop');
    dateTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Update time for the top display every second
  setInterval(updateTimeTop, 1000);
  
  // Function to update time for the bottom display
  function updateTimeBottom() {
    const currentDateTime = new Date();
    const hours = String(currentDateTime.getHours()).padStart(2, '0');
    const minutes = String(currentDateTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentDateTime.getSeconds()).padStart(2, '0');
  
    const dateTimeDisplay = document.getElementById('timeDisplayBottom');
    dateTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Update time for the bottom display every second
  setInterval(updateTimeBottom, 1000);
  
  // Function to create a custom cursor
  document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
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
  window.addEventListener('load', function () {
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
  
  // Function to toggle the visibility of the full-screen menu
  function toggleMenuVisibility() {
    const fullScreenMenu = document.querySelector('.full-screen-menu');
    const isMenuVisible = window.getComputedStyle(fullScreenMenu).visibility === 'visible';
  
    // Toggle the visibility based on the current state
    if (isMenuVisible) {
      fullScreenMenu.style.visibility = 'hidden';
    } else {
      fullScreenMenu.style.visibility = 'visible';
    }
  }
  
  // Add click event listener to the nav-button
  const navButton = document.querySelector('.nav-button');
  navButton.addEventListener('click', toggleMenuVisibility);
  
  // JavaScript code to handle slide navigation
  
  const slides = document.querySelectorAll('.slide');
  let currentSlideIndex = 0;
  
  function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }
  
  function showNextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  }
  
  function showPreviousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
  }
  
  function animateSlideTransition() {
    const currentSlide = slides[currentSlideIndex];
    const nextSlide = slides[(currentSlideIndex + 1) % slides.length];
  
    anime({
      targets: currentSlide,
      translateY: '20vh', // Corrected to move the slide down 20vh
      scale: 0.5,
      duration: 1000,
      easing: 'easeInOutQuad',
      complete: () => {
        currentSlide.style.display = 'none';
        currentSlide.style.transform = 'none';
        nextSlide.style.transform = 'scale(1)'; // or any other scale value
        nextSlide.style.opacity = 1;
        nextSlide.style.display = 'block';
      },
    });
  
    anime({
      targets: nextSlide,
      translateX: ['-100%', '0%'],
      duration: 2000,
      easing: 'easeInOutQuad',
    });
  }
  
  // Function to handle key press events
  function handleKeyPress(event) {
    if (event.key === 'ArrowRight') {
      showNextSlide();
      animateSlideTransition(); // Call the function to animate the slide transition
    } else if (event.key === 'ArrowLeft') {
      showPreviousSlide();
      animateSlideTransition(); // Call the function to animate the slide transition
    }
  }
  
  document.addEventListener('keydown', handleKeyPress);
  
  // Add click event listener to the next slide button to trigger the slide transition animation
  const nextSlideButton = document.querySelector('.presentation-control.next .icon-a');
  nextSlideButton.addEventListener('click', () => {
    showNextSlide();
    animateSlideTransition(); // Call the function to animate the slide transition
  });
  
  // Add click event listener to the previous slide button to trigger the slide transition animation
  const prevSlideButton = document.querySelector('.presentation-control.prev .icon-a');
  prevSlideButton.addEventListener('click', () => {
    showPreviousSlide();
    animateSlideTransition(); // Call the function to animate the slide transition
  });
  
  // Read presenter notes for each slide
  const presenterNotesButtons = document.querySelectorAll('.icon-a[title="Play Presenter Notes"]');
  const presenterNotesTexts = document.querySelectorAll('.slide-presenter-notes');
  
  presenterNotesButtons.forEach((button, index) => {
    const presenterNotesText = presenterNotesTexts[index].innerText;
    button.addEventListener("click", () => {
      speakText(presenterNotesText);
    });
  });
  
  function speakText(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  }
  

  