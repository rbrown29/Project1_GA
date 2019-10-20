console.log("this Works!");
$(() => {
console.log("here");

        $.ajax({
            url: "https://newsapi.org/v2/everything?q=bitcoin&apiKey=fed0a49b182549368f00fc7862d755e7"
     
        }).then(
            (data)=>{
              console.log(data);
              $('#Author').html(data.articles[0].author);
              $('#description').html(data.articles[0].description);  
              $('#title').html(data.articles[0].title);
              $('#webpage').html(data.articles[0].url);
              $('#Author1').html(data.articles[1].author);
              $('#description1').html(data.articles[1].description);  
              $('#title1').html(data.articles[1].title);
              $('#webpage1').html(data.articles[1].url);
              $('#Author2').html(data.articles[2].author);
              $('#description2').html(data.articles[2].description);  
              $('#title2').html(data.articles[2].title);
              $('#webpage2').html(data.articles[2].url);
              $('#Author3').html(data.articles[3].author);
              $('#description3').html(data.articles[3].description);  
              $('#title3').html(data.articles[3].title);
              $('#webpage3').html(data.articles[3].url);
            },
            ()=>{
                console.log("") 
            }
        );
       $( function() {
          $( "#dialog" ).dialog({
             autoOpen: false,
             show: {
             effect: "size",
             duration: 1000
          }
       });
 
      $( "#opener" ).on( "click", function() {
        $("#dialog").dialog( "option", "width", 600);
        $( "#dialog" ).dialog( "open" );
      });
   }); 
    
});