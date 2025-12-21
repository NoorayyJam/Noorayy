// Portfolio Website - Main JavaScript
// Handles smooth scrolling, mobile menu, and animations

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('translate-x-full');
            mobileMenuBackdrop.classList.toggle('hidden');
        });

        // Close mobile menu when clicking backdrop
        mobileMenuBackdrop.addEventListener('click', function() {
            mobileMenu.classList.add('translate-x-full');
            mobileMenuBackdrop.classList.add('hidden');
        });

        // Close mobile menu when clicking on links
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('translate-x-full');
                mobileMenuBackdrop.classList.add('hidden');
            });
        });
    }

    // Active section highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinksArray = document.querySelectorAll('.nav-link');

    function highlightActiveSection() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinksArray.forEach(link => {
            link.classList.remove('text-[#14213d]');
            link.classList.add('text-gray-600');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.remove('text-gray-600');
                link.classList.add('text-[#14213d]');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    
    // Contact button interactions
    const whatsappButton = document.getElementById('whatsapp-btn');
    const emailButton = document.getElementById('email-btn');
    const heroCtaButton = document.getElementById('hero-cta-btn');

    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            // Replace with actual WhatsApp number
            window.open('https://wa.me/+923004159733?text=Hi! I\'m interested in a free website review for my business.', '_blank');
        });
    }

    if (emailButton) {
        emailButton.addEventListener('click', function() {
            window.location.href = 'mailto:noorayyjam@gmail.com?subject=Free Website Review Request';
        });
    }

    if (heroCtaButton) {
        heroCtaButton.addEventListener('click', function() {
            // Same as WhatsApp button
            window.open('https://wa.me/+923004159733?text=Hi! I\'m interested in a free website review for my business.', '_blank');
        });
    }

    // Add subtle hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add loading animation to buttons
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
    });
});

// Utility function for smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scroll-to-top');
    if (window.pageYOffset > 300) {
        if (scrollButton) {
            scrollButton.classList.remove('hidden');
        }
    } else {
        if (scrollButton) {
            scrollButton.classList.add('hidden');
        }
    }
});