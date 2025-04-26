export function createPostElement(post) {
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <button data-post-id="${post.id}">Завантажити коментарі</button>
    <div class="comments" id="comments-${post.id}"></div>
  `;
    return postEl;
}

export function createCommentElement(comment) {
    const commentEl = document.createElement('div');
    commentEl.classList.add('comment');
    commentEl.innerHTML = `
    <strong>${comment.name}</strong> (<a href="mailto:${comment.email}">${comment.email}</a>)<br/>
    ${comment.body}
  `;
    return commentEl;
}
