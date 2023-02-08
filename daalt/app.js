$(document).ready(function() {
    $('.pour')
      .delay(2500)
      .animate({
        height: '360px'
        }, 1500)
      .delay(1600)
      .slideUp(500);
    
    $('#liquid') 
      .delay(3400)
      .animate({
        height: '190px'
      }, 2500);
    
    $('.beer-foam') 
      .delay(3400)
      .animate({
        bottom: '200px'
        }, 2500);
    });
  