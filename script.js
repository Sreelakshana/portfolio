const text = "Full Stack Developer";
let index = 0;

// typing animation
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typed").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

// project toggle
function toggle(card) {
    card.classList.toggle("active");
}

// run on load
window.onload = typeEffect;