document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("postForm");
    const postsContainer = document.getElementById("postsContainer");

    postForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const username = document.getElementById("username").value.trim();
        const postContent = document.getElementById("postContent").value.trim();

        if (username && postContent) {
            const postElement = document.createElement("div");
            postElement.classList.add("post");

            postElement.innerHTML = `
                <h3>${username}</h3>
                <p>${postContent}</p>
                <button class="deleteBtn">Delete</button>
            `;

            postsContainer.prepend(postElement);

            document.getElementById("username").value = "";
            document.getElementById("postContent").value = "";

            // Add event listener for delete button
            postElement.querySelector(".deleteBtn").addEventListener("click", function () {
                postElement.remove();
            });
        }
    });
});
