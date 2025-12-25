// DOM Elements
const loginScreen = document.getElementById('loginScreen');
const greetingScreen = document.getElementById('greetingScreen');
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const userNameDisplay = document.getElementById('userName');
const wishText = document.getElementById('wishText');
const btnNewWish = document.getElementById('btnNewWish');
const btnLogout = document.getElementById('btnLogout');
const musicControl = document.getElementById('musicControl');
const musicIcon = document.getElementById('musicIcon');
const bgMusic = document.getElementById('bgMusic');

let currentUser = '';
let musicPlaying = false;

// Initialize particles
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 30;
    const horseCount = 4;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 4 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        container.appendChild(particle);
    }
    
    for (let i = 0; i < horseCount; i++) {
        const horse = document.createElement('div');
        horse.classList.add('particle', 'horse');
        horse.textContent = '🐴';
        horse.style.left = Math.random() * 100 + '%';
        horse.style.top = Math.random() * 100 + '%';
        horse.style.animationDelay = Math.random() * 4 + 's';
        horse.style.animationDuration = (Math.random() * 4 + 4) + 's';
        container.appendChild(horse);
    }
}

// Create falling petals
function createFallingPetals() {
    const container = document.getElementById('fallingPetals');
    const petals = ['🌸', '🌼', '💮', '🏵️'];
    
    function addPetal() {
        if (container.children.length < 25) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            petal.textContent = petals[Math.floor(Math.random() * petals.length)];
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDuration = (Math.random() * 6 + 8) + 's';
            petal.style.fontSize = (Math.random() * 12 + 14) + 'px';
            container.appendChild(petal);
            
            setTimeout(() => petal.remove(), 14000);
        }
    }
    
    // Initial petals
    for (let i = 0; i < 15; i++) {
        setTimeout(addPetal, i * 500);
    }
    
    // Continuous petals
    setInterval(addPetal, 1500);
}

// Get random wish
function getRandomWish() {
    return wishes[Math.floor(Math.random() * wishes.length)];
}

// Enhanced confetti effect
function launchConfetti() {
    const duration = 5000;
    const end = Date.now() + duration;
    const colors = ['#FFD700', '#DC143C', '#FFF4B0', '#FF6347', '#FFB7C5', '#FFA500'];

    // Big initial burst
    confetti({
        particleCount: 120,
        spread: 160,
        origin: { y: 0.55 },
        colors: colors,
        startVelocity: 50,
        gravity: 0.9,
        scalar: 1.3
    });

    // Side cannons
    setTimeout(() => {
        confetti({ particleCount: 60, angle: 60, spread: 70, origin: { x: 0, y: 0.65 }, colors, startVelocity: 50 });
        confetti({ particleCount: 60, angle: 120, spread: 70, origin: { x: 1, y: 0.65 }, colors, startVelocity: 50 });
    }, 250);

    // Continuous effect
    (function frame() {
        confetti({ particleCount: 3, angle: 60, spread: 60, origin: { x: 0 }, colors, startVelocity: 35 });
        confetti({ particleCount: 3, angle: 120, spread: 60, origin: { x: 1 }, colors, startVelocity: 35 });
        
        if (Math.random() > 0.88) {
            confetti({
                particleCount: 25,
                spread: 360,
                origin: { x: Math.random(), y: Math.random() * 0.4 },
                colors,
                startVelocity: 25,
                gravity: 0.5,
                scalar: 1.4
            });
        }

        if (Date.now() < end) requestAnimationFrame(frame);
    })();

    // Grand finale
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                confetti({
                    particleCount: 80,
                    spread: 100,
                    origin: { x: 0.15 + (i * 0.175), y: 0.5 },
                    colors,
                    startVelocity: 45,
                    gravity: 1
                });
            }, i * 150);
        }
    }, duration - 800);
}

// Show greeting screen
function showGreeting(username) {
    const displayName = displayNames[username] || username;
    userNameDisplay.textContent = displayName;
    wishText.textContent = getRandomWish();
    
    gsap.to(loginScreen, {
        opacity: 0,
        scale: 0.85,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
            loginScreen.classList.add('hidden');
            greetingScreen.classList.remove('hidden');
            
            gsap.from(greetingScreen, { opacity: 0, scale: 0.85, duration: 0.7, ease: 'back.out(1.5)' });
            gsap.from('.greeting-card', { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.2 });
            
            launchConfetti();
        }
    });
}

// Show login screen
function showLogin() {
    console.log('showLogin called');
    gsap.to(greetingScreen, {
        opacity: 0,
        scale: 0.85,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
            greetingScreen.classList.add('hidden');
            gsap.set(greetingScreen, { opacity: 1, scale: 1 }); // Reset for next time
            loginScreen.classList.remove('hidden');
            gsap.set(loginScreen, { opacity: 1, scale: 1 });
            gsap.from(loginScreen, { opacity: 0, scale: 0.85, duration: 0.7, ease: 'back.out(1.5)' });
            loginForm.reset();
            errorMessage.textContent = '';
        }
    });
}

// Handle login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = usernameInput.value.trim().toLowerCase();
    const password = passwordInput.value;
    
    if (accounts[username] && accounts[username] === password) {
        currentUser = username;
        errorMessage.textContent = '';
        
        // Animation cho hero image thay vì envelope
        gsap.to('.hero-image', {
            scale: 1.3,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => {
                gsap.set('.hero-image', { scale: 1, opacity: 1 });
                showGreeting(username);
            }
        });
        
        // Confetti effect
        setTimeout(() => {
            confetti({
                particleCount: 40,
                spread: 90,
                origin: { y: 0.4, x: 0.5 },
                colors: ['#FFD700', '#FFF4B0', '#DC143C'],
                startVelocity: 20
            });
        }, 150);
        
    } else {
        errorMessage.textContent = '❌ Tên đăng nhập hoặc mật khẩu không đúng!';
        gsap.to('.login-form', { x: -8, duration: 0.08, yoyo: true, repeat: 5, ease: 'power1.inOut' });
    }
});

// Handle new wish
btnNewWish.addEventListener('click', () => {
    confetti({ particleCount: 25, spread: 45, origin: { y: 0.65, x: 0.3 }, colors: ['#FFD700', '#DC143C', '#FFF4B0'] });
    confetti({ particleCount: 25, spread: 45, origin: { y: 0.65, x: 0.7 }, colors: ['#FFD700', '#DC143C', '#FFF4B0'] });
    
    gsap.to('.wish-container', {
        scale: 0.88,
        opacity: 0,
        rotationY: 80,
        duration: 0.35,
        ease: 'power2.in',
        onComplete: () => {
            wishText.textContent = getRandomWish();
            gsap.fromTo('.wish-container', 
                { scale: 0.88, opacity: 0, rotationY: -80 },
                { scale: 1, opacity: 1, rotationY: 0, duration: 0.5, ease: 'back.out(1.5)' }
            );
            
            setTimeout(() => {
                confetti({ particleCount: 60, spread: 70, origin: { y: 0.55 }, colors: ['#FFD700', '#DC143C', '#FFB7C5'] });
            }, 250);
        }
    });
});

// Handle logout
btnLogout.addEventListener('click', () => {
    console.log('Logout clicked');
    showLogin();
});

// Music control
musicControl.addEventListener('click', () => {
    if (musicPlaying) {
        bgMusic.pause();
        musicIcon.textContent = '🔇';
        musicPlaying = false;
    } else {
        bgMusic.play().catch(() => {});
        musicIcon.textContent = '🔊';
        musicPlaying = true;
    }
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createFallingPetals();
    createFireworks();
    
    // Entrance animations
    gsap.from('.hero-image', { opacity: 0, y: -40, duration: 0.9, ease: 'bounce.out' });
    gsap.from('.title', { opacity: 0, y: 25, duration: 0.7, delay: 0.5 });
    gsap.from('.subtitle', { opacity: 0, duration: 0.6, delay: 0.65 });
    gsap.from('.horse-zodiac', { opacity: 0, scale: 0, duration: 0.7, delay: 0.75, ease: 'back.out(1.5)' });
    gsap.from('.login-form', { opacity: 0, y: 40, duration: 0.9, delay: 0.85 });
    gsap.from('.decoration-left', { x: -150, opacity: 0, duration: 1.2, delay: 0.4, ease: 'power3.out' });
    gsap.from('.decoration-right', { x: 150, opacity: 0, duration: 1.2, delay: 0.4, ease: 'power3.out' });
});

// Create fireworks effect
function createFireworks() {
    const container = document.getElementById('fireworks');
    const colors = ['#FFD700', '#DC143C', '#FF6347', '#00FF7F', '#FF69B4', '#00BFFF', '#FFA500', '#FFFFFF'];
    
    function createSingleFirework() {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.5);
        const color = colors[Math.floor(Math.random() * colors.length)];
        const particleCount = 20 + Math.floor(Math.random() * 15);
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'firework-particle';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.background = color;
            particle.style.boxShadow = `0 0 6px ${color}, 0 0 12px ${color}`;
            
            const angle = (i / particleCount) * 360;
            const distance = 50 + Math.random() * 80;
            const tx = Math.cos(angle * Math.PI / 180) * distance;
            const ty = Math.sin(angle * Math.PI / 180) * distance;
            
            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');
            
            container.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1200);
        }
    }
    
    // Launch fireworks periodically
    setInterval(() => {
        if (Math.random() > 0.3) {
            createSingleFirework();
        }
    }, 800);
    
    // Initial burst
    for (let i = 0; i < 3; i++) {
        setTimeout(createSingleFirework, i * 300);
    }
}
