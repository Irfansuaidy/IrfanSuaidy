const blogData = {
    'web-development-intro': {
        category: 'web-development',
        emoji: '💻',
        title: 'What does it take to become a web developer?',
        excerpt: 'Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet.',
        readTime: '5 min read',
        date: '2024-08-01',
        featured: true,
        views: 1247,
        tags: ['web-development', 'career', 'beginner', 'guide'],
        content: `
            <p>Web development has become one of the most sought-after skills in today's digital age. With businesses rapidly moving online and the constant need for digital presence, web developers are in high demand across all industries.</p>

            <h2>The Foundation: Understanding the Basics</h2>
            <p>Before diving into complex frameworks and libraries, it's crucial to master the fundamental building blocks of web development:</p>

            <h3>HTML - The Structure</h3>
            <p>HTML (HyperText Markup Language) is the skeleton of every webpage. It provides the basic structure and content organization. Think of it as the foundation of a house - everything else is built on top of it.</p>

            <h3>CSS - The Style</h3>
            <p>CSS (Cascading Style Sheets) is what makes websites beautiful. It controls the visual presentation, layout, colors, fonts, and overall aesthetic appeal of your web pages.</p>

            <h3>JavaScript - The Interactivity</h3>
            <p>JavaScript brings life to static HTML and CSS. It's the programming language that adds interactivity, dynamic content, and complex functionality to websites.</p>

            <h2>The Learning Path</h2>
            <p>Becoming a web developer is a journey that requires dedication and continuous learning. Here's a structured approach:</p>

            <blockquote>
                "The best way to learn web development is by building projects. Start small, think big, and never stop coding."
            </blockquote>

            <h3>1. Start with the Fundamentals</h3>
            <ul>
                <li>Master HTML5 semantic elements</li>
                <li>Learn CSS3 properties and flexbox/grid</li>
                <li>Understand JavaScript ES6+ features</li>
                <li>Practice responsive design principles</li>
            </ul>

            <h3>2. Choose Your Path</h3>
            <p>Web development offers different specialization paths:</p>
            <ul>
                <li><strong>Frontend Development:</strong> Focus on user interface and experience</li>
                <li><strong>Backend Development:</strong> Work with servers, databases, and APIs</li>
                <li><strong>Full-Stack Development:</strong> Combine both frontend and backend skills</li>
            </ul>

            <h3>3. Learn Modern Tools and Frameworks</h3>
            <p>Once you have a solid foundation, explore popular frameworks and tools:</p>
            <ul>
                <li>Frontend: React, Vue.js, Angular</li>
                <li>Backend: Node.js, Python Django, Ruby on Rails</li>
                <li>Database: MongoDB, PostgreSQL, MySQL</li>
                <li>Version Control: Git and GitHub</li>
            </ul>

            <h2>Essential Skills Beyond Coding</h2>
            <p>Technical skills are just one part of being a successful web developer. You'll also need:</p>

            <h3>Problem-Solving Mindset</h3>
            <p>Web development is essentially problem-solving. You'll encounter bugs, compatibility issues, and complex requirements that need creative solutions.</p>

            <h3>Continuous Learning Attitude</h3>
            <p>The web development landscape evolves rapidly. New frameworks, tools, and best practices emerge constantly. Successful developers embrace lifelong learning.</p>

            <h3>Communication Skills</h3>
            <p>You'll work with designers, project managers, clients, and other developers. Clear communication ensures project success and career growth.</p>

            <h2>Building Your Portfolio</h2>
            <p>A strong portfolio is your ticket to landing your first web development job. Include:</p>
            <ul>
                <li>Personal projects that showcase your skills</li>
                <li>Code samples and GitHub repositories</li>
                <li>Live demos of your applications</li>
                <li>Documentation of your development process</li>
            </ul>

            <h2>The Road Ahead</h2>
            <p>Becoming a web developer is challenging but incredibly rewarding. The field offers excellent career prospects, creative fulfillment, and the opportunity to build solutions that impact millions of users.</p>

            <p>Remember, every expert was once a beginner. Start your journey today, be patient with yourself, and celebrate small victories along the way. The web development community is welcoming and supportive - don't hesitate to ask questions and share your progress.</p>
        `
    },
    'modern-javascript': {
        category: 'web-development',
        emoji: '🚀',
        title: 'Modern JavaScript Frameworks',
        excerpt: 'Exploring the latest trends in JavaScript frameworks and how they\'re shaping the future of web development.',
        readTime: '7 min read',
        date: '2024-07-28',
        featured: false,
        views: 892,
        tags: ['javascript', 'frameworks', 'react', 'vue', 'angular'],
        content: `
            <p>The JavaScript ecosystem has evolved dramatically over the past decade. From simple DOM manipulation to complex, scalable applications, JavaScript frameworks have revolutionized how we build web applications.</p>

            <h2>The Big Three: React, Vue, and Angular</h2>

            <h3>React - The Component King</h3>
            <p>Created by Facebook, React has dominated the frontend landscape with its component-based architecture and virtual DOM. Its flexibility and extensive ecosystem make it a popular choice for projects of all sizes.</p>

            <h3>Vue.js - The Progressive Framework</h3>
            <p>Vue.js offers a gentle learning curve while providing powerful features. Its template syntax is intuitive for developers coming from HTML/CSS backgrounds, making it an excellent choice for both beginners and experts.</p>

            <h3>Angular - The Full Framework</h3>
            <p>Angular provides a complete solution with built-in features like routing, forms handling, and HTTP client. It's particularly popular in enterprise environments where structure and conventions are valued.</p>

            <h2>Emerging Trends</h2>
            <p>The JavaScript framework landscape continues to evolve with new approaches and optimizations:</p>

            <ul>
                <li><strong>Server-Side Rendering (SSR):</strong> Frameworks like Next.js and Nuxt.js</li>
                <li><strong>Static Site Generation:</strong> Gatsby and Gridsome</li>
                <li><strong>Micro-frontends:</strong> Breaking large applications into smaller, manageable pieces</li>
                <li><strong>Web Components:</strong> Browser-native component architecture</li>
            </ul>

            <blockquote>
                "Choose the framework that best fits your project requirements, team expertise, and long-term maintenance goals."
            </blockquote>

            <p>The future of JavaScript frameworks looks bright, with continued focus on performance, developer experience, and accessibility.</p>
        `
    },
    'responsive-design': {
        category: 'design',
        emoji: '📱',
        title: 'Responsive Design Best Practices',
        excerpt: 'Learn how to create websites that look great on all devices with modern responsive design techniques.',
        readTime: '4 min read',
        date: '2024-07-25',
        featured: false,
        views: 654,
        tags: ['responsive-design', 'css', 'mobile-first', 'ux'],
        content: `
            <p>In today's multi-device world, responsive design isn't just a nice-to-have feature—it's essential. With users accessing websites from smartphones, tablets, laptops, and desktops, your design must adapt seamlessly to any screen size.</p>

            <h2>Mobile-First Approach</h2>
            <p>Starting your design process with mobile devices in mind ensures better performance and user experience across all devices. This approach forces you to prioritize content and features.</p>

            <h3>Key Principles</h3>
            <ul>
                <li>Progressive enhancement from small to large screens</li>
                <li>Touch-friendly interface elements</li>
                <li>Optimized content hierarchy</li>
                <li>Fast loading times on mobile networks</li>
            </ul>

            <h2>CSS Grid and Flexbox</h2>
            <p>Modern CSS layout methods provide powerful tools for creating responsive designs:</p>

            <h3>CSS Grid</h3>
            <p>Perfect for two-dimensional layouts where you need control over both rows and columns. Grid is ideal for overall page layout and complex component arrangements.</p>

            <h3>Flexbox</h3>
            <p>Excellent for one-dimensional layouts and component-level design. Flexbox excels at distributing space and aligning items within containers.</p>

            <h2>Media Queries Strategy</h2>
            <p>Effective media queries are the backbone of responsive design. Consider these breakpoints:</p>

            <ul>
                <li>Mobile: 320px - 768px</li>
                <li>Tablet: 768px - 1024px</li>
                <li>Desktop: 1024px and above</li>
            </ul>

            <blockquote>
                "Design for the content, not the device. Let your content determine where breakpoints should be placed."
            </blockquote>

            <h2>Performance Considerations</h2>
            <p>Responsive design must also consider performance:</p>
            <ul>
                <li>Optimize images for different screen densities</li>
                <li>Use appropriate image formats (WebP, AVIF)</li>
                <li>Implement lazy loading for images</li>
                <li>Minimize HTTP requests</li>
            </ul>

            <p>Remember, responsive design is about creating the best possible experience for your users, regardless of how they access your content.</p>
        `
    }
};

let currentBlog = null;
let currentView = 'list'; // 'list' or 'post'

// Get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Show blog list view
function showBlogList() {
    const blogListView = document.getElementById('blog-list-view');
    const blogPostView = document.getElementById('blog-post-view');
    
    if (blogListView && blogPostView) {
        blogListView.classList.remove('hidden');
        blogPostView.classList.add('hidden');
        currentView = 'list';
        
        // Update URL without page reload
        const url = new URL(window.location);
        url.searchParams.delete('post');
        window.history.pushState({}, '', url);
        
        // Update page title
        document.title = 'Blog | Ahmad Irfan Su\'aidy';
        
        // Load blog posts if not already loaded
        loadBlogPosts();
    }
}

// Show blog post view
function showBlogPost(postKey) {
    const blogListView = document.getElementById('blog-list-view');
    const blogPostView = document.getElementById('blog-post-view');
    
    if (!blogData[postKey]) {
        console.error('Blog post not found:', postKey);
        return;
    }
    
    if (blogListView && blogPostView) {
        blogListView.classList.add('hidden');
        blogPostView.classList.remove('hidden');
        currentView = 'post';
        
        // Update URL without page reload
        const url = new URL(window.location);
        url.searchParams.set('post', postKey);
        window.history.pushState({}, '', url);
        
        // Load the blog post
        loadBlogPost(postKey);
    }
}

