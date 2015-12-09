$( "section" ).click(function() {
  for (i=0;i<10;i++) {
    $( "section" ).animate({
      "padding-top": "+=1000",
    }, 1000*60, "linear", function() {
      // Animation complete.
    });
  }
});