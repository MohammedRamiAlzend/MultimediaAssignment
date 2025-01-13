document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    // Check for saved user preference
    const darkMode = localStorage.getItem('darkMode');

    // Apply saved preference
    if (darkMode === 'enabled') {
        htmlElement.setAttribute('data-theme', 'dark');
    }

    // Toggle button click handler
    darkModeToggle.addEventListener('click', () => {
        if (htmlElement.getAttribute('data-theme') === 'dark') {
            htmlElement.removeAttribute('data-theme');
            localStorage.setItem('darkMode', null);
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('darkMode', 'enabled');
        }
    });

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (!localStorage.getItem('darkMode')) {
            htmlElement.setAttribute('data-theme', 'dark');
        }
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('darkMode')) {
            if (e.matches) {
                htmlElement.setAttribute('data-theme', 'dark');
            } else {
                htmlElement.removeAttribute('data-theme');
            }
        }
    });
});

const teachers = document.querySelectorAll('.teacher');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

function showTeacher(index, direction) {
    teachers.forEach(teacher => {
        teacher.classList.remove('active');
        teacher.classList.remove('exit');
    });

    // Add exit animation to current teacher
    if (teachers[currentIndex]) {
        teachers[currentIndex].classList.add('exit');
    }

    // Add entrance animation to new teacher
    setTimeout(() => {
        teachers[index].classList.add('active');
    }, 100);
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + teachers.length) % teachers.length;
    showTeacher(currentIndex, 'prev');
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % teachers.length;
    showTeacher(currentIndex, 'next');
});
const modal = document.getElementById('videoModal');
const closeModal = document.querySelector('.modal .close');
const videoPlayer = document.getElementById('videoPlayer');
const letsGoLinks = document.querySelectorAll('.card a');
const videos = [
    "NJppSS3no1U",
    "iX7Go8kCDyU",
    "bXo-LIBxqqg",
    "tIQEAN0sWjU",
    "IPHPI737bpI"
];

letsGoLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        videoPlayer.src = `https://www.youtube.com/embed/${videos[index]}`;
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    videoPlayer.src = '';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        videoPlayer.src = '';
    }
});
const tips = [
    "Practice French with a language partner for 15 minutes daily.",
    "Watch French movies with subtitles to improve listening skills.",
    "Learn 5 new French words every day and use them in sentences.",
    "Listen to French songs and try to sing along.",
    "Use flashcards to memorize tricky grammar rules.",
    "Try journaling in French to enhance writing skills.",
    "Follow French influencers on social media for daily immersion."
];

const tipContent = document.getElementById('tip-content');
const newTipBtn = document.getElementById('new-tip-btn');

function showRandomTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    tipContent.textContent = tips[randomIndex];
}
window.onload = showRandomTip;
newTipBtn.addEventListener('click', showRandomTip);

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all major sections
document.querySelectorAll('.AboutUs, .card, .Teacher, .daily-tips-section').forEach((el) => {
    observer.observe(el);
});