// Load blog posts for the list view
function loadBlogPosts() {
    const blogPostsGrid = document.getElementById('blog-posts-grid');
    if (!blogPostsGrid) return;
    
    let postsHTML = '';
    
    Object.entries(blogData).forEach(([key, post]) => {
        postsHTML += `
            <article class="blog-card bg-dark rounded-2xl overflow-hidden border border-gray-custom transition-all duration-500 hover:-translate-y-2 glow-effect opacity-0 transform translate-y-4">
                <div class="relative overflow-hidden">
                    <div class="w-full h-48 blog-image-bg flex items-center justify-center text-6xl text-dark transition-transform duration-300 hover:scale-110">
                        ${post.emoji}
                    </div>
                </div>
                <div class="p-6 space-y-4">
                    <div class="flex items-center justify-between">
                        <span class="text-primary text-sm font-semibold uppercase tracking-widest">
                            ${post.category.replace('-', ' ')}
                        </span>
                        <div class="flex items-center text-text-gray text-xs space-x-2">
                            <span><i class="fas fa-calendar-alt mr-1 text-primary"></i> ${formatDate(post.date)}</span>
                            <span>•</span>
                            <span><i class="fas fa-clock mr-1 text-primary"></i> ${post.readTime}</span>
                        </div>
                    </div>
                    <h2 class="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                        <button onclick="showBlogPost('${key}')" class="text-left no-underline hover:no-underline w-full">
                            ${post.title}
                        </button>
                    </h2>
                    <p class="text-text-gray leading-relaxed text-sm line-clamp-3">
                        ${post.excerpt}
                    </p>
                    <div class="flex items-center justify-between pt-4 border-t border-gray-custom/50">
                        <button onclick="showBlogPost('${key}')" class="text-primary font-medium hover:text-primary/80 transition-colors duration-300 flex items-center space-x-1">
                            <span>Read More</span>
                            <span class="transform transition-transform duration-300 hover:translate-x-1">→</span>
                        </button>
                    </div>
                </div>
            </article>
        `;
    });
    
    blogPostsGrid.innerHTML = postsHTML;
    
    // Initialize fade-in animations
    initFadeInAnimations();
}

