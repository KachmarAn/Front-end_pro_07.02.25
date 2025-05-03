'use strict';

import './style/main.scss';
import { fetchPosts } from './api.js';
import { createPostElement } from './dom.js';
import { setupEventListeners } from './events.js';

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
