if ( $(window).width() > 739) {
  //Add your javascript for large screens here




var currentSlide = 0

var totalSlides = $('.slide').length




var moveSlide = function(slide) {
  var leftPosition = (-slide * 100) +'vw'

var slideNumber = slide + 1 
$('.steps').text(slideNumber + '/' + totalSlides)

$('.holder').css('left', leftPosition)


}




var nextSlide = function() {
  currentSlide = currentSlide + 1

if (currentSlide >= totalSlides) {
  currentSlide = 0
  
}

  moveSlide(currentSlide)
  
}






 var previousSlide = function() {
   currentSlide = (currentSlide) - 1
    


      if (currentSlide < 0 ) {
   currentSlide = totalSlides - 1
   }  
   
   moveSlide(currentSlide)
   
 }






var autoSlide = setInterval(function(){
  
nextSlide()


},5000)





$('.next').on('click', function() {
  clearInterval(autoSlide)

  nextSlide()
})





$('.prev').on('click', function() {
   clearInterval(autoSlide)
  previousSlide()
})





$('.nav-slides a').on('click', function() {
  clearInterval(autoSlide)
})




var slideNumber = currentSlide + 1 
$('.steps').text(slideNumber + '/' +totalSlides)





$('body').on('keydown', function (event) {
var keyCode = event.keyCode

if (keyCode ==37 ) {
     clearInterval(autoSlide)

  previousSlide()
}



  
if (keyCode ==39) {
     clearInterval(autoSlide)

  nextSlide()
}
  
})

}
else {
//Add your javascript for small screens here

clearInterval(autoSlide)


var currentSlide = 0

var totalSlides = $('.slide').length




var moveSlide = function(slide) {
  var leftPosition = (-slide * 100) +'vw'
var slideNumber = slide + 1 
$('.steps').text(slideNumber + '/' + totalSlides)

$('.holder').css('left', leftPosition)

}






var nextSlide = function() {
  currentSlide = currentSlide + 1

if (currentSlide >= totalSlides) {
  currentSlide = 0
  
}

  moveSlide(currentSlide)
  
}






 var previousSlide = function() {
   currentSlide = (currentSlide) - 1
    


      if (currentSlide < 0 ) {
   currentSlide = totalSlides - 1
   }  
   
   moveSlide(currentSlide)
   
 }









$('.next').on('click', function() {
  clearInterval(autoSlide)

  nextSlide()
})





$('.prev').on('click', function() {
   clearInterval(autoSlide)
  previousSlide()
})





$('.nav-slides a').on('click', function() {
  clearInterval(autoSlide)
})




var slideNumber = currentSlide + 1 
$('.steps').text(slideNumber + '/' +totalSlides)





$('body').on('keydown', function (event) {
var keyCode = event.keyCode

if (keyCode ==37 ) {
     clearInterval(autoSlide)

  previousSlide()
}



  
if (keyCode ==39) {
     clearInterval(autoSlide)

  nextSlide()
}
  
})

}