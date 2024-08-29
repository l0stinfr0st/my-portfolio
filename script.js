document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function changeNavOnScroll() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    window.addEventListener('scroll', changeNavOnScroll);
    changeNavOnScroll();
});


document.addEventListener('DOMContentLoaded', function() {
    const popInElements = document.querySelectorAll('.pop-in');
    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('pop-in-visible');
            } else {
                
                if (window.scrollY < lastScrollY) {
                    entry.target.classList.remove('pop-in-visible');
                }
            }
        });
        lastScrollY = window.scrollY;
    }, { threshold: 0.1 });

    popInElements.forEach(element => {
        observer.observe(element);
    });
});

