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
