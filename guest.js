document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('comment-form');
    const guestComments = document.getElementById('guest-comments');

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
            const name = document.getElementById('Name').value.trim();
            const text = document.getElementById('Wishes').value.trim();

            if (name && text) {
                saveComment(name, text);
                loadComments();
                form.reset();
            }
        });

        // Initial load of comments
        loadComments();
    }
});
