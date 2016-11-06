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
    $("#halloumi_cheese").css({"border-color":"#337ab7"});
            });
});

$(function() {
$("#gorgonzola_cheese").click(function(){
    $(".gorgonzola_recipe" ).addClass("selected" );
    $("#gorgonzola_cheese").css({"border-color":"#337ab7"});
            });
}); 
$(function() {
$("#swiss_cheese").click(function(){
    $(".swiss_cheese_recipe" ).addClass("selected" );
    $("#swiss_cheese").css({"border-color":"#337ab7"});
            });
}); 
$(function() {
$("#camembert").click(function(){
    $(".camembert_recipe" ).addClass("selected" );
    $("#camembert").css({"border-color":"#337ab7"});
            });
}); 
$(function() {
$("#red_leicester").click(function(){
    $(".red_leicester_recipe" ).addClass("selected" );
    $("#red_leicester").css({"border-color":"#337ab7"});
            });
}); 
$(function() {
$("#cottage_cheese").click(function(){
    $(".cottage_cheese_recipe" ).addClass("selected" );
    $("#cottage_cheese").css({"border-color":"#337ab7"});
            });
}); 

$(function() {
$("#make_button").click(function(){
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
    $(".thumbnail").css({"border-color":"transparent"});
}); 
}); 

//$(function() {
//$("#make_button").hover(function(){
//$("#cheeseboard").spin!! I don`t know how to do that. adding hover class doen`t work.
