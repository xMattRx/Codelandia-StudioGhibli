const sl = ScrollReveal({
  origin: 'left',
  distance: '50px',
  duration: 2000,
  reset: false
});

ScrollReveal().reveal('.container_main_left', { delay: 100 });

const sr = ScrollReveal({
  origin: 'right',
  distance: '50px',
  duration: 2000,
  reset: false
});

ScrollReveal().reveal('.container_main_right', { delay: 100 });

function animationDown(){
  document.getElementById('ilustracao').style.marginTop = '20px';
}
function animationUp(){
  document.getElementById('ilustracao').style.marginTop = '0px';
}
function intervals(){
  setInterval(animationDown,1000)
  setInterval(animationUp, 2001)
}

intervals()