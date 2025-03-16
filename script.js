// Hamburger menü
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

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

// Sayfa yüklendiğinde önceki temayı kontrol et
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Açık Mod';
    } else {
        body.classList.remove('dark-mode');
        darkModeToggle.textContent = 'Koyu Mod';
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

    // İletişim formu gönderimi
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const successName = document.getElementById('success-name');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        // Konsola mesaj yazdır
        console.log(`Ad: ${name}, E-posta: ${email}, Mesaj: ${message}`);

        // Başarı mesajını göster
        successName.textContent = name;
        successMessage.style.display = 'block';
        contactForm.style.display = 'none';

        // Formu sıfırla
        contactForm.reset();
    });
});

// Konsol mesajı
console.log("Eyüpcan Yıldız'ın statik sitesine hoş geldiniz!");