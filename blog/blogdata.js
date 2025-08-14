const blogData = {
    'monolog-performance': {
        category: 'class-activity',
        emoji: '🎭',
        title: 'Ekspresi Tanpa Batas: Kelas XI-6 "Soerabi" Gelar Penampilan Monolog di GSG MAN Insan Cendekia Serpong',
        excerpt: 'Suasana Gedung Serbaguna MAN Insan Cendekia Serpong terasa berbeda ketika siswa kelas XI-6 menampilkan karya monolog mereka sebagai bagian dari penilaian sumatif Bahasa Indonesia.',
        readTime: '4 min read',
        date: '2024-08-01',
        featured: true,
        views: 856,
        tags: ['monolog', 'seni-pertunjukan', 'bahasa-indonesia', 'kreativitas', 'soerabi'],
        author: 'Ahmad Irfan Su\'aidy',
        content: `
            <p>Pada Senin, 11 Agustus 2025, suasana Gedung Serbaguna (GSG) MAN Insan Cendekia Serpong terasa berbeda. Ruang yang biasanya digunakan untuk berbagai kegiatan sekolah itu kali ini menjadi panggung bagi siswa kelas XI-6, atau yang akrab disapa Soerabi, untuk menampilkan karya monolog mereka.</p>

            <h2>Penilaian Sumatif yang Kreatif</h2>
            <p>Kegiatan ini merupakan bagian dari penilaian sumatif 1 pada mata pelajaran Bahasa Indonesia. Setiap siswa tampil satu per satu membawakan monolog dengan tema yang mereka pilih dan kemas secara kreatif. Ada yang menghadirkan suasana dramatis, ada pula yang membawakan monolog dengan sentuhan humor segar, membuat penonton terpaku dan terhibur.</p>

            <h2>Keberanian dan Kreativitas di Panggung</h2>
            <p>Selama penampilan, para anggota Soerabi menunjukkan keberanian dan kreativitas mereka. Gestur, intonasi suara, ekspresi wajah, dan interaksi dengan penonton menjadi senjata utama untuk menghidupkan cerita. Meski tampil sendirian di panggung, setiap siswa berhasil membangun dunia imajinatif yang membuat penonton larut dalam cerita.</p>

            <blockquote>
                "Gestur, intonasi suara, ekspresi wajah, dan interaksi dengan penonton menjadi senjata utama untuk menghidupkan cerita."
            </blockquote>

            <h3>Elemen Penting dalam Penampilan Monolog</h3>
            <p>Para siswa kelas XI-6 "Soerabi" memperhatikan berbagai aspek penting dalam penampilan mereka:</p>
            <ul>
                <li><strong>Gestur:</strong> Gerakan tubuh yang mendukung penyampaian cerita</li>
                <li><strong>Intonasi Suara:</strong> Pengaturan nada dan volume untuk menciptakan suasana</li>
                <li><strong>Ekspresi Wajah:</strong> Mimik yang menggambarkan emosi karakter</li>
                <li><strong>Interaksi dengan Penonton:</strong> Kemampuan melibatkan audience dalam pertunjukan</li>
            </ul>

            <h2>Mempererat Kebersamaan</h2>
            <p>Selain menjadi ajang penilaian, kegiatan ini juga mempererat rasa kebersamaan di antara siswa. Dukungan dari teman-teman yang menonton menjadi energi tambahan bagi yang sedang tampil. Tepuk tangan meriah mengiringi setiap akhir penampilan, menjadi bentuk apresiasi atas kerja keras yang telah dilakukan.</p>

            <h3>Nilai Edukasi yang Mendalam</h3>
            <p>Kegiatan monolog ini membuktikan bahwa seni pertunjukan dapat menjadi wadah pembelajaran yang menyenangkan sekaligus melatih berbagai keterampilan penting:</p>
            <ul>
                <li>Keterampilan komunikasi verbal dan non-verbal</li>
                <li>Kepercayaan diri dalam berbicara di depan umum</li>
                <li>Penghayatan emosi dan karakter</li>
                <li>Kreativitas dalam penyampaian ide</li>
                <li>Kemampuan berempati dan memahami perspektif berbeda</li>
            </ul>

            <h2>Inspirasi untuk Masa Depan</h2>
            <p>Semoga kreativitas yang ditunjukkan para anggota Soerabi dapat terus berkembang dan menjadi inspirasi bagi kelas-kelas lain di MAN Insan Cendekia Serpong. Kegiatan seperti ini tidak hanya mengembangkan kemampuan akademis, tetapi juga membentuk karakter dan kepribadian siswa.</p>

            <p>Para siswa XI-6 "Soerabi" telah membuktikan bahwa pembelajaran tidak harus selalu konvensional. Melalui seni monolog, mereka berhasil menggabungkan pembelajaran bahasa dengan pengembangan bakat dan minat di bidang seni pertunjukan.</p>

            <p class="text-sm text-text-gray mt-6">📸 Foto diambil setelah seluruh penampilan selesai, menampilkan anggota XI-6 Soerabi yang penuh semangat dan bangga dengan hasil karya mereka.</p>
        `
    },
};

// Global variables
let currentView = 'list';
let currentBlog = null;

// Utility functions
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function updateUrl(postKey = null) {
    const newUrl = postKey ? `?post=${postKey}` : window.location.pathname;
    window.history.pushState({}, '', newUrl);
}

// Main functions
function showBlogList() {
    currentView = 'list';
    document.getElementById('blog-list-view').style.display = 'block';
    document.getElementById('blog-post-view').classList.add('hidden');
    document.title = 'Blog | Ahmad Irfan Su\'aidy';
    updateUrl();
    loadBlogPosts();
}

function showBlogPost(postKey) {
    if (!blogData[postKey]) return;
    
    currentView = 'post';
    document.getElementById('blog-list-view').style.display = 'none';
    document.getElementById('blog-post-view').classList.remove('hidden');
    
    updateUrl(postKey);
    loadBlogPost(postKey);
}

// Load blog posts for grid view
function loadBlogPosts() {
    const blogPostsGrid = document.getElementById('blog-posts-grid');
    if (!blogPostsGrid) return;

    const posts = Object.entries(blogData);
    let postsHTML = '';

    posts.forEach(([key, post]) => {
        const categoryLabel = post.category.replace('-', ' ').toUpperCase();
        postsHTML += `
            <div class="bg-dark-light rounded-2xl p-6 border border-gray-custom hover:border-primary/30 transition-all duration-300 group blog-card cursor-pointer" onclick="showBlogPost('${key}')">
                <div class="text-center mb-4">
                    <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl">
                        ${post.emoji}
                    </div>
                    <span class="text-primary text-xs font-semibold uppercase tracking-widest">${categoryLabel}</span>
                </div>
                <h3 class="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors line-clamp-2">
                    ${post.title}
                </h3>
                <p class="text-text-gray text-sm mb-4 line-clamp-3">${post.excerpt}</p>
                <div class="flex items-center justify-between text-xs text-text-gray">
                    <div class="flex items-center space-x-4">
                        <span class="flex items-center">
                            <i class="fas fa-clock mr-1 text-primary"></i>
                            ${post.readTime}
                        </span>
                        <span class="flex items-center">
                            <i class="fas fa-eye mr-1 text-primary"></i>
                            ${post.views} views
                        </span>
                    </div>
                    <span class="text-text-gray">${formatDate(post.date)}</span>
                </div>
                ${post.featured ? '<div class="mt-3 text-center"><span class="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full border border-primary/30">Featured</span></div>' : ''}
            </div>
        `;
    });
    
    blogPostsGrid.innerHTML = postsHTML;
    
    // Initialize fade-in animations
    setTimeout(initFadeInAnimations, 100);
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
    
    // Update view count
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
                const offsetTop = targetElement.offsetTop - 100;
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
        .slice(0, 3);

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
            <div class="bg-dark-light rounded-2xl p-6 border border-gray-custom hover:border-primary/30 transition-all duration-300 group cursor-pointer" onclick="showBlogPost('${key}')">
                <div class="text-center mb-4">
                    <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl">
                        ${post.emoji}
                    </div>
                    <span class="text-primary text-xs font-semibold uppercase tracking-widest">${post.category.replace('-', ' ')}</span>
                </div>
                <h3 class="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    ${post.title}
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
    // Clean up existing event listeners
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
        if (!el.style.opacity) {
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

// Handle window resize
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
    }, 100);
});