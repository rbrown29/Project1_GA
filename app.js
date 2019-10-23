console.log("this Works!");
const emails = [];
$(() => {

        $.ajax({
            url: "https://newsapi.org/v2/everything?q=bitcoin&apiKey=fed0a49b182549368f00fc7862d755e7"
     
        }).then(
            (data)=>{
              console.log(data);
              $('#Author').html(data.articles[0].author);
              $('#description').html(data.articles[0].description);  
              $('#title').html(data.articles[0].title);
              const $atag = $("<a>");
              $atag.attr("href", data.articles[0].url);
              $atag.attr("target", "_blank");
              $('#webpage').append($atag);
              $atag.text(data.articles[0].url);
              $atag.css("text-decoration", "none");
        ////////////////////////////////////////////////////////////
              $('#Author1').html(data.articles[1].author);
              $('#description1').html(data.articles[1].description);  
              $('#title1').html(data.articles[1].title);
              const $atag2 = $("<a>");
              $atag2.attr("href", data.articles[1].url);
              $atag2.attr("target", "_blank");
              $('#webpage1').append($atag2);
              $atag2.text(data.articles[1].url);
              $atag2.css("text-decoration", "none");
        ///////////////////////////////////////////////////////////////////
              $('#Author2').html(data.articles[2].author);
              $('#description2').html(data.articles[2].description);  
              $('#title2').html(data.articles[2].title);
              const $atag3 = $("<a>");
              $atag3.attr("href", data.articles[2].url);
              $atag3.attr("target", "_blank");
              $('#webpage2').append($atag3);
              $atag3.text(data.articles[2].url);
              $atag3.css("text-decoration", "none");
        ///////////////////////////////////////////////////////////////////      
              $('#Author3').html(data.articles[3].author);
              $('#description3').html(data.articles[3].description);  
              $('#title3').html(data.articles[3].title);
              const $atag4 = $("<a>");
              $atag4.attr("href", data.articles[3].url);
              $atag4.attr("target", "_blank");
              $('#webpage3').append($atag4);
              $atag4.text(data.articles[3].url);
              $atag4.css("text-decoration", "none");
            },
            ()=>{
                console.log("error");
            }
        );

       $("#open").on("click", (event) => {
         $("#dialog").css("visibility", "visible");
         $("dl").css("visibility", "hidden");
       });

       $(".close").on("click", (event) => {
         $("#dialog").css("visibility", "hidden");
         $("dl").css("visibility", "visible");
       });
      
      $("form").on("submit", (event) => {
        event.preventDefault();
        const userInput = $('input[type="text"]').val();
        
        emails.unshift(userInput);
        alert("You are now regestered to recieve emails!");
        console.log(emails);
        $("form").trigger("reset");
      });
});