// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('.loader-wrapper').style.opacity = '0';
            document.querySelector('.loader-wrapper').style.pointerEvents = 'none';
        }, 1000);
    });

    // Intersection Observer para animações
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Smooth scroll com offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Atualização ativa do menu
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 150 && window.pageYOffset < sectionTop + sectionHeight - 150) {
                const id = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.href.includes(id)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Efeitos de hover melhorados
    document.querySelectorAll('.member-card, .album-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});

 // Adicione este script
 document.getElementById('colorblindFilter').addEventListener('change', function(e) {
    const body = document.body;
    const filters = {
        'none': '',
        'protanopia': 'protanopia',
        'deuteranopia': 'deuteranopia',
        'tritanopia': 'tritanopia',
        'achromatopsia': 'achromatopsia'
    };
    
    // Remove todas as classes de filtro
    body.className = '';
    if (filters[e.target.value]) {
        body.classList.add(filters[e.target.value]);
    }
});

// Script original do loader
window.addEventListener('load', () => {
    document.querySelector('.loader-wrapper').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.loader-wrapper').style.display = 'none';
    }, 500);
    
    // Ativa animações de fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.classList.add('visible');
    });
});