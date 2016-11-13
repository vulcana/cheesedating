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
//hide all recipes as default!
$(function() {
	$('.cheese_recipe').hide()
});

//hide twitter feed
$(function() {
  $("#twitterfeed").hide();
});

//makes cheese img draggable
$( init );
 
$(".cheese_image").click(function(){
    $(".progress-bar").css("width", "33%");
});
$(".make_meal").click(function(){
    $(".progress-bar").css("width", "66%");
});
$(".tell_me_more").click(function(){
    $(".progress-bar").css("width", "100%");
});

function init() {
  $('#halloumi_cheese').draggable();
  $('#gorgonzola_cheese').draggable();
  $('#swiss_cheese').draggable();
  $('#camembert').draggable();
  $('#red_leicester').draggable();
  $('#cottage_cheese').draggable();
  $('#cheeseboard').droppable( {
   drop: cheeseonboard
        } );
    }  


function cheeseonboard( event, ui ) {
  var draggable = ui.draggable;
  alert( 'The square with ID "' + draggable.attr('id') + '" was dropped onto me!' );
  $("#cheeseboard").addClass("spin" );
  if (draggable.attr('id') == "halloumi_cheese")
  {
    $(".halloumi_recipe" ).addClass("selected" );
  }
  if (draggable.attr('id') == "gorgonzola_cheese")
  {
    $(".gorgonzola_recipe" ).addClass("selected" );
  }
  if (draggable.attr('id') == "swiss_cheese")
  {
    $(".swiss_cheese_recipe" ).addClass("selected" );
  }
  if (draggable.attr('id') == "camembert")
  {
    $(".camembert_recipe" ).addClass("selected" );
  }
  if (draggable.attr('id') == "red_leicester")
  {
    $(".red_leicester_recipe" ).addClass("selected" );
  }
}



//Make mea meal!
$(function() {
$("#make_button").hover(function(){
  });
}); 

$(function() {
$("#make_button").click(function(){
    $(".selected").show();
    $('html, body').animate({
      scrollTop: $(".selected").offset().top
    }, 2000);
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
$(".halloumi_buttons.tell_me_more").click(function(){
    $(".halloumi_ingredients").show();
    $(".halloumi_method").show();
  });
}); 

$(function() {
$(".swiss_cheese_buttons.tell_me_more").click(function(){
    $(".swiss_cheese_ingredients").show();
    $(".swiss_cheese_method").show();
  });
}); 

$(function() {
$(".camembert_buttons.tell_me_more").click(function(){
    $(".camembert_ingredients").show();
    $(".camembert_method").show();
  });
}); 

$(function() {
$(".red_leicester_buttons.tell_me_more").click(function(){
    $(".red_leciester_ingredients").show();
    $(".red_leicester_method").show();
  });
}); 


$(function() {
$(".cottage_cheese_buttons.tell_me_more").click(function(){
    $(".cottage_cheese_ingredients").show();
    $(".cottage_cheese_method").show();
  });
}); 

$(function() {
$(".gorgonzola_buttons.tell_me_more").click(function(){
    $(".gorgonzola_ingredients").show();
    $(".gorgonzola_method").show();
  });
}); 


//the no, gross button hides the recipe and returns user to the top of the page and removes cheese selection

$(function() {
$(".no_gross").click(function(){
    $(".cheese_recipe").hide();
    $(".cheese_recipe").removeClass("selected");
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    $(".ingredients").hide();
    $(".method").hide();
    $(".thumbnail").css({"border-color":"transparent"});
  });
}); 



//show twitter feed when hover over twitter-btn. Looking to change this to first click show, second click hide. F
$(function() {
$(".twitter-btn").hover(function(){
    $("#twitterfeed").show();
    $('html, body').animate({
      scrollTop: $("#twitterfeed").offset().top
    }, 0);
  }); 
}); 

$(function() {
$(".twitter-btn").mouseleave(function() {
  $("#twitterfeed").hide();
  }); 
}); 

//same as above for about text. I'll probably change this to be a dropdown from the navbar instead. F x
$(function() {
  $("#about_text").hide();
});

$(function() {
$(".about-btn").hover(function() {
  $("#about_text").show();
  }); 
}); 

$(function() {
$(".about-btn").mouseleave(function() {
  $("#about_text").hide();
  }); 
}); 

