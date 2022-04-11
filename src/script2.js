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

const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

function change() {
   red.addEventListener("input", change);
   green.addEventListener("input", change);
   blue.addEventListener("input", change);
   const r = red.value;
   const g = green.value;
   const b = blue.value;
   body.style.backgroundColor = ('rgb('+r+', '+g+', '+b+')');
   body.style.backgroundColor = ('rgb('+r+', '+g+', '+b+')');
   body.style.backgroundColor = ('rgb('+r+', '+g+', '+b+')');
}

// red.addEventListener("input", function(){
//    const r = red.value;
//    const g = green.value;
//    const b = blue.value;
//    body.style.backgroundColor = ('rgb('+r+', '+g+', '+b+')');
//    body.style.backgroundColor = ('rgb('+r+', '+g+', '+b+')');
//    body.style.backgroundColor = ('rgb('+r+', '+g+', '+b+')');
// });
//
// green.addEventListener("input", function(){
//    const r = red.value;
//    const g = green.value;
//    const b = blue.value;
//    body.style.backgroundColor = ('rgb('+r+', '+g+', '+b+')');
//    body.style.backgroundColor = ('rgb('+r+', '+g+', '+b+')');
//    body.style.backgroundColor = ('rgb('+r+', '+g+', '+b+')');
// });
//
// blue.addEventListener("input", function(){
//    const r = red.value;
//    const g = green.value;
//    const b = blue.value;
//    body.style.backgroundColor = ('rgb('+r+', '+g+', '+b+')');
//    body.style.backgroundColor = ('rgb('+r+', '+g+', '+b+')');
//    body.style.backgroundColor = ('rgb('+r+', '+g+', '+b+')');
// });

change();

body.addEventListener("mousemove", function(event){
   const x = Math.round((event.clientX/window.innerWidth*255));
   const y = Math.round((event.clientY/window.innerWidth*255));

   body.style.backgroundColor = 'rgb('+x +', '+y+',100)';
})

// button.addEventListener("click", function(){
//    document.getElementById('reset').reset();
// })
