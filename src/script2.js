const button = document.querySelector('button');
const body = document.body;
/*
button.addEventListener("click", function(){
   const bg = document.getElementsByTagName('body')[0];
   bg.classList.toggle("dark-mode");
})*/

button.addEventListener("click", function(){
   const r = Math.round(Math.random()*255+1);
   const g = Math.round(Math.random()*255+1);
   const b = Math.round(Math.random()*255+1);
   body.style.backgroundColor = ('rgb('+r+', '+g+', '+b+')');
})
