import {fetchComments, createPost} from './api.js';
import {createCommentElement, createPostElement} from './dom.js';

export function setupEventListeners(postsContainer, form, successMessage) {
    postsContainer.addEventListener('click', async (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.dataset.postId) {
            const postId = e.target.dataset.postId;
            const commentsContainer = document.getElementById(`comments-${postId}`);

            if (!commentsContainer.hasChildNodes()) {
                try {
                    e.target.disabled = true;
                    const comments = await fetchComments(postId);
                    comments.forEach(comment => {
                        commentsContainer.appendChild(createCommentElement(comment));
                    });
                } catch (error) {
                    console.error('Error loading comments:', error);
                }
            } else {
                commentsContainer.classList.toggle('hidden');
            }
        }
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value.trim();
        const body = document.getElementById('body').value.trim();
        if (!title || !body) {
            alert('Будь ласка, заповніть усі поля.');
            return;
        }
        try {
            const newPost = await createPost({title, body, userId: 1});
            successMessage.textContent = 'Пост створено успішно!';
            postsContainer.prepend(createPostElement(newPost));
            form.reset();
        } catch (error) {
            console.error('Error creating post:', error);
        }
    });
}
