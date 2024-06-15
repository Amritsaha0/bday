// login.js

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        
        if (username === "BirthdayGirl" && password === "bday2024") {
            localStorage.setItem('loggedIn', 'birthdayGirl');
            window.location.href = "1.html";
        } else if (username === "HappyBirthday" && password === "bday2024") {
            localStorage.setItem('loggedIn', 'guest');
            window.location.href = "guest.html";
        } else if (username === "wisher" && password === "wisher2024") {
            localStorage.setItem('loggedIn', 'wisher');
            window.location.href = "1.html";
        } else {
            document.getElementById('login-error').classList.remove('hidden');
        }
    });
});