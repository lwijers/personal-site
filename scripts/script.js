

$(document).ready(function(){

// $("#introText").hide()


// Check in viewport
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height() ;
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };


// Color Changer
  $(window).on('resize scroll', function() {
    $(".colorChanger").each(function() {
      if ($(this).isInViewport()) {
        var bgCol = $(this).data('background')
        $("body").css("background-color", bgCol)
        }
    });
    // show intro text
    if ($("#introTextWrapper").isInViewport() == true) {
        $("#introText").delay(500).fadeIn(1000);
    } else {
      $("#introText").hide()
    }
  });

// Create popup panes
  $(".hobbyIcons").click( function() {
    var iconClickedId = "#"+ $(this).attr("id") + "Pane"
    $(iconClickedId).css("visibility", "visible");
    });
    // if clicked on open pane, close the pane
    $(".popupPane").click( function() {
      $(".popupPane").css("visibility", "hidden");
    });



 function randomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
  };


 function giveIconAnim() {
   var icons = [$("#scuba"), $("#guitar"), $("#reading"), $("#photo")];
  // var chosenIcon = randomFrom(icons)
  giveAnim(randomFrom(icons))
 };


function giveAnim(icon) {
  var anims = [0, 1, 2];
  switch (randomFrom(anims)) {
      case 0:
        $(icon).effect("shake", {distance:2});
        break;
      case 1:
        $(icon).effect("shake", {direction: "up", distance:2});
        break;
      case 2:
        $(icon).toggle("pulsate",
        {times: 1}).toggle("pulsate", {times: 1});
        break;
    }
  };

 var playAnimations = setInterval(giveIconAnim, 2000)


});
