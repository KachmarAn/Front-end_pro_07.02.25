export async function fetchPosts(limit = 10) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    return await response.json();
}

export async function fetchComments(postId, limit = 2) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=${limit}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch comments for post ${postId}: ${response.status}`);
    }
    return await response.json();
}

export async function createPost(postData) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(postData),
    });
    if (!response.ok) {
        throw new Error(`Failed to create post: ${response.status}`);
    }
    return await response.json();
}
