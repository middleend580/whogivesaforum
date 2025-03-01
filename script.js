document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById("postForm");
    const postsContainer = document.getElementById("postsContainer");

    // Load posts from localStorage when the page loads
    function loadPosts() {
        const posts = JSON.parse(localStorage.getItem("forumPosts")) || [];
        postsContainer.innerHTML = ""; // Clear container before adding
        posts.forEach(post => addPostToDOM(post.username, post.content));
    }

    // Add post to localStorage and display it
    postForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value.trim();
        const content = document.getElementById("postContent").value.trim();

        if (username && content) {
            addPostToDOM(username, content);

            const posts = JSON.parse(localStorage.getItem("forumPosts")) || [];
            posts.push({ username, content });
            localStorage.setItem("forumPosts", JSON.stringify(posts));

            postForm.reset();
        }
    });

    // Function to add a post to the page
    function addPostToDOM(username, content) {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `<strong>${username}</strong>: ${content}`;
        postsContainer.appendChild(postDiv);
    }

    // Clear all posts from localStorage and the page
    const clearButton = document.getElementById("clearPosts");
    if (clearButton) {
        clearButton.addEventListener("click", () => {
            localStorage.removeItem("forumPosts");
            postsContainer.innerHTML = "";
        });
    }

    // Load posts when the page loads
    loadPosts();
});
