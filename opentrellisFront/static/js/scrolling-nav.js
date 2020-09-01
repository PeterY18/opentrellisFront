(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); // End of use strict

var btn = document.querySelector("#moon");
document.getElementById("moon").style.display = "block";
const currentTheme = localStorage.getItem("theme");
const theme = document.querySelector("#theme-link");
var themeHolder;

if (currentTheme == "dark") {
  theme.href = "/static/css/dark.css";
  btn = document.querySelector("#sun");
  document.querySelector("#sun").style.display = "active";

}

function changeLogo(evt, logo) {
  var i, themeTogglers, logoHold;

  if (logo == "moon") {
    logoHold = "sun"
  }
  else {
    logoHold = "moon"
  }

  themeTogglers = document.getElementsByClassName("theme-toggle");
  for (i = 0; i < themeTogglers.length; i++) {
    themeTogglers[i].style.display = "none";
  }

  document.getElementById(logoHold).style.display = "block";
  if (theme.getAttribute("href") == "/static/css/light.css") {
    theme.href = "/static/css/dark.css";
    themeHolder = "dark";
  }
  else {
    theme.href = "/static/css/light.css";
    themeHolder = "light";
  }
  localStorage.setItem("theme", themeHolder);

}