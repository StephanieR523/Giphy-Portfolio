// make an array of items, create new items to add to array
//function to display gif buttons 
// need to add on click i think for the submit button
//submit does not work, getting back undefined
//need to add still and animate 


var topics = ["dogs", "horses", "alligators", "dolphins"];

function displayGifBtns() {

      for (var i = 0; i < topics.length; i++) {
          var gifBtn = $("<button>");
  
          // var rating = results[i].rating; //adds rating
          // var p = $("<p>").text("Rating: " + rating);
  
  
          gifBtn.addClass("topics");
          gifBtn.addClass("btn btn-primary");
          gifBtn.attr("data-animal", topics[i]);
          gifBtn.text(topics[i]);
  
  
          $("#animal-btn").append(gifBtn);
      }
  
  };





$( document ).ready(function() {


displayGifBtns ()

$("button").on("click", function() {
    var animals = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animals + "&api_key=o0lnIbBIyt7nT2Ayk3efUdmBSL15L8R6&limit=10";
  console.log(animals)
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
      
  for (var i = 0; i < results.length; i++){
   var imageContainer = $("<div>");

      var animalImage = $("<img>");
      animalImage.attr("src", results[i].images.fixed_height.url);

      

      imageContainer.append(animalImage);
      $("#gifshere").append(imageContainer);
  }
  
  
    console.log(queryURL);
		console.log(response);
      })


      })
    })
