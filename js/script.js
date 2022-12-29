function search() {
  let input = document.getElementById("inputSearch");
  let filter = input.value.toUpperCase();
  let ul = document.getElementById("list");
  let li = ul.getElementsByTagName("li");

  // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
  for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
document.addEventListener('keyup', search);


var inputHover = false;
var ul = document.getElementById("list");
let input = document.getElementById("inputSearch");
ul.style.display = "none";

$('#inputSearch').on('focus', function() {
    ul.style.display = "";
});

document.addEventListener('click', function(e) {
  if(e.target.tagName == 'A') {
    ul.style.display = "none";
  }
});

window.addEventListener("hashchange", function () {
  var windowheight = window.innerHeight;
  window.scrollTo(window.scrollX, window.scrollY - 400);
});





/*

$('#inputSearch').on('blur', function(e) {
  e.stopImmediatePropagation();
  document.off("click");
  ul.style.display = "none";
});


var inputHover = false;
$('#inputSearch').hover(function() {
  inputHover = true;
}, function() {
  inputHover = false;
});
 
if (inputHover) {
  ul.style.display = "";
}
else{
  ul.style.display = "none";
}

var inputHover = false;
$('#inputSearch').hover(function() {
  inputHover = true;
}, function() {
  inputHover = false;
});
 
if (inputHover) {
  // ...
}



// declaring variables

const card = document.querySelector(".block-person");
const title = document.querySelector(".text_person");
const header = document.querySelector(".block-person img");


// Animate In

card.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transform = "translateY(-8px)";
  header.style.transform = "translateY(-8px)";
});

// Animate Out

card.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateY(0px)";
  header.style.transform = "translateY(0px)";
});
*/
