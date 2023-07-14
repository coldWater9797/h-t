var na = document.querySelectorAll(".nav > div a")
for (var i = 0; i < na.length; i++)
  na[i].addEventListener("click", function () {
    for (var j = 0; j < na.length; j++) na[j].style.color = "white"
    this.style.color = "black"
  })
