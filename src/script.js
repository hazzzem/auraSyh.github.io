const body = document.body;
const button = document.getElementsByTagName('button')[0];
const fitur1 = document.getElementsByClassName('satu')[0];
const fitur2 = document.getElementsByClassName('dua')[0];
const fitur3 = document.getElementsByClassName('tiga')[0];
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

function runFitur1() {
   button.addEventListener("click", funct1);
}

function runFitur2() {
   fitur2.addEventListener("click", funct2);
}

function runFitur3(x) {
   red.addEventListener("input", funct3);
   green.addEventListener("input", funct3);
   blue.addEventListener("input", funct3);
}

function funct1(){
   const r = Math.round(Math.random()*255+1);
   const g = Math.round(Math.random()*255+1);
   const b = Math.round(Math.random()*255+1);
   body.style.backgroundColor = ('rgba('+r+', '+g+', '+b+')');
}

function funct2(){
   body.addEventListener("mousemove", function (event){
      const x = event.clientX/window.innerWidth*255;
      const y = event.clientY/window.innerWidth*255;

      body.style.backgroundColor = ('rgba('+x+', '+y+', 120)');
   })
}

function funct3(){
   const r = red.value;
   const g = green.value;
   const b = blue.value;

   body.style.backgroundColor = ('rgba('+r+', '+g+', '+b+')');
}

fitur1.onclick = runFitur1();
runFitur2();
runFitur3();
