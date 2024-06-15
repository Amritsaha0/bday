document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('comment-form');
    const guestComments = document.getElementById('guest-comments');
    const wishesContainer = document.getElementById('wishes-container');

    // Load comments from localStorage
    const loadComments = () => {
        const comments = JSON.parse(localStorage.getItem('guestComments')) || [];
        guestComments.innerHTML = '';
        comments.forEach(comment => {
            guestComments.appendChild(createCommentElement(comment));
        });
    };

    const saveComment = (name, text) => {
        const comments = JSON.parse(localStorage.getItem('guestComments')) || [];
        const newComment = { name, text, date: new Date().toLocaleString() };
        comments.push(newComment);
        localStorage.setItem('guestComments', JSON.stringify(comments));
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
                loadComments();
                form.reset();
            }
        });

        // Initial load of comments
        loadComments();
    }

    // Display comments in wishes.html
    if (wishesContainer) {
        const comments = JSON.parse(localStorage.getItem('guestComments')) || [];
        comments.forEach(comment => {
            wishesContainer.appendChild(createCommentElement(comment));
        });
    }

    // Clear wishes function
    function clearWishes() {
        // Clear the wishes from the HTML
        wishesContainer.innerHTML = '';

        // Clear the wishes from local storage
        localStorage.removeItem('guestComments');
    }

    // Add event listener for the clear wishes button
    const clearWishesBtn = document.getElementById('clear-wishes-btn');
    if (clearWishesBtn) {
        clearWishesBtn.addEventListener('click', clearWishes);
    }
});