// Load individual blog post
function loadBlogPost(postKey) {
    const post = blogData[postKey];
    if (!post) return;
    
    currentBlog = post;
    
    // Update page title
    document.title = `${post.title} | Ahmad Irfan Su'aidy`;
    
    // Update breadcrumb
    const breadcrumbTitle = document.getElementById('breadcrumb-title');
    if (breadcrumbTitle) breadcrumbTitle.textContent = post.title;
    
    // Update blog header
    const categoryElement = document.getElementById('blog-category');
    const mainTitleElement = document.getElementById('blog-main-title');
    const dateElement = document.getElementById('blog-date');
    const readTimeElement = document.getElementById('blog-read-time');
    const viewsElement = document.getElementById('blog-views');
    const emojiElement = document.getElementById('blog-emoji');
    
    if (categoryElement) categoryElement.textContent = post.category.replace('-', ' ').toUpperCase();
    if (mainTitleElement) mainTitleElement.textContent = post.title;
    if (dateElement) dateElement.textContent = formatDate(post.date);
    if (readTimeElement) readTimeElement.textContent = post.readTime;
    if (viewsElement) viewsElement.textContent = `${post.views.toLocaleString()} views`;
    if (emojiElement) emojiElement.textContent = post.emoji;
    
    // Update blog content
    const contentElement = document.getElementById('blog-content');
    if (contentElement) {
        contentElement.innerHTML = post.content;
        // Generate table of contents after content is loaded
        generateTableOfContents(post.content);
    }
    
    // Update tags
    const tagsElement = document.getElementById('blog-tags');
    if (tagsElement) {
        tagsElement.innerHTML = generateTags(post.tags);
    }
    
    // Load related posts
    loadRelatedPosts(postKey);
    
    // Initialize scroll-based features
    initScrollFeatures();
    
    // Update view count (in a real app, this would be sent to a server)
    post.views += 1;
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Generate Table of Contents
function generateTableOfContents(content) {
    const toc = document.getElementById('table-of-contents');
    if (!toc) return;

    // Create a temporary div to parse the content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    
    const headings = tempDiv.querySelectorAll('h2, h3');
    
    if (headings.length === 0) {
        toc.innerHTML = '<p class="text-text-gray text-sm">No headings found</p>';
        return;
    }

    let tocHTML = '';
    headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        const level = heading.tagName === 'H2' ? 'ml-0' : 'ml-4';
        const text = heading.textContent;
        
        // Add ID to the actual heading in the content
        heading.id = id;
        
        tocHTML += `
            <a href="#${id}" class="block py-1 text-sm text-text-gray hover:text-primary transition-colors ${level} toc-link">
                ${text}
            </a>
        `;
    });
    
    toc.innerHTML = tocHTML;
    
    // Update the actual content with the modified headings
    document.getElementById('blog-content').innerHTML = tempDiv.innerHTML;
    
    // Add smooth scrolling for TOC links
    document.querySelectorAll('.toc-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Update reading progress
function updateReadingProgress() {
    if (currentView !== 'post') return;
    
    const article = document.querySelector('article');
    if (!article) return;

    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    const progressBar = document.getElementById('reading-progress');
    if (progressBar) {
        progressBar.style.width = Math.min(scrollPercent, 100) + '%';
    }
}

// Load related posts
function loadRelatedPosts(currentPostKey) {
    const relatedContainer = document.getElementById('related-posts');
    if (!relatedContainer) return;

    const currentPost = blogData[currentPostKey];
    if (!currentPost) return;

    // Get posts from the same category or with similar tags
    const relatedPosts = Object.entries(blogData)
        .filter(([key, post]) => {
            if (key === currentPostKey) return false;
            return post.category === currentPost.category || 
                   post.tags.some(tag => currentPost.tags.includes(tag));
        })
        .slice(0, 3); // Limit to 3 related posts

    if (relatedPosts.length === 0) {
        // If no related posts, get random posts
        const otherPosts = Object.entries(blogData)
            .filter(([key]) => key !== currentPostKey)
            .slice(0, 3);
        relatedPosts.push(...otherPosts);
    }

    let relatedHTML = '';
    relatedPosts.forEach(([key, post]) => {
        relatedHTML += `
            <div class="bg-dark-light rounded-2xl p-6 border border-gray-custom hover:border-primary/30 transition-all duration-300 group">
                <div class="text-center mb-4">
                    <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl">
                        ${post.emoji}
                    </div>
                    <span class="text-primary text-xs font-semibold uppercase tracking-widest">${post.category.replace('-', ' ')}</span>
                </div>
                <h3 class="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    <button onclick="showBlogPost('${key}')" class="no-underline text-left w-full">${post.title}</button>
                </h3>
                <p class="text-text-gray text-sm mb-4 line-clamp-3">${post.excerpt}</p>
                <div class="flex items-center justify-between text-xs text-text-gray">
                    <span class="flex items-center">
                        <i class="fas fa-clock mr-1 text-primary"></i>
                        ${post.readTime}
                    </span>
                    <span class="flex items-center">
                        <i class="fas fa-eye mr-1 text-primary"></i>
                        ${post.views} views
                    </span>
                </div>
            </div>
        `;
    });

    relatedContainer.innerHTML = relatedHTML;
}

// Generate tags HTML
function generateTags(tags) {
    return tags.map(tag => `
        <span class="inline-block bg-dark px-3 py-1 rounded-full text-sm text-text-gray border border-gray-custom hover:border-primary/30 transition-colors">
            #${tag}
        </span>
    `).join('');
}

// Initialize scroll-based features
function initScrollFeatures() {
    // Clean up existing event listeners to prevent memory leaks
    window.removeEventListener('scroll', updateReadingProgress);
    
    // Update reading progress on scroll
    window.addEventListener('scroll', updateReadingProgress);
    
    // Highlight current section in TOC
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const tocLink = document.querySelector(`a[href="#${id}"]`);
            
            if (entry.isIntersecting) {
                // Remove active class from all TOC links
                document.querySelectorAll('.toc-link').forEach(link => {
                    link.classList.remove('text-primary');
                    link.classList.add('text-text-gray');
                });
                
                // Add active class to current TOC link
                if (tocLink) {
                    tocLink.classList.remove('text-text-gray');
                    tocLink.classList.add('text-primary');
                }
            }
        });
    }, {
        rootMargin: '-100px 0px -66%',
        threshold: 0
    });
    
    // Observe all headings
    document.querySelectorAll('h2[id], h3[id]').forEach(heading => {
        observer.observe(heading);
    });
}

