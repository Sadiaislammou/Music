$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 20) {
	    $(".black").css("background" , "linear-gradient(to right, #5329A0 , #632C5C, #772E0E)");
	  }

	  else{
		  $(".black").css("background" , "none");  	
	  }
  })
})