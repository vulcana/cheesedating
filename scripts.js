// make all links smooth scroll
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


//make cheese images draggable onto the cheeseboard
$( init );
 
function init() {
  $('#halloumi_cheese').draggable({
  drag: function( event, ui ) {
    $(".halloumi_recipe" ).removeClass("selected" ); 
  }
});

  $('#gorgonzola_cheese').draggable({
  drag: function( event, ui ) {
    $(".gorgonzola_recipe" ).removeClass("selected" ); 
  }
});

  $('#swiss_cheese').draggable({
  drag: function( event, ui ) {
    $(".swiss_cheese_recipe" ).removeClass("selected" ); 
  }
});

  $('#camembert').draggable({
  drag: function( event, ui ) {
    $(".camembert_recipe" ).removeClass("selected" ); 
  }
});

  $('#red_leicester').draggable({
  drag: function( event, ui ) {
    $(".red_leicester_recipe" ).removeClass("selected" ); 
  }
});

  $('#cottage_cheese').draggable({
  drag: function( event, ui ) {
    $(".cottage_cheese_recipe" ).removeClass("selected" ); 
  }
});

  $('#cheeseboard').droppable( {
   drop: cheeseonboard
        } );
    }  

    
// make progress bar complete as user progresses down page
$(".progress-bar").css("width", "10%");

$(".cheese_image").click(function(){
    $(".progress-bar").css("width", "33%");
});
$(".make_meal").click(function(){
    $(".progress-bar").css("width", "66%");
});
$(".tell_me_more").click(function(){
    $(".progress-bar").css("width", "100%");
});
$(".no_gross").click(function(){
    $(".progress-bar").css("width", "0%");
});


function cheeseonboard( event, ui ) {
  var draggable = ui.draggable;
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
    if (draggable.attr('id') == "cottage_cheese")
  {
    $(".cottage_cheese_recipe" ).addClass("selected" );
  }
}

$(function() {
$("#make_button").click(function(){
    if (document.querySelector('.selected') == null) {
    // .. it does not exists
      alert( 'Drop a cheese on the cheeseboard!' );
}
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


//hide the divs containing method and ingredients as default
$(function() {
    $(".ingredients").hide();
    $(".method").hide();
});


//the ingredients and method appear when user clicks 'tell me more' button

$(function() {
$(".halloumi_buttons.tell_me_more").click(function(){
    $(".halloumi_ingredients").show(1500, swing);
    $(".halloumi_method").show(1500, swing);
  });
}); 

$(function() {
$(".swiss_cheese_buttons.tell_me_more").click(function(){
    $(".swiss_cheese_ingredients").show(1500, swing);
    $(".swiss_cheese_method").show(1500, swing);
  });
}); 

$(function() {
$(".camembert_buttons.tell_me_more").click(function(){
    $(".camembert_ingredients").show(1500, swing);
    $(".camembert_method").show(1500, swing);
  });
}); 

$(function() {
$(".red_leicester_buttons.tell_me_more").click(function(){
    $(".red_leicester_ingredients").show(1500, swing);
    $(".red_leicester_method").show(1500, swing);
  });
}); 


$(function() {
$(".cottage_cheese_buttons.tell_me_more").click(function(){
    $(".cottage_cheese_ingredients").show(1500, swing);
    $(".cottage_cheese_method").show(1500, swing);
  });
}); 

$(function() {
$(".gorgonzola_buttons.tell_me_more").click(function(){
    $(".gorgonzola_ingredients").show(1500, swing);
    $(".gorgonzola_method").show(1500, swing);
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



//hide twitter feed by default, and toggle on click
$("#twitterfeed").hide();

$('#twitter_button').click(function () {
    $('#twitterfeed').toggle("slide", {
          direction: "right"
      }, 1000);
});