// Initialize fade-in animations
function initFadeInAnimations() {
    const observeElements = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observeElements.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements with fade-in class and blog cards
    document.querySelectorAll('.fade-in, .blog-card').forEach(el => {
        if (!el.style.opacity) { // Only apply if not already set
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        }
        observeElements.observe(el);
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuPost = document.getElementById('mobile-menu-post');
    
    if (currentView === 'list' && mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    } else if (currentView === 'post' && mobileMenuPost) {
        mobileMenuPost.classList.toggle('hidden');
    }
}

// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
    const postKey = getUrlParameter('post');
    
    if (postKey && blogData[postKey]) {
        showBlogPost(postKey);
    } else {
        showBlogList();
    }
});

// Handle window resize for responsive features
window.addEventListener('resize', () => {
    // Close mobile menu on larger screens
    if (window.innerWidth >= 768) {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuPost = document.getElementById('mobile-menu-post');
        
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
        if (mobileMenuPost && !mobileMenuPost.classList.contains('hidden')) {
            mobileMenuPost.classList.add('hidden');
        }
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    const postKey = getUrlParameter('post');
    
    // Check if we should show a specific post or the blog list
    if (postKey && blogData[postKey]) {
        showBlogPost(postKey);
    } else {
        showBlogList();
    }
    
    // Initialize fade-in animations
    setTimeout(() => {
        initFadeInAnimations();
    }, 100); // Small delay to ensure DOM is fully ready
});