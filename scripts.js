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

//select the recipes corresponding to selected cheeses by adding "selected" calss
//also add the border properties to stay
$(function() {
$("#halloumi_cheese").click(function(){
    $(".halloumi_recipe" ).addClass("selected");
    $("#halloumi_cheese").css({"border-color":"#ffd500"});
    $("#halloumi_cheese").css({"border-width":"2px"});
            });
});
$(function() {
$("#gorgonzola_cheese").click(function(){
    $(".gorgonzola_recipe" ).addClass("selected" );
    $("#gorgonzola_cheese").css({"border-color":"#ffd500"});
    $("#gorgonzola_cheese").css({"border-width":"2px"});
            });
}); 
$(function() {
$("#swiss_cheese").click(function(){
    $(".swiss_cheese_recipe" ).addClass("selected" );
    $("#swiss_cheese").css({"border-color":"#ffd500"});
    $("#swiss_cheese").css({"border-width":"2px"});
            });
}); 
$(function() {
$("#camembert").click(function(){
    $(".camembert_recipe" ).addClass("selected" );
    $("#camembert").css({"border-color":"#ffd500"});
    $("#camembert").css({"border-width":"2px"});
            });
}); 
$(function() {
$("#red_leicester").click(function(){
    $(".red_leicester_recipe" ).addClass("selected" );
    $("#red_leicester").css({"border-color":"#ffd500"});
    $("#red_leicester").css({"border-width":"2px"});
            });
}); 
$(function() {
$("#cottage_cheese").click(function(){
    $(".cottage_cheese_recipe" ).addClass("selected" );
    $("#cottage_cheese").css({"border-color":"#ffd500"});
    $("#cottage_cheese").css({"border-width":"2px"});
            });
}); 

//Make mea meal!
$(function() {
$("#make_button").hover(function(){
  });
}); 

$(function() {
$("#make_button").click(function(){
    $(".selected").show();
  });
}); 

//cheeseboard spins when mouse is on on the makemeal button area too.
$(function() {
$("#make_button").hover(function(){
$("#cheeseboard").addClass("spin" );
}); 
}); 
$(function() {
$("#make_button").mouseleave(function() {
  $("#cheeseboard").removeClass("spin" );
}); 
}); 

//reset button
$(function() {
$("#reset").click(function(){
    $(".cheese_recipe").hide();
    $(".cheese_recipe").removeClass("selected");
    $(".thumbnail").css({"border-color":"transparent"});
    $("#cheeseboard").removeClass("spin" );
    $(".ingredients").hide();
    $(".method").hide();
}); 
}); 


//hide the divs containing method and ingredients as default
$(function() {
    $(".ingredients").hide();
    $(".method").hide();
});


//the ingredients and method appear when user clicks 'tell me more' button

$(function() {
$(".tell_me_more").click(function(){
    $(".ingredients").show();
    $(".method").show();
  });
}); 

//the no, gross button hides the recipe and returns user to the top of the page and removes cheese selection
$(function() {
$(".no_gross").click(function(){
    $(".cheese_recipe").hide();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    $(".ingredients").hide();
    $(".method").hide();
    $(".cheese_recipe").removeClass("selected");
    $(".thumbnail").css({"border-color":"transparent"});
  });
}); 
//makes cheese img draggable
$( init );
 
function init() {
  $('#halloumi_cheese').draggable();
  $('#gorgonzola_cheese').draggable();
  $('#swiss_cheese').draggable();
  $('#camembert').draggable();
  $('#red_leicester').draggable();
  $('#cottage_cheese').draggable();
}
// progress bar



