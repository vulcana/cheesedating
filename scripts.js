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

$('#recipe1').hide()
$('#recipe2').hide()

$( "input" ).on( "click", function() {
  if($('#cheese1').is(":checked")){
     $("#recipe1" ).addClass("selected" );
  }
});

$( "input" ).on( "click", function() {
  if($('#cheese2').is(":checked")){
     $("#recipe2" ).addClass("selected" );
  }
});

$("#btn1").click(function(){
    $(".selected").show();
});

$("#reset").click(function(){
    $(".recipe").hide();
  });

$("#reset").click(function(){
    $(".recipe").hide();
    $(".recipe").removeClass("selected");
    $('input:checkbox').removeAttr('checked');
}); 