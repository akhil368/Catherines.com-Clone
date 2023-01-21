let btn=document.querySelector("button") 

btn.addEventListener("click",function()
{

})


// getAuthenticationHeader(public_key, secret_key)
// {
//     var pbkdf2 = require('pbkdf2')
//     let time =  parseInt(Date.now()/1000);
//     var derivedKey = pbkdf2.pbkdf2Sync(secret_key, time.toString(), 128, 32, 'sha256');
//     derivedKey = derivedKey.toString('hex');

//     return  new Headers({
//         "public_key": public_key,
//         "one_time_code": derivedKey,
//         "timestamp": time,
//     })
// }
// fetchdata()
// async function fetchdata()
// {
//     let result=await fetch("https://api.revery.ai/console/v1/process_new_garment")
//     let data=await result.json()
//     console.log(data)
// }
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
window.onload= function () {
 setInterval(function(){ 
     plusSlides(1);
 }, 5000);
 }