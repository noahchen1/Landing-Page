/* fade on page load */

window.onload = function() {
    const EFFECT = document.querySelector(".featured");

    window.addEventListener('scroll', scrollEffect);

    function scrollEffect() {
        if(window.scrollY>=1300) {
            EFFECT.style.opacity = '1'; 
            EFFECT.style.transform = 'translateY(0px)';
            EFFECT.style.transition = '1s ease-in-out';
        }

        else {
            EFFECT.style.opacity = '0';
            EFFECT.style.transform = 'translateY(-50px)';
        }
    }

    scrollEffect();
}

/* go to top btn */

function scrollToTop() {
    var position =
        document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()", 6);
    } else clearTimeout(scrollAnimation);
}
