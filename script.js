// Hamburger menü
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Açık Mod';
            localStorage.setItem('theme', 'dark');
        } else {
            darkModeToggle.textContent = 'Koyu Mod';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Sayfa yüklendiğinde önceki temayı kontrol et
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.textContent = 'Açık Mod';
    } else {
        body.classList.remove('dark-mode');
        if (darkModeToggle) darkModeToggle.textContent = 'Koyu Mod';
    }

    // Bölüm animasyonları
    const sections = document.querySelectorAll('.animate-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const progressBars = entry.target.querySelectorAll('.progress');
                progressBars.forEach(bar => bar.classList.add('animate-progress'));
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
});

// Konsol mesajı
console.log("Eyüpcan Yıldız'ın statik sitesine hoş geldiniz!");
