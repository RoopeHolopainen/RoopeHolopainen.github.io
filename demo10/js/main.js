(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);
document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    if (localStorage.getItem("kirjautunut") === "kyllä"){
        document.getElementById("tervetuloa_teksti").textContent += ` ${localStorage.getItem("nimi")}`;
        document.getElementById("kirjautumis_lomake").style.display = "none";
        document.getElementById("kirjauduUlos").style.display = "block";
        document.getElementById("tervetuloa_teksti").style.display = "block";
    }
}
function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kyllä");
}
function kirjauduUlos(){
    localStorage.clear();
    //mddddddddddd
    document.getElementById("kirjautumis_lomake").style.display = "block";
    document.getElementById("kirjauduUlos").style.display = "none";
    document.getElementById("tervetuloa_teksti").style.display = "none";
    
}

