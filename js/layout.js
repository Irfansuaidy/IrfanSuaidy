// ================================
// THEME MANAGEMENT
// ================================

// Global theme state (replaces localStorage)
let currentTheme = 'light';

// Theme toggle functionality
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    
    // Add smooth transition effect
    document.body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

// Initialize theme on page load
function initTheme() {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentTheme = prefersDark ? 'dark' : 'light';
    
    document.body.setAttribute('data-theme', currentTheme);
}

// ================================
// SMOOTH SCROLLING & NAVIGATION
// ================================


// Active navigation highlighting
function initNavigationHighlight() {
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a, nav a[href^="#"]');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ================================
// INTERSECTION OBSERVER
// ================================

// Create intersection observer for animations
function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all sections and cards
    document.querySelectorAll('section, .card, .skill-card').forEach(element => {
        observer.observe(element);
    });
}

// ================================
// CONTACT FORM
// ================================

function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1000);
        });
    }
}

// ================================
// ENHANCED FORM INTERACTIONS
// ================================

function initFormEnhancements() {
    const formInputs = document.querySelectorAll('.form-input');
    
    formInputs.forEach(input => {
        // Add focus effects
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('input-focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentNode.classList.remove('input-focused');
        });
        
        // Add typing animation
        input.addEventListener('input', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// ================================
// ENHANCED BUTTON EFFECTS
// ================================

function initButtonEffects() {
    const buttons = document.querySelectorAll('button, .btn, a[class*="btn"]');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
    });
}

// ================================
// INITIALIZATION
// ================================

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Core functionality
    initTheme();
    initSmoothScrolling();
    initNavigationHighlight();
    initIntersectionObserver();
    
    // Form functionality
    initContactForm();
    initFormEnhancements();
    
    // Interactive components
    initCardStackNavigation();
    initButtonEffects();
    
    // Add loading complete class
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Recalculate any position-dependent elements
    initCardStackNavigation();
}, 250));

// Handle theme system preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!currentTheme) {
        currentTheme = e.matches ? 'dark' : 'light';
        document.body.setAttribute('data-theme', currentTheme);
    }
});

// Export functions for global access
window.toggleTheme = toggleTheme;
window.initTheme = initTheme;