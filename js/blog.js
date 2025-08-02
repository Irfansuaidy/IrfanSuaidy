const blogPosts = [
            {
                category: 'web-development',
                emoji: '💻',
                title: 'What does it take to become a web developer?',
                excerpt: 'Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet. From frontend frameworks to backend architectures...',
                readTime: '5 min read',
                date: '2024-08-01',
                featured: true
            },
            {
                category: 'web-development',
                emoji: '🚀',
                title: 'Modern JavaScript Frameworks',
                excerpt: 'Exploring the latest trends in JavaScript frameworks and how they\'re shaping the future of web development. React, Vue, and Angular continue to evolve rapidly...',
                readTime: '7 min read',
                date: '2024-07-28',
                featured: false
            },
            {
                category: 'design',
                emoji: '📱',
                title: 'Responsive Design Best Practices',
                excerpt: 'Learn how to create websites that look great on all devices with modern responsive design techniques. Mobile-first approach and flexible grid systems...',
                readTime: '4 min read',
                date: '2024-07-25',
                featured: false
            },
            {
                category: 'technology',
                emoji: '🤖',
                title: 'AI in Web Development',
                excerpt: 'How artificial intelligence is revolutionizing the way we build websites. From automated code generation to intelligent user experiences...',
                readTime: '6 min read',
                date: '2024-07-22',
                featured: true
            },
            {
                category: 'web-development',
                emoji: '⚡',
                title: 'Performance Optimization Techniques',
                excerpt: 'Speed up your websites with these proven optimization strategies. Code splitting, lazy loading, and advanced caching mechanisms...',
                readTime: '8 min read',
                date: '2024-07-20',
                featured: false
            },
            {
                category: 'design',
                emoji: '🎨',
                title: 'Color Theory in Digital Design',
                excerpt: 'Master the art of color selection for web interfaces. Understanding color psychology and creating harmonious palettes that enhance user experience...',
                readTime: '5 min read',
                date: '2024-07-18',
                featured: false
            }
        ];

        let currentFilter = 'all';
        let displayedPosts = 3;

        // Initialize the blog section
        function initBlog() {
            setTimeout(() => {
                document.getElementById('loading').style.display = 'none';
                document.getElementById('blogGrid').style.opacity = '1';
                renderBlogPosts();
                updateLoadMoreButton();
            }, 1500);
        }

        // Render blog posts
        function renderBlogPosts() {
            const blogGrid = document.getElementById('blogGrid');
            const filteredPosts = currentFilter === 'all' 
                ? blogPosts 
                : blogPosts.filter(post => post.category === currentFilter);
            
            const postsToShow = filteredPosts.slice(0, displayedPosts);
            
            blogGrid.innerHTML = postsToShow.map((post, index) => `
                <article class="blog-card bg-dark rounded-2xl overflow-hidden border border-gray-custom transition-all duration-500 hover:-translate-y-2 glow-effect opacity-0 transform translate-y-4" 
                         style="animation-delay: ${index * 100}ms; animation-fill-mode: forwards; animation-name: fadeInUp; animation-duration: 0.6s;">
                    <div class="relative overflow-hidden">
                        <div class="w-full h-48 blog-image-bg flex items-center justify-center text-6xl text-dark transition-transform duration-300 hover:scale-110">
                            ${post.emoji}
                        </div>
                        ${post.featured ? `
                            <div class="absolute top-4 right-4">
                                <span class="bg-primary text-dark text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                            </div>
                        ` : ''}
                        <div class="absolute inset-0 shimmer opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div class="p-6 space-y-4">
                        <div class="flex items-center justify-between">
                            <span class="text-primary text-sm font-semibold uppercase tracking-wide">
                                ${post.category.replace('-', ' ')}
                            </span>
                            <div class="flex items-center text-text-gray text-xs space-x-2">
                                <span>📅 ${formatDate(post.date)}</span>
                                <span>•</span>
                                <span>⏱️ ${post.readTime}</span>
                            </div>
                        </div>
                        <h3 class="text-white text-lg font-bold leading-tight hover:text-primary transition-colors duration-300 cursor-pointer">
                            ${post.title}
                        </h3>
                        <p class="text-text-gray leading-relaxed text-sm line-clamp-3">
                            ${post.excerpt}
                        </p>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-custom/50">
                            <button class="text-primary font-medium hover:text-primary/80 transition-colors duration-300 flex items-center space-x-1">
                                <a href="blog.html" class=" no-underline transition-colors duration-300 hover:text-primary">Read More</a>
                                <span class="transform transition-transform duration-300 hover:translate-x-1">→</span>
                            </button>
                            <div class="flex space-x-2">
                                <button class="w-8 h-8 rounded-full border border-gray-custom hover:border-primary hover:text-primary transition-colors duration-300 flex items-center justify-center text-text-gray">
                                    ♡
                                </button>
                                <button class="w-8 h-8 rounded-full border border-gray-custom hover:border-primary hover:text-primary transition-colors duration-300 flex items-center justify-center text-text-gray">
                                    ↗
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            `).join('');
        }

        // Format date
        function formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
            });
        }

        // Update load more button visibility
        function updateLoadMoreButton() {
            const filteredPosts = currentFilter === 'all' 
                ? blogPosts 
                : blogPosts.filter(post => post.category === currentFilter);
            
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            if (displayedPosts < filteredPosts.length) {
                loadMoreBtn.classList.remove('hidden');
            } else {
                loadMoreBtn.classList.add('hidden');
            }
        }

        // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.remove('active', 'bg-primary', 'text-dark');
                    b.classList.add('bg-transparent', 'text-text-gray');
                });
                btn.classList.add('active', 'bg-primary', 'text-dark');
                btn.classList.remove('bg-transparent', 'text-text-gray');

                // Update filter and reset displayed posts
                currentFilter = btn.dataset.filter;
                displayedPosts = 3;
                renderBlogPosts();
                updateLoadMoreButton();
            });
        });

        // Load more functionality
        document.getElementById('loadMoreBtn').addEventListener('click', () => {
            displayedPosts += 3;
            renderBlogPosts();
            updateLoadMoreButton();
        });

        // Newsletter modal functionality
        const modal = document.getElementById('newsletterModal');
        const subscribeBtn = document.getElementById('subscribeBtn');
        const closeModal = document.getElementById('closeModal');

        subscribeBtn.addEventListener('click', () => {
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.querySelector('.bg-dark').classList.remove('scale-90');
        });

        closeModal.addEventListener('click', () => {
            modal.classList.add('opacity-0', 'pointer-events-none');
            modal.querySelector('.bg-dark').classList.add('scale-90');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('opacity-0', 'pointer-events-none');
                modal.querySelector('.bg-dark').classList.add('scale-90');
            }
        });

        // Newsletter form submission
        modal.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with email: ${email}`);
            modal.classList.add('opacity-0', 'pointer-events-none');
            modal.querySelector('.bg-dark').classList.add('scale-90');
        });

        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', initBlog);