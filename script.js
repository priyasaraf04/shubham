
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');
}

function openSorry() {
    showPage('sorryPage');
}

function acceptSorry() {
    showPage('acceptPage');
    celebrate();
}

function rejectSorry() {
    showPage('rejectPage');
}

function tryAgain() {
    showPage('sorryPage');
}

function goHome() {
    showPage('startPage');
}

// Floating hearts generator
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const emojis = ['💗', '💕', '💖', '🌸', '✨', '💘'];
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (15 + Math.random() * 20) + 'px';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);

// Celebration hearts
function celebrate() {
    for (let i = 0; i < 25; i++) {
        setTimeout(createHeart, i * 100);
    }
}
