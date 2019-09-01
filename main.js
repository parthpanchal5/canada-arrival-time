const countdown = document.querySelector('.countdown');

// Set Launch Date (ms)
const launchDate = new Date('Dec 15, 2019 00:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Distance from now and the launch date (ms)
  const distance = launchDate - now;

  // Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `<div>${days}<span>Days</span></div> <div>${hours}<span>Hours</span></div> <div>${mins}<span>Mins</span></div> <div>${seconds}<span>Sec</span></div>`;

  // If launch date is reached
  if (distance < 0) 
  {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
    countdown.style.color = '#e61c1c';
    countdown.innerHTML = 'A new Journey is about to start';
  }
}, 1000);
