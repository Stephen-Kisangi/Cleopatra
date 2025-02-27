// Smooth scroll to services section
document.querySelectorAll('a[href^="#featured-services"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Update URL
        history.pushState(null, null, this.href);
    }); // Closing bracket for addEventListener
}); // Closing bracket for forEach


