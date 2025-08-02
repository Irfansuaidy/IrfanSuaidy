const skills = [
    { icon: 'fa-html5', title: 'HTML', desc: 'Semantic markup and modern HTML5 features' },
    { icon: 'fa-css3-alt', title: 'CSS', desc: 'Advanced styling with CSS3, Flexbox, and Grid' },
    { icon: 'fa-js', title: 'JavaScript', desc: 'ES6+, DOM manipulation, and async programming' },
    { icon: 'fa-php', title: 'PHP', desc: 'Component-based architecture and state management' },
    // Tambah skill lain di sini jika perlu
  ];

  const container = document.getElementById('skills-container');

  skills.forEach(skill => {
    const el = document.createElement('div');
    el.className = "bg-dark-light p-8 rounded-2xl border border-gray-custom transition-all duration-300 hover:border-primary hover:-translate-y-2";

    el.innerHTML = `
      <div class="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-dark">
        <i class="fa-brands ${skill.icon}"></i>
      </div>
      <h3 class="text-white mb-2">${skill.title}</h3>
      <p class="text-text-gray text-sm">${skill.desc}</p>
    `;
    container.appendChild(el);
  });
