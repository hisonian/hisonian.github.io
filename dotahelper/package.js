// prelodaer

window.onload = function () {
   document.body.classList.add('loaded_hiding');
   window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}

// scroll on top

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// register

 let register = document.getElementById('window');
 let button = document.querySelector('.regButton');
 let divClose = document.querySelector('.close');

 let darkLayer = document.createElement('div');
 darkLayer.id = 'shadow'; 

 function show() {
  document.body.append(darkLayer);
  register.style.opacity = 1;
 }

 function close() {
  darkLayer.parentNode.removeChild(darkLayer);
  register.style.opacity = 0;
 }

 button.onclick = show;
 divClose.onclick = close;
 darkLayer.onclick = close;