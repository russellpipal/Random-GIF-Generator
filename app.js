var gifObject = {};
var jGif = "";
gifUrl = "";

$(function(){
  $("#getGif").on("click", function(){
    $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC").done(function(response){
      gifObject = response;
      gifUrl = gifObject.data.image_url;
      jGif = "<img src=\"" + gifUrl + "\"alt = \"Random Image\">";
      $("body").append(jGif);
    });
  });
});
