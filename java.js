$(() => {
 
// Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});


  //On Scroll Functionality
  $(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    windowTop > 100
      ? $("nav").addClass("navShadow")
      : $("nav").removeClass("navShadow");
    windowTop > 100 ? $("ul").css("top", "100px") : $("ul").css("top", "160px");
  });

  //Click Logo To Scroll To Top
  $("#logo").on("click", () => {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      400
    );
  });

  //Smooth Scrolling Using Navigation Menu
  $('a[href*="#"]').on("click", function (e) {
    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 70
      },
      500
    );
    e.preventDefault();
  });

  //Toggle Menu
  $("#menu-toggle").on("click", () => {
    $("#menu-toggle").toggleClass("closeMenu");
    $("ul").toggleClass("showMenu");

    $("li").on("click", () => {
      $("ul").removeClass("showMenu");
      $("#menu-toggle").removeClass("closeMenu");
    });
  });
});

AOS.init({
  duration: 2000,
});

