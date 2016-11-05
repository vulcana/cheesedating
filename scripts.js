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
//hide all recipes as default
$(function() {
	$('.cheese_recipe').hide()
});

//select the selected cheeses by adding "selected" calss
$(function() {
$("#halloumi_cheese").click(function(){
    $(".halloumi_recipe" ).addClass("selected");
            });
});
$(function() {
$("#gorgonzola_cheese").click(function(){
    $(".gorgonzola_recipe" ).addClass("selected" );
            });
}); 
$(function() {
$("#swiss_cheese").click(function(){
    $(".swiss_cheese_recipe" ).addClass("selected" );
            });
}); 
$(function() {
$("#camembert").click(function(){
    $(".camembert_recipe" ).addClass("selected" );
            });
}); 
$(function() {
$("#red_leicester").click(function(){
    $(".red_leicester_recipe" ).addClass("selected" );
            });
}); 
$(function() {
$("#cottage_cheese").click(function(){
    $(".cottage_cheese_recipe" ).addClass("selected" );
            });
}); 

$(function() {
$("#make").click(function(){
    $(".selected").show();
});
}); 
$(function() {
$("#reset").click(function(){
    $(".recipe").hide();
  });
}); 

$(function() {
$("#reset").click(function(){
    $(".cheese_recipe").hide();
    $(".cheese_recipe").removeClass("selected");
}); 
}); 