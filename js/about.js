// Counter Animation
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const animateCounter = (counter) => {
        const target = +counter.innerText;
        const increment = target / speed;
        let current = 0;

        const updateCount = () => {
            current += increment;
            if(current < target) {
                counter.textContent = Math.ceil(current);
                setTimeout(updateCount, 1);
            } else {
                counter.textContent = target + '+';
            }
        }
        updateCount();
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});