/* css
//  This is a school project made by me Mirsad Mustafa
//  2015-11-06
//
*/


/**********************************/

$(document).ready(function() {
    //onmouse over social facebook
    $("#facebook").mouseover(function() {
      $("#social").addClass("facebook");

    });
    $("#facebook").mouseleave(function() {
      $("#social").removeClass("facebook");
    });

    //onmouse over social twitter
    $("#twitter").mouseover(function() {
      $("#social").addClass("twitter");

    });

    $("#twitter").mouseleave(function() {
      $("#social").removeClass("twitter");
    });

    //onmouse over social twitter
    $("#github").mouseover(function() {
      $("#social").addClass("github");

    });

    $("#github").mouseleave(function() {
      $("#social").removeClass("github");
    });

    //form send button
    $("#send_button").mouseover(function() {
      $("#send_button").addClass("github");
    });

    $("#send_button").mouseleave(function() {
      $("#send_button").removeClass("github");
    });

    //alert
    $( "#alert" ).fadeIn( "slow", function() {

      //remove alert div
      $( "#close" ).click(function() {
        $( "#alert" ).slideUp(500);

      });

      //dom-manipulation
      $(".site_name").click(function() {
        $("a").toggleClass("site_name_text");

      });
    });//alert

    $("#send_button").click(function(event) {
      event.preventDefault();
      $("#alert > div > p").html("<p>Thank you so much for contacting me<p><p>I will respond within 24 hours</p>");
      $("#alert").slideDown(500);
      $("#alert").css({
        "background-color":"#32BF57"
      });
    });

});//document ready
