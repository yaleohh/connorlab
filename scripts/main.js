// -------------------------  NAV  -------------------------
// open mobile menu
$('.js-toggle-menu').click(function(e){
  e.preventDefault();
  $('.mobile-header-nav').slideToggle();
  $(this).toggleClass('open');
});



//on click
    $(".nav-yo").click(function() {
        scrollToTop();
        closeMenu();
    });
    $(".nav-about").click(function() {
        scrollToAbout();
        closeMenu();
    });
    $(".nav-explore").click(function() {
        scrollToExplore();
        closeMenu();
    });
    $(".nav-investigate").click(function() {
        scrollToInvestigate();
        closeMenu();
    });

    $(".nav-participate").click(function() {
        scrollToParticipate();
        closeMenu();
    });

    $(".nav-support").click(function() {
        scrollToSupport();
        closeMenu();
    });
    $(".nav-contact").click(function() {
        scrollToContact();
        closeMenu();
    });

function scrollToAbout() {
    $('html, body').animate({
        scrollTop: $("#about-div").offset().top
    }, 1000);
}

function scrollToExplore() {
    $('html, body').animate({
        scrollTop: $("#explore-div").offset().top
    }, 1000);
}

function scrollToInvestigate() {
    $('html, body').animate({
        scrollTop: $("#investigate-div").offset().top
    }, 1000);
}

function scrollToParticipate() {
    $('html, body').animate({
        scrollTop: $("#participate-div").offset().top
    }, 1000);
}

function scrollToSupport() {
    $('html, body').animate({
        scrollTop: $("#support-div").offset().top
    }, 1000);
}

function scrollToContact() {
    $('html, body').animate({
        scrollTop: $("#contact-div").offset().top
    }, 1000);
}

function closeMenu() {
  $('.mobile-header-nav').slideToggle();
  $('.js-toggle-menu').toggleClass('open');
}
