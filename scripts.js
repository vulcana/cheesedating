$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
			$('html, body').animate({
  				scrollTop: target.offset().top
				}, 1000);
				return false;
				}
		}
		});
});

$(function() {
$(".cheese_recipe").hide();
});

$(function() {
$( "input" ).on( "click", function() {
  if($('#cheese1').is(":checked")){
     $("#recipe1" ).addClass("selected" );
  }
});
}); 

$(function() {
$( "input" ).on( "click", function() {
  if($('#cheese2').is(":checked")){
     $("#recipe2" ).addClass("selected" );
  }
});
}); 
$(function() {
$( "input" ).on( "click", function() {
  if($('#cheese3').is(":checked")){
     $("#recipe3" ).addClass("selected" );
  }
});
}); 
$(function() {
$( "input" ).on( "click", function() {
  if($('#cheese4').is(":checked")){
     $("#recipe4" ).addClass("selected" );
  }
});
}); 
$(function() {
$( "input" ).on( "click", function() {
  if($('#cheese5').is(":checked")){
     $("#recipe5" ).addClass("selected" );
  }
});
}); 
$(function() {
$( "input" ).on( "click", function() {
  if($('#cheese6').is(":checked")){
     $("#recipe6" ).addClass("selected" );
  }
});
}); 

$(function() {
$("#make").click(function(){
    $(".selected").show();
});
}); 

$(function() {
$("#reset").click(function(){
    $(".cheese_recipe").hide();
    $(".cheese_recipe").removeClass("selected");
    $('input:checkbox').removeAttr('checked');
});
}); 
