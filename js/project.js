const projects = [
  {
    img: 'https://via.placeholder.com/400x250', // contoh gambar
    github: 'https://github.com/',
    extern: 'https://example.com',
    tools: 'Node.js',
    title: 'E-commerce',
    desc: 'An advanced e-commerce platform built with Node.js.'
  },
  {
    img: 'https://via.placeholder.com/400x250',
    github: 'https://github.com/',
    extern: 'https://example.com',
    tools: 'React',
    title: 'Portfolio Website',
    desc: 'A modern responsive portfolio website with animations.'
  }
];

const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
  const el = document.createElement('div');
  el.className = "glass-effect rounded-2xl overflow-hidden card-hover group";

  el.innerHTML = `
    <div class="relative overflow-hidden">
      <img src="${project.img}" alt="${project.title}" 
           class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110">
      
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div class="flex gap-3">
          <a href="${project.extern}" target="_blank" 
             class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-dark hover:scale-110 transition-transform">
            <i class="fas fa-external-link-alt"></i>
          </a>
          <a href="${project.github}" target="_blank" 
             class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-dark hover:scale-110 transition-transform">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div class="p-6">
      <div class="flex items-center gap-2 mb-3">
        <span class="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">${project.tools}</span>
      </div>
      <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
      <p class="text-text-gray text-sm">${project.desc}</p>
    </div>
  `;

  projectsContainer.appendChild(el);
});