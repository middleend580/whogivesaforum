document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById("postForm");
    const postsContainer = document.getElementById("postsContainer");

    // Load posts from localStorage when the page loads
    function loadPosts() {
        const posts = JSON.parse(localStorage.getItem("forumPosts")) || [];
        console.log("Loaded posts:", posts); // Added log for debugging
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

            console.log("Saving posts:", posts); // Added log for debugging
            localStorage.setItem("forumPosts", JSON.stringify(posts));

            postForm.reset();
        } else {
            console.log("Error: Missing username or content.");
        }
    });

    // Function to add a post to the page
    function addPostToDOM(username, content) {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `<strong>${username}</strong>: ${content}`;
        postsContainer.appendChild(postDiv);
    }

    // Load posts when the page loads
    loadPosts();
});
