
document.addEventListener("DOMContentLoaded", function() {
  // Load common components
  loadComponent('navbar-container', 'components/navbar.html');
  loadComponent('footer-container', 'components/footer.html');
  
  // Determine which page to load based on URL
  const currentPath = window.location.pathname;
  let pagePath = 'pages/home.html';
  
  if (currentPath.endsWith('/about')) {
    pagePath = 'pages/about.html';
  } else if (currentPath.endsWith('/projects')) {
    pagePath = 'pages/projects.html';
  } else if (currentPath.includes('/project/')) {
    pagePath = 'pages/project-detail.html';
    // Store the project ID for later use
    window.projectId = currentPath.split('/').pop();
  } else if (currentPath.endsWith('/contact')) {
    pagePath = 'pages/contact.html';
  } else if (currentPath.endsWith('/pricing')) {
    pagePath = 'pages/pricing.html';
  } else if (!currentPath.endsWith('/') && !currentPath.endsWith('/index.html')) {
    pagePath = 'pages/not-found.html';
  }
  
  // Load the appropriate page
  loadComponent('content-container', pagePath);
});

// Function to load HTML components
function loadComponent(targetId, componentPath) {
  const target = document.getElementById(targetId);
  if (!target) return;
  
  fetch(componentPath)
    .then(response => response.text())
    .then(data => {
      target.innerHTML = data;
      
      // Execute any scripts in the loaded content
      const scripts = target.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        eval(scripts[i].textContent);
      }
      
      // Initialize Alpine.js components if loaded
      if (window.Alpine) {
        Alpine.initTree(target);
      }
      
      // Initialize animations
      initializeAnimations();
    })
    .catch(error => console.error('Error loading component:', error));
}

// Function to initialize animations
function initializeAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach((element) => {
    observer.observe(element);
  });
}

// Function to navigate to a different page without reloading
function navigateTo(url) {
  history.pushState(null, '', url);
  
  // Determine which page to load based on new URL
  const currentPath = window.location.pathname;
  let pagePath = 'pages/home.html';
  
  if (currentPath.endsWith('/about')) {
    pagePath = 'pages/about.html';
  } else if (currentPath.endsWith('/projects')) {
    pagePath = 'pages/projects.html';
  } else if (currentPath.includes('/project/')) {
    pagePath = 'pages/project-detail.html';
    window.projectId = currentPath.split('/').pop();
  } else if (currentPath.endsWith('/contact')) {
    pagePath = 'pages/contact.html';
  } else if (currentPath.endsWith('/pricing')) {
    pagePath = 'pages/pricing.html';
  } else if (!currentPath.endsWith('/') && !currentPath.endsWith('/index.html')) {
    pagePath = 'pages/not-found.html';
  }
  
  // Load the appropriate page
  loadComponent('content-container', pagePath);
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
  // Determine which page to load based on URL
  const currentPath = window.location.pathname;
  let pagePath = 'pages/home.html';
  
  if (currentPath.endsWith('/about')) {
    pagePath = 'pages/about.html';
  } else if (currentPath.endsWith('/projects')) {
    pagePath = 'pages/projects.html';
  } else if (currentPath.includes('/project/')) {
    pagePath = 'pages/project-detail.html';
    window.projectId = currentPath.split('/').pop();
  } else if (currentPath.endsWith('/contact')) {
    pagePath = 'pages/contact.html';
  } else if (currentPath.endsWith('/pricing')) {
    pagePath = 'pages/pricing.html';
  } else if (!currentPath.endsWith('/') && !currentPath.endsWith('/index.html')) {
    pagePath = 'pages/not-found.html';
  }
  
  // Load the appropriate page
  loadComponent('content-container', pagePath);
});
