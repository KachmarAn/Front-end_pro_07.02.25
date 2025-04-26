'use strict';

// main.js
import { fetchPosts } from './JS/api.js';
import { createPostElement } from './JS/dom.js';
import { setupEventListeners } from './JS/events.js';

const postsContainer = document.getElementById('posts');
const form = document.getElementById('postForm');
const successMessage = document.getElementById('successMessage');

async function init() {
    try {
        const posts = await fetchPosts();
        posts.forEach(post => {
            postsContainer.appendChild(createPostElement(post));
        });
    } catch (error) {
        console.error('Error loading posts:', error);
    }

    setupEventListeners(postsContainer, form, successMessage);
}

init();
