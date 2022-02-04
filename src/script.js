let length =document.getElementById("length");
let width =document.getElementById("width");
let area =document.getElementById("area");
let perimeter =document.getElementById("perimeter");
let Calculate =document.getElementById("Calculate");
Calculate.addEventListener("click",() =>{
  let a=length.value * width.value;
  let b=Number(length.value) + Number(width.value);
  area.innerHTML="Area is " + a ;
  perimeter.innerHTML="Perimeter is " + 2*b;
})