// Card stack animation
        let currentCard = 0;
        const cards = document.querySelectorAll('.card-item');
        const dots = document.querySelectorAll('.nav-dot');

        function showCard(index) {
            cards.forEach((card, i) => {
                if (i === index) {
                    card.style.transform = 'translateX(0) translateY(0) rotateY(0)';
                    card.style.opacity = '1';
                    card.style.zIndex = '10';
                } else if (i < index) {
                    card.style.transform = 'translateX(-100px) translateY(20px) rotateY(-15deg)';
                    card.style.opacity = '0.7';
                    card.style.zIndex = '5';
                } else {
                    card.style.transform = 'translateX(100px) translateY(20px) rotateY(15deg)';
                    card.style.opacity = '0.7';
                    card.style.zIndex = '5';
                }
            });

            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.style.backgroundColor = '#f1b263';
                    dot.style.transform = 'scale(1.2)';
                } else {
                    dot.style.backgroundColor = '#86a59d';
                    dot.style.transform = 'scale(1)';
                }
            });
        }

        // Auto-rotate cards
        setInterval(() => {
            currentCard = (currentCard + 1) % cards.length;
            showCard(currentCard);
        }, 2000);

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentCard = index;
                showCard(currentCard);
            });
        });

        // Initialize
        showCard(0);