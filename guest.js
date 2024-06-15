document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('comment-form');
    const guestComments = document.getElementById('guest-comments');
    const wishesContainer = document.getElementById('wishes-container'); // Added this line for wishes.html

    // Load comments from localStorage
    const loadComments = () => {
        const comments = JSON.parse(localStorage.getItem('guestComments')) || [];
        guestComments.innerHTML = '';
        comments.forEach(comment => {
            guestComments.appendChild(createCommentElement(comment));
        });

        // Also load comments in wishes.html if wishesContainer exists
        if (wishesContainer) {
            wishesContainer.innerHTML = ''; // Clear existing content
            comments.forEach(comment => {
                wishesContainer.appendChild(createCommentElement(comment));
            });
        }
    };

    const saveComment = (name, text) => {
        const comments = JSON.parse(localStorage.getItem('guestComments')) || [];
        const newComment = { name, text, date: new Date().toLocaleString() };
        comments.push(newComment);
        localStorage.setItem('guestComments', JSON.stringify(comments));

        // Update comments in both guest.html and wishes.html if wishesContainer exists
        if (wishesContainer) {
            wishesContainer.appendChild(createCommentElement(newComment));
        }
    };

    const createCommentElement = (comment) => {
        const div = document.createElement('div');
        div.className = 'comment-card';
        div.innerHTML = `
            <h3>${comment.name}</h3>
            <p>${comment.text}</p>
            <span>${comment.date}</span>
        `;
        return div;
    };

    // Form submission handler
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('guest-name').value;
            const text = document.getElementById('comment-text').value;

            if (name && text) {
                saveComment(name, text);
                form.reset();
            }
        });

        // Initial load of comments
        loadComments();
    }

    // Countdown timer function (if needed)
    // ...

    // Check login status function (if needed)
    // ...
});
