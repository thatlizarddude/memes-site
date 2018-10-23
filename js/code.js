// Initialize variables
const { body, createElement } = document;
const introElement = document.getElementById('intro');

// Create Spongebob
function createSpongebobElement() {
    const spongebob = document.createElement('img');
    spongebob.src = 'images/spongebob.png';
    spongebob.classList.add('spongebob');
    spongebob.style.left = `${Math.floor(Math.random() * 100) + 1}%`;
    return spongebob;
}

// Spawn Spongebob
function spawnSpongebob() {
    const spongebob = createSpongebobElement();
    spongebob.addEventListener('animationend', event => {
        intro.removeChild(spongebob);
    });

    intro.appendChild(spongebob);
}
setInterval(spawnSpongebob, 100);
