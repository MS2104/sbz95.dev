document.addEventListener('DOMContentLoaded', function() {
    var projectsLink = document.getElementById('projects-link');
    
    if (projectsLink) {
        projectsLink.addEventListener('click', function(e) {
            var projectsSection = document.getElementById('projects-section');
            if (projectsSection) {
                e.preventDefault();
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Function to handle smooth scrolling for all internal links
    function smoothScroll(e) {
        var targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    // Apply smooth scrolling to all internal links
    var internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(function(link) {
        link.addEventListener('click', smoothScroll);
    });
});
