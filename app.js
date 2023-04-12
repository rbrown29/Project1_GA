console.log("this Works!");
const emails = [];
$(() => {
/////////////////////////////////////////////////////
 const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://crypto-news16.p.rapidapi.com/news/top/5",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": window.config.apiKey,
		"X-RapidAPI-Host": "crypto-news16.p.rapidapi.com"
	}
};

  $.ajax(settings).done(function (response) {
    console.log(response);

  }).then(
    (data) => {
      ///////////////////////////////////////////////// 
      const newsItems = $('.newsItem');
        for (let i = 0; i < data.length && i < newsItems.length; i++) {
            const item = data[i];
            const newsItem = newsItems.eq(i);

            newsItem.find('.title').html(`<dd>${item.title}</dd>`);
            newsItem.find('.description').html(`<dd>${item.description}</dd>`);
            newsItem.find('.webpage').html(`<dd><a href="${item.url}" target="_blank">${item.url}</a></dd>`);
            newsItem.find('.image').html(`<dd>${item.date}</dd>`);
        }

    },
    () => {
      console.log("error");
    }
  );
  ///////////////////////////////////////////////////
  $("#open").on("click", (event) => {
    $("#dialog").css("visibility", "visible");
    $("dl").css("visibility", "hidden");
    $("footer").css("visibility", "hidden");

  });
  /////////////////////////////////////////////////////
  $(".close").on("click", (event) => {
    $("#dialog").css("visibility", "hidden");
    $("dl").css("visibility", "visible");
    $("footer").css("visibility", "visible");
  });
  /////////////////////////////////////////////////////
  $("#open1").on("click", (event) => {
    $("#dialog1").css("visibility", "visible");
    $("dl").css("visibility", "hidden");
    $("footer").css("visibility", "hidden");
  });
  /////////////////////////////////////////////////////
  $(".close1").on("click", (event) => {
    $("#dialog1").css("visibility", "hidden");
    $("dl").css("visibility", "visible");
    $("footer").css("visibility", "visible");
  });
  ///////////////////////////////////////////////////// 
  $("form").on("submit", (event) => {
    event.preventDefault();
    const userInput = $('input[type="text"]').val();

    emails.unshift(userInput);
    alert("You are now regestered to recieve emails!");
    console.log(emails);
    $("form").trigger("reset");
  });
  /////////////////////////////////////////////////////
  $("#open2").on("click", (event) => {
    window.open("index.html", "_blank");
  });
});