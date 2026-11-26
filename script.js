const gift = document.getElementById("gift");
const message = document.getElementById("message");
const surprise = document.getElementById("surprise");

gift.addEventListener("click", () => {
    gift.classList.toggle("open");
    message.style.display = "block";
    createHearts();
});

surprise.addEventListener("click", () => {
    createHearts(40);
    alert("You are amazing! Happy Birthday! 💗🎂");
});

function createHearts(number = 15) {
    for (let i = 0; i < number; i++) {
        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = ["💗", "💕", "💖", "✨", "🌸"][
            Math.floor(Math.random() * 5)
        ];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }
}

setInterval(() => createHearts(2), 1000);