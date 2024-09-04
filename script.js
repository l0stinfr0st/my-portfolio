document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("YOUR_USER_ID");
    const send = this.getElementById('send-btn');

    send.addEventListener('click', function () {
        const name = document.querySelector('.name').value;
        const email = document.querySelector('.email').value;
        const num = document.querySelector('.num').value;
        const msg = document.querySelector('.message').value;

        emailjs.send("service_fyeg1go", "template_fuy095j", {
            name: name,
            email: email,
            num: num,
            message: msg
        })
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
            }, function (error) {
                console.log('FAILED...', error);
                alert('Failed to send email. Please try again later.');
            });
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function changeNavOnScroll() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    window.addEventListener('scroll', changeNavOnScroll);
    changeNavOnScroll();
});


document.addEventListener('DOMContentLoaded', function () {
    const popInElements = document.querySelectorAll('.pop-in');
    const projectElements = document.querySelectorAll('.projects');
    const skillsElements = document.querySelectorAll('.skills'); // Select all skills elements
    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('pop-in-visible');
                if (entry.target.classList.contains('projects')) {
                    entry.target.classList.add('projects-visible');
                }
                if (entry.target.classList.contains('skills')) {
                    entry.target.classList.add('skills-visible'); // Add skills visible class
                }
            } else {
                if (window.scrollY < lastScrollY) {
                    entry.target.classList.remove('pop-in-visible');
                    if (entry.target.classList.contains('projects')) {
                        entry.target.classList.remove('projects-visible');
                    }
                    if (entry.target.classList.contains('skills')) {
                        entry.target.classList.remove('skills-visible'); // Remove skills visible class
                    }
                }
            }
        });
        lastScrollY = window.scrollY;
    }, { threshold: 0.1 });

    // Observe all elements
    [...popInElements, ...projectElements, ...skillsElements].forEach(element => {
        observer.observe(element);
    });
});



