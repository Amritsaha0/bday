// Play the music
var audio = document.getElementById("birthday-music");
audio.play();

// Revealing message
function revealMessage() {
    const message = document.getElementById('surprise-message');
    message.classList.remove('hidden');
}

// Countdown timer
function countdownTimer() {
    const countdownElement = document.getElementById('countdown');
    const birthdayDate = new Date('2024-06-16T00:00:00');

    const updateCountdown = () => {
        const now = new Date();
        const timeDifference = birthdayDate - now;

        if (timeDifference <= 0) {
            countdownElement.textContent = "Happy Birthday!";
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `<strong>${days}</strong> days, <strong>${hours}</strong> hours, <strong>${minutes}</strong> minutes, <strong>${seconds}</strong> seconds until the birthday!`;
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Load guest comments
function loadGuestComments() {
    const savedComments = JSON.parse(localStorage.getItem('guestComments')) || [];
    const commentsContainer = document.getElementById('guest-comments');
    commentsContainer.innerHTML = '';  // Clear existing comments
    savedComments.forEach(comment => {
        const newComment = document.createElement('div');
        newComment.innerHTML = `<strong>${comment.name}</strong>: ${comment.message}`;
        commentsContainer.appendChild(newComment);
    });
}

// Check login status
function checkLogin() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'birthdayGirl' || loggedIn === 'wisher') {
        document.getElementById('guestbook').style.display = 'block';
    } else {
        document.getElementById('guestbook').style.display = 'none';
    }
}

// Clear guest messages
function clearGuestMessages() {
    // Clear the messages from the HTML
    const commentsContainer = document.getElementById('guest-comments');
    commentsContainer.innerHTML = '';

    // Clear the messages from local storage
    localStorage.removeItem('guestComments');
}

document.addEventListener('DOMContentLoaded', () => {
    countdownTimer();
    checkLogin();
    if (localStorage.getItem('loggedIn') === 'birthdayGirl' || localStorage.getItem('loggedIn') === 'wisher') {
        loadGuestComments();
    }

    // Add event listener for the clear messages button
    document.getElementById('clear-messages-btn').addEventListener('click', clearGuestMessages);
});
