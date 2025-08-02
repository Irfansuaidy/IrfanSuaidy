class CardStackAnimator {
    constructor() {
        this.cards = document.querySelectorAll('.card-item');
        this.navDots = document.querySelectorAll('.nav-dot');
        this.currentIndex = 0;
        this.isAnimating = false;
        this.autoRotateInterval = null;
        
        this.init();
    }
    
    init() {
        this.setupInitialPositions();
        this.setupEventListeners();
        this.startAutoRotation();
    }
    
    setupInitialPositions() {
        this.cards.forEach((card, index) => {
            const zIndex = this.cards.length - index;
            const translateX = index * 6; // Reduced offset for better centering
            const translateY = index * 8; // Reduced offset
            const rotateZ = (index - 1) * 2; // Reduced rotation
            const scale = 1 - (index * 0.03); // Reduced scale difference
            
            card.style.zIndex = zIndex;
            card.style.transform = `
                translateX(${translateX}px) 
                translateY(${translateY}px) 
                rotateZ(${rotateZ}deg) 
                scale(${scale})
            `;
            card.style.transformOrigin = 'center center';
            
            if (index !== 0) {
                card.style.opacity = '0.8';
            } else {
                card.style.opacity = '1';
            }
        });
    }
    
    setupEventListeners() {
        // Navigation dots
        this.navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (!this.isAnimating) {
                    this.goToCard(index);
                    this.resetAutoRotation();
                }
            });
        });
        
        // Card click events
        this.cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                if (!this.isAnimating && index !== this.currentIndex) {
                    this.goToCard(index);
                    this.resetAutoRotation();
                }
            });
            
            // Add hover effect
            card.addEventListener('mouseenter', () => {
                if (index === this.currentIndex) {
                    card.style.transform = card.style.transform.replace(/scale\([^)]*\)/, 'scale(1.02)');
                }
            });
            
            card.addEventListener('mouseleave', () => {
                const relativeIndex = (index - this.currentIndex + this.cards.length) % this.cards.length;
                const scale = 1 - (relativeIndex * 0.03);
                card.style.transform = card.style.transform.replace(/scale\([^)]*\)/, `scale(${scale})`);
            });
        });
        
        // Pause on hover
        const cardStack = document.querySelector('.card-stack');
        if (cardStack) {
            cardStack.addEventListener('mouseenter', () => {
                clearInterval(this.autoRotateInterval);
            });
            
            cardStack.addEventListener('mouseleave', () => {
                this.startAutoRotation();
            });
        }
    }
    
    goToCard(targetIndex) {
        if (this.isAnimating || targetIndex === this.currentIndex) return;
        
        this.isAnimating = true;
        const direction = targetIndex > this.currentIndex ? 1 : -1;
        
        // Update navigation dots
        this.updateNavDots(targetIndex);
        
        // Animate cards
        this.animateToPosition(targetIndex, direction);
        
        // Update current index
        this.currentIndex = targetIndex;
        
        // Reset animation flag
        setTimeout(() => {
            this.isAnimating = false;
        }, 600);
    }
    
    animateToPosition(targetIndex, direction) {
        this.cards.forEach((card, index) => {
            const relativeIndex = (index - targetIndex + this.cards.length) % this.cards.length;
            const zIndex = this.cards.length - relativeIndex;
            const translateX = relativeIndex * 6;
            const translateY = relativeIndex * 8;
            const rotateZ = (relativeIndex - 1) * 2;
            const scale = 1 - (relativeIndex * 0.03);
            const opacity = relativeIndex === 0 ? 1 : 0.8;
            
            // Smooth transition
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)';
            card.style.zIndex = zIndex;
            card.style.transform = `
                translateX(${translateX}px) 
                translateY(${translateY}px) 
                rotateZ(${rotateZ}deg) 
                scale(${scale})
            `;
            card.style.opacity = opacity;
            
            // Remove transition after animation
            setTimeout(() => {
                card.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
            }, 600);
        });
    }
    
    updateNavDots(activeIndex) {
        this.navDots.forEach((dot, index) => {
            if (index === activeIndex) {
                dot.classList.remove('bg-gray-custom');
                dot.classList.add('bg-primary');
                dot.style.transform = 'scale(1.2)';
                dot.style.boxShadow = '0 0 10px rgba(0, 255, 204, 0.5)';
            } else {
                dot.classList.remove('bg-primary');
                dot.classList.add('bg-gray-custom');
                dot.style.transform = 'scale(1)';
                dot.style.boxShadow = 'none';
            }
        });
    }
    
    startAutoRotation() {
        this.autoRotateInterval = setInterval(() => {
            if (!this.isAnimating) {
                const nextIndex = (this.currentIndex + 1) % this.cards.length;
                this.goToCard(nextIndex);
            }
        }, 3000); // Auto rotate every 3 seconds
    }
    
    resetAutoRotation() {
        clearInterval(this.autoRotateInterval);
        setTimeout(() => {
            this.startAutoRotation();
        }, 2000); // Wait 2 seconds before resuming auto rotation
    }
}

// Initialize the card stack animator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add some delay to ensure all elements are loaded
    setTimeout(() => {
        new CardStackAnimator();
    }, 100);
});

// Add enhanced CSS styles
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
    .card-stack {
        perspective: 1000px;
        position: relative;
        min-height: 320px;
    }
    
    .card-item {
        cursor: pointer;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        will-change: transform, opacity;
        transform-style: preserve-3d;
    }
    
    .card-item:hover {
        box-shadow: 0 15px 40px rgba(0, 255, 204, 0.1);
    }
    
    .nav-dot {
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .nav-dot:hover {
        transform: scale(1.1) !important;
    }
    
    .icon-glow {
        filter: drop-shadow(0 0 10px rgba(0, 255, 204, 0.3));
    }
    
    @media (max-width: 1024px) {
        .card-stack {
            min-height: 280px;
        }
        
        .card-item {
            padding: 1.5rem;
        }
    }
    
    @media (max-width: 768px) {
        .card-stack {
            min-height: 320px;
        }
    }
`;
document.head.appendChild(enhancedStyles);