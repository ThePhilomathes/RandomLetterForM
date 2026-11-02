
// ======================================
// SLIDESHOW
// ======================================

let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function changeSlide(direction) {
    if (!slides.length) return;

    // Remove active class
    slides[currentSlide].classList.remove('active');
    dots[currentSlide]?.classList.remove('active');

    // Change slide
    currentSlide += direction;

    // Loop to first slide
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    // Prevent going before first slide
    if (currentSlide < 0) {
        currentSlide = 0;
    }

    // Activate new slide
    slides[currentSlide].classList.add('active');
    dots[currentSlide]?.classList.add('active');

    // Update buttons
    if (prevBtn) {
        prevBtn.disabled = currentSlide === 0;
    }

    if (nextBtn) {
        nextBtn.innerText =
            currentSlide === slides.length - 1
                ? 'Start Over'
                : currentSlide === slides.length - 2
                    ? 'Finish'
                    : 'Next';
    }
}


// ======================================
// YOUTUBE BACKGROUND MUSIC
// ======================================
const backgroundMusic = document.getElementById("backgroundMusic");

function startSlideshow() {
    // Hide the Start screen
    document.getElementById("startScreen").style.display = "none";

    // Show the slideshow
    document.querySelector(".slide-container").style.display = "block";

    // Start background music
    backgroundMusic.volume = 0.7;

    backgroundMusic.play().catch(error => {
        console.error("Music playback failed:", error);
    });
}
// ======================================
// CONFETTI ANIMATION
// ======================================

function burstConfetti(event) {

    const colors = [
        '#0284c7',
        '#38bdf8',
        '#7dd3fc',
        '#94a3b8',
        '#cbd5e1',
        '#e2e8f0'
    ];

    const burstCount = 65;

    const rect = event.currentTarget.getBoundingClientRect();

    const startX = rect.left + rect.width / 2 + window.scrollX;
    const startY = rect.top + rect.height / 2 + window.scrollY;

    for (let i = 0; i < burstCount; i++) {

        const confetti = document.createElement('div');

        confetti.classList.add('confetti');

        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left = `${startX}px`;
        confetti.style.top = `${startY}px`;

        const angle = Math.random() * Math.PI * 2;
        const distance = 160 + Math.random() * 240;

        const xOffset = Math.cos(angle) * distance;
        const yOffset = Math.sin(angle) * distance;

        confetti.style.setProperty('--x', `${xOffset}px`);
        confetti.style.setProperty('--y', `${yOffset}px`);

        confetti.style.setProperty(
            '--rotate',
            `${Math.random() * 720 - 360}deg`
        );

        const size = Math.random() * 7 + 5;

        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;

        confetti.style.borderRadius =
            Math.random() > 0.4 ? '50%' : '0%';

        document.body.appendChild(confetti);

        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}
