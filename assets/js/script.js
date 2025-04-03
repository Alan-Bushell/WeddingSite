// Set the target date
const targetDate = new Date("May 31, 2026 00:00:00").getTime();

// Update the countdown every second
const interval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown").innerHTML = 
        `${days} Days ${hours} Hours ${minutes}M ${seconds}S`;

    // If the countdown is over, stop the timer and display a message
    if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Wedding Day 🩷";
    }
}, 1000);
