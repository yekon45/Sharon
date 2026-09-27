// ======================================
// SHARON LOVE WEBSITE - JAVASCRIPT
// ======================================

// Show and hide the secret message
function showSecret() {

    const secretMessage = document.getElementById("secretMessage");

    if (secretMessage.style.display === "block") {

        // Hide the message
        secretMessage.style.display = "none";

    } else {

        // Show the message
        secretMessage.style.display = "block";

        // Create some floating hearts
        createHearts(15);
    }
}


// ======================================
// CREATE FLOATING HEARTS
// ======================================

function createHearts(number) {

    for (let i = 0; i < number; i++) {

        const heart = document.createElement("div");

        heart.className = "floating-heart";

        heart.innerHTML = "❤️";

        // Random horizontal position
        heart.style.left = Math.random() * 100 + "vw";

        // Random size
        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        // Random animation duration
        heart.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        // Remove heart after animation
        setTimeout(function () {
            heart.remove();
        }, 6000);
    }
}


// ======================================
// PAGE LOADED
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Sharon website JavaScript loaded successfully ❤️");

});