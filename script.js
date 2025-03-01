document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById("postForm");
    const postsContainer = document.getElementById("postsContainer");

    // Load posts from localStorage when the page loads
    function loadPosts() {
        const username = localStorage.getItem("forumUsername"); // Get the username from localStorage
        if (!username) {
            alert("Please enter your username to participate in the forum.");
            return;
        }

        const posts = JSON.parse(localStorage.getItem("forumPosts")) || [];
        postsContainer.innerHTML = ""; // Clear container before adding
        posts.forEach(post => {
            if (post.username === username) {  // Show only posts from the current user
                addPostToDOM(post.username, post.content);
            }
        });
    }

    // Add post to localStorage and display it
    postForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value.trim();
        const content = document.getElementById("postContent").value.trim();

        if (username && content) {
            // Store the username in localStorage
            localStorage.setItem("forumUsername", username);
            
            // Save the post
            const posts = JSON.parse(localStorage.getItem("forumPosts")) || [];
            posts.push({ username, content });
            localStorage.setItem("forumPosts", JSON.stringify(posts));

            // Add to the DOM
            addPostToDOM(username, content);
            postForm.reset();
        } else {
            alert("Please provide a username and post content.");
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
