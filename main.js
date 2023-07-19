window.addEventListener("scroll", () => {
  var os = document.querySelectorAll(".os")
  var ns = document.querySelectorAll(".nav a")
  var da = document.querySelectorAll(".nav div")
  os.forEach((s, i) => {
    if (window.scrollY >= s.offsetTop - 50) {
      ns.forEach(n => n.classList.remove("ac"))
      da.forEach(d => d.classList.remove("daa"))
      ns[i].classList.add("ac")
      da[i].classList.add("daa")
    }
  })
})
var na = document.querySelectorAll(".nav > div a")
var da = document.querySelectorAll(".nav > div")
for (var i = 0; i < na.length; i++)
  na[i].addEventListener("click", function () {
    for (var j = 0; j < na.length; j++) na[j].style.color = "white"
    this.style.color = "black"
  })
for (var k = 0; k < na.length; k++)
  da[k].addEventListener("click", function () {
    for (var o = 0; o < na.length; o++) da[o].style.backgroundColor = ""
    this.style.backgroundColor = "rgba(200, 16, 47, 0.5)"
  })

  // document.querySelector('.top').addEventListener('click', function() {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // });
 
    //Check the scroll position
$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		event.preventDefault();
		$(".scrollToTop").css({'transform': 'translate(0px, 0px)'});
	} else {
		$(".scrollToTop").css({'transform': 'translate(80px, 0px)'});
	}
});


//Click and scrolls top effect
$('.scrollToTop').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
  });


// function that detects if the scroll has stopped
  $.fn.scrollEnd = function(callback, timeout) {
    $(this).scroll(function(){
      var $this = $(this);
      if ($this.data('scrollTimeout')) {
        clearTimeout($this.data('scrollTimeout'));
      }
      $this.data('scrollTimeout', setTimeout(callback,timeout));
    });
  };
  //If the function has stopped, we hide the scroll btn
  $(window).scrollEnd(function(){
    $(".scrollToTop").css({'transform': 'translate(80px, 0px)'});
  }, 1500);
