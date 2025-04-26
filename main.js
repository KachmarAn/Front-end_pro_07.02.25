'use strict';

const postsContainer = document.getElementById('posts');
const form = document.getElementById('postForm');
const successMessage = document.getElementById('successMessage');

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postEl = document.createElement('div');
                postEl.classList.add('post');
                postEl.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <button onclick="loadComments(${post.id}, this)">Завантажити коментарі</button>
          <div class="comments" id="comments-${post.id}"></div>
        `;
                postsContainer.appendChild(postEl);
            });
        })
        .catch(error => {
            console.error('Помилка при завантаженні постів:', error);
        });
}

function loadComments(postId, button) {
    button.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`)
        .then(response => response.json())
        .then(comments => {
            const commentsContainer = document.getElementById(`comments-${postId}`);
            comments.forEach(comment => {
                const commentEl = document.createElement('div');
                commentEl.classList.add('comment');
                commentEl.innerHTML = `
          <strong>${comment.name}</strong> (<a href="mailto:${comment.email}">${comment.email}</a>)<br/>
          ${comment.body}
        `;
                commentsContainer.appendChild(commentEl);
            });
        })
        .catch(error => {
            console.error('Помилка при завантаженні коментарів:', error);
        });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1
        })
    })
        .then(response => response.json())
        .then(newPost => {
            successMessage.textContent = 'Пост створено успішно!';

            const newPostEl = document.createElement('div');
            newPostEl.classList.add('post');
            newPostEl.innerHTML = `
        <h3>${newPost.title}</h3>
        <p>${newPost.body}</p>
        <button onclick="loadComments(${newPost.id}, this)">Завантажити коментарі</button>
        <div class="comments" id="comments-${newPost.id}"></div>
      `;
            postsContainer.prepend(newPostEl);

            form.reset();
        })
        .catch(error => {
            console.error('Помилка при створенні поста:', error);
        });
});

loadPosts();