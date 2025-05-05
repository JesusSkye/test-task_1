document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');

    function handleScroll() {
        const scrollPosition = window.scrollY;
        const mainSection = document.querySelector('.main-layout');
        const mainSectionHeight = mainSection ? mainSection.offsetHeight : 0;

        if (scrollPosition <= mainSectionHeight) {

            if (scrollPosition > 50) {
                header.classList.add('scrolled');
                header.classList.remove('full-width');
            } else {
                header.classList.remove('scrolled');
                header.classList.remove('full-width');
            }
        } else {
            header.classList.add('scrolled');
            header.classList.add('full-width');
        }
    }


    handleScroll();


    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    const elements = document.querySelectorAll('.banner_title, .banner_subtitle, .banner__features, .banner_btn, .feature_item, .contact_title, .contact_form');


    animateVisibleElements();


    window.addEventListener('scroll', animateVisibleElements);

    function animateVisibleElements() {
        elements.forEach(function(element, index) {
            if (isElementInViewport(element)) {

                setTimeout(function() {
                    element.classList.add('fade-in');
                }, index * 100);
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
});