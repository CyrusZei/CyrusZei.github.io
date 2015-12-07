/* css
//  This is a school project made by me Mirsad Mustafa
//  2015-11-30
// fething rss from https://rss.itunes.apple.com/us/?urlDesc=%2Fgenerator
*/


/**********************************/

$(document).ready(function() {
  //hide the alert div
  $("#alert").hide();

  //Search on itunes on everything
  $("#search_itunes").click(function(e) {
    //if the search box is empty it will show an error from the alert div
    if ($("#search_text_area").val().length === 0) {
      event.preventDefault();
      $("#alert").show();
      $("#alert").html("<br><h3>You must search for something!</h3>");
      $("#alert").delay(4000).slideUp();

    } else {
      var search_text = $("#search_text_area").val();
      //empty the #top_25
      $("#top_25").html("");
      $("h2").html("");
      $.ajax({
        cors: true,
        dataType: "jsonp",
        url: "https://itunes.apple.com/search?term=" + search_text,
        method: "GET",
        //loading animation, added a delay since so that you can see the loading animation, eye candy
        beforeSend: function() {
          $("#loading").fadeIn("fast", function() {
            $(this).delay(1000).fadeOut("fast");
          }); //loading fade in
        }, // before send
        success: function(data) {

            var api_search = "Your search results";
            $("h2").append(api_search);
            $.each(data.results, function(i, value) {

              var search_results = "<div>";
              //img cover
              search_results += "<img class=\"search_cover\" src=\"" + data.results[i].artworkUrl100 + "\" />";
              //buy on itunes link
              search_results += "<a href=\"" + data.results[i].trackViewUrl + "\" target=\"_blank\"> <img class=\"buy_itunes\" src=\"img/buy_on_itunes.png\"></a>";
              //artist name
              search_results += "<h3>" + data.results[i].artistName + "</h3>";
              //genre
              search_results += "<p class=\"release_date\">" + data.results[i].primaryGenreName + "</p>";
              search_results += "</div";
              $("#top_25").append(search_results).children().addClass("top_25");
            }); // each
          } // Success
      }); //ajax
    }

  }); //search_itunes click


  //on enter website it will load top 25 music
  $("#top_25").html("");
  $.ajax({
    cors: true,
    dataType: "jsonp",
    url: "https://itunes.apple.com/se/rss/topsongs/limit=25/explicit=true/json",
    method: "GET",
    beforeSend: function() {
      $("#loading").fadeOut("fast", function() {
        $(this).delay(1000).fadeOut("fast");
      });
    },
    success: function(data) {
        var api_music = data.feed.title.label;
        $("h2").append(api_music);
        $.each(data.feed.entry, function(i, value) {

          var song = "<div>";
          song += "<img class=\"song_cover\" src=\"" + data.feed.entry[i]['im:image'][2].label + "\" />";
          song += "<a href=\"" + data.feed.entry[i]['im:collection'].link.attributes.href + "\" target=\"_blank\"> <img class=\"buy_itunes\" src=\"img/buy_on_itunes.png\"></a>";
          song += "<h3>" + data.feed.entry[i]['im:artist'].label + "</h3>";
          song += "<h4>" + data.feed.entry[i]['im:name'].label + "</h4>";
          song += "<p class=\"release_date\">" + data.feed.entry[i]['im:releaseDate'].attributes.label + "</p>";
          song += "<audio class=\"play_pause\" src=\"" + data.feed.entry[i].link[1].attributes.href + "\" preload=\"auto\" controls></audio>";
          song += "</div";
          $("#top_25").append(song).children().addClass("top_25");
        }); // each
      } // Success
  }); // ajax end

  //When you click on the button Music Top 25
  $("#music_button").click(function() {
    $("#top_25").html("");
    $("h2").html("");
    $.ajax({
      cors: true,
      dataType: "jsonp",
      url: "https://itunes.apple.com/se/rss/topsongs/limit=25/explicit=true/json",
      method: "GET",
      beforeSend: function() {
        $("#loading").fadeIn("fast", function() {
          $(this).delay(1000).fadeOut("fast");
        });
      },
      success: function(data) {

          var api_music = data.feed.title.label;
          $("h2").append(api_music);
          $.each(data.feed.entry, function(i, value) {

            var song = "<div>";
            song += "<img class=\"song_cover\" src=\"" + data.feed.entry[i]['im:image'][2].label + "\" />";
            song += "<a href=\"" + data.feed.entry[i]['im:collection'].link.attributes.href + "\" target=\"_blank\"> <img class=\"buy_itunes\" src=\"img/buy_on_itunes.png\"></a>";
            song += "<h3>" + data.feed.entry[i]['im:artist'].label + "</h3>";
            song += "<h4>" + data.feed.entry[i]['im:name'].label + "</h4>";
            song += "<p class=\"release_date\">" + data.feed.entry[i]['im:releaseDate'].attributes.label + "</p>";
            song += "<audio class=\"play_pause\" src=\"" + data.feed.entry[i].link[1].attributes.href + "\" preload=\"auto\" controls></audio>";
            song += "</div";
            $("#top_25").append(song).children().addClass("top_25");
          }); // each
        } // Success
    }); // ajax end

  }); // music_button click

  //When you click on the button Movies Top 25
  $("#movie_button").click(function() {
    $("#top_25").html("");
    $("h2").html("");
    $.ajax({
      cors: true,
      dataType: "jsonp",
      url: "https://itunes.apple.com/se/rss/topmovies/limit=25/explicit=true/json",
      method: "GET",
      beforeSend: function() {
        $("#loading").fadeIn("fast", function() {
          $(this).delay(1000).fadeOut("fast");
        });
      },
      success: function(data) {

          var api_movie = data.feed.title.label;
          $("h2").append(api_movie);
          $.each(data.feed.entry, function(i, value) {

            var movie = "<div>";
            movie += "<img class=\"movie_cover\" src=\"" + data.feed.entry[i]['im:image'][2].label + "\" />";
            movie += "<a href=\"" + data.feed.entry[i].link[0].attributes.href + "\" target=\"_blank\"> <img class=\"buy_movie_itunes\" src=\"img/buy_on_itunes.png\"></a>";
            movie += "<h4>" + data.feed.entry[i]['im:name'].label + "</h4>";
            movie += "</div";
            $("#top_25").append(movie).children().addClass("top_25");
          }); // each
        } // Success
    }); // ajax end

  }); // movies_button click

  //When you click on the button iOS Top 25
  $("#ios_button").click(function() {
    $("#top_25").html("");
    $("h2").html("");
    $.ajax({
      cors: true,
      dataType: "jsonp",
      url: "https://itunes.apple.com/se/rss/topfreeapplications/limit=25/explicit=true/json",
      method: "GET",
      beforeSend: function() {
        $("#loading").fadeIn("fast", function() {
          $(this).delay(1000).fadeOut("fast");
        });
      },
      success: function(data) {

          var api_ios = data.feed.title.label;
          $("h2").append(api_ios);
          $.each(data.feed.entry, function(i, value) {

            var ios = "<div>";
            ios += "<img class=\"movie_cover\" src=\"" + data.feed.entry[i]['im:image'][2].label + "\" />";
            ios += "<a href=\"" + data.feed.entry[i].link.attributes.href + "\" target=\"_blank\"> <img class=\"buy_ios_itunes\" src=\"img/buy_on_itunes.png\"></a>";
            ios += "<h3>" + data.feed.entry[i]['im:name'].label + "</h3>";
            ios += "<h4>" + data.feed.entry[i].summary.label.substr(0, 70) + "..." + "</h4>";
            ios += "</div";
            $("#top_25").append(ios).children().addClass("top_25");
          }); // each
        } // Success
    }); // ajax end

  }); // ios_button click

  //When you click on the button book Top 25
  $("#book_button").click(function() {
    $("#top_25").html("");
    $("h2").html("");
    $.ajax({
      cors: true,
      dataType: "jsonp",
      url: "https://itunes.apple.com/se/rss/topfreeebooks/limit=25/explicit=true/json",
      method: "GET",
      beforeSend: function() {
        $("#loading").fadeIn("fast", function() {
          $(this).delay(1000).fadeOut("fast");
        });
      },
      success: function(data) {
          var api_book = data.feed.title.label;
          $("h2").append(api_book);
          $.each(data.feed.entry, function(i, value) {

            var book = "<div>";
            book += "<img class=\"book_cover\" src=\"" + data.feed.entry[i]['im:image'][2].label + "\" />";
            book += "<a href=\"" + data.feed.entry[i].link.attributes.href + "\" target=\"_blank\"> <img class=\"buy_book_itunes\" src=\"img/buy_on_itunes.png\"></a>";
            book += "<h3>" + data.feed.entry[i]['im:name'].label + "</h3>";
            book += "<h4>" + data.feed.entry[i].summary.label.substr(0, 20) + "..." + "</h4>";
            book += "</div";
            $("#top_25").append(book).children().addClass("top_25");
          }); // each
        } // Success
    }); // ajax end

  }); // ios_button click

});
