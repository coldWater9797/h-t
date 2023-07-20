var da = document.querySelectorAll(".nav div")
var ns = document.querySelectorAll(".nav a")
var os = document.querySelectorAll(".os")
window.addEventListener("scroll", () =>
os.forEach((s, i) => {
    if (window.scrollY >= s.offsetTop - 50) {
      ns.forEach(n => n.classList.remove("ac"))
      da.forEach(d => d.classList.remove("daa"))
      ns[i].classList.add("ac")
      da[i].classList.add("daa")
    }
  })
)
for (var i = 0; i < ns.length; i++)
  ns[i].addEventListener("click", function () {
    da.forEach(d => d.classList.remove("daa"))
    da[i].classList.add("daa")
    for (var j = 0; j < ns.length; j++) ns[j].style.color = "white"
    this.style.color = "black"
  })
// document.querySelector('.top').addEventListener('click', function() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });

//Check the scroll position
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    event.preventDefault()
    $(".scrollToTop").css({ transform: "translate(0px, 0px)" })
  } else {
    $(".scrollToTop").css({ transform: "translate(80px, 0px)" })
  }
})

//Click and scrolls top effect
$(".scrollToTop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 800)
  return false
})

// function that detects if the scroll has stopped
$.fn.scrollEnd = function (callback, timeout) {
  $(this).scroll(function () {
    var $this = $(this)
    if ($this.data("scrollTimeout")) {
      clearTimeout($this.data("scrollTimeout"))
    }
    $this.data("scrollTimeout", setTimeout(callback, timeout))
  })
}
//If the function has stopped, we hide the scroll btn
$(window).scrollEnd(function () {
  $(".scrollToTop").css({ transform: "translate(80px, 0px)" })
}, 1500)
$expandable_content = $('.expandable-content');
expand_animation_time = 1000;

var calc_expandable_content = function() {
  $expandable_content.each(function() {
    var $container = $(this);
    var $toggle = $container.find('.toggle-content');
    var $excerpt_height = $container.find('.excerpt').outerHeight(true);

    // set the min-height on the viewport element and recalc 
    // all curret elements
    $container.find('.viewport').css('max-height', $excerpt_height);
    set_expandable_content_heights($container);

    // first unbind any existing click handler
    // then register the new one
    $toggle.unbind('click').click(function() {
      var $container = $(this).closest('.expandable-content');
      $container.toggleClass('open');
      set_expandable_content_heights($container);
    });
  });
}
var set_expandable_content_heights = function($target) {
  var $excerpt = $target.find('.excerpt');
  var $content = $target.find('.content');
  var $viewport = $target.find('.viewport');
  
  if ( $target.hasClass('open') ) {
    $viewport.css({
      'max-height': $content.find('.inner').outerHeight(true)
    });

    window.setTimeout(function() {
      $target.addClass('animated');
      $viewport.css({
        'min-height': $content.find('.inner').outerHeight(true)
      });
    }, expand_animation_time);
  } else {
    $viewport.css({
      'max-height': $excerpt.find('.inner').outerHeight(true),
      'min-height': $excerpt.find('.inner').outerHeight(true)
    });

    window.setTimeout(function() {
      $target.removeClass('animated');
    }, expand_animation_time);
  }
}

calc_expandable_content();

// you should find a more performant way to
// do this. Throttle or debounce.
$(window).resize(function() {
  calc_expandable_content();
})