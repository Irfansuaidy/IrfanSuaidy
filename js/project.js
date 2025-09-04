const projects = [
  {
    icon: '<img src="img/3998732.jpg" alt="Node.js" class="object-contain rounded-xl">',
    title: "Portfolio Website",
    desc: "A responsive portfolio website showcasing my projects and skills with modern design principles.",
    extern: "#",
    github: "#",
    tools: [
      { name: "HTML", color: "primary" },
      { name: "CSS", color: "secondary" },
      { name: "JavaScript", color: "accent-coral" }
    ]
  },
  {
    icon: '<img src="img/3998732.jpg" alt="Node.js" class="object-contain rounded-xl">',
    title: "E-commerce",
    desc: "An advanced e-commerce platform built with Node.js.",
    extern: "https://example.com",
    github: "https://github.com/",
    tools: [
      { name: "Node.js", color: "primary" }
    ]
  }
];

const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
  const el = document.createElement('div');
  el.className = "card p-6 rounded-2xl glow-effect";

  el.innerHTML = `
    <div class="w-full h-48 rounded-xl mb-4 flex items-center justify-center">
      ${project.icon}
    </div>

    <h3 class="text-text-dark font-bold text-xl mb-2">${project.title}</h3>
    <p class="text-text-gray mb-4">${project.desc}</p>

    <div class="flex flex-wrap gap-2 mb-4">
      ${project.tools.map(tool => `
        <span class="px-3 py-1 bg-${tool.color}/20 text-${tool.color} text-xs rounded-full">${tool.name}</span>
      `).join("")}
    </div>

                    <div class="flex gap-4">
                        <a href="${project.github}" class="flex-1 text-center py-2 border border-primary text-primary rounded-lg hover:bg-primary/70 hover:text-white transition-colors">
                            <i class="fa-brands fa-github"></i> Code
                        </a>
                        <a href="${project.demo}" class="flex-1 text-center py-2 bg-primary text-white border border-primary/70 rounded-lg hover:bg-white hover:text-primary transition-colors">
                            <i class="fa-solid fa-external-link-alt"></i> Demo
                        </a>
                    </div>
  `;

  projectsContainer.appendChild(el);
});
