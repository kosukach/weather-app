let frameY = 0;
let counter = 0;
function scrollAnim(yPos){
  counter++;
  frameY += (yPos-window.pageYOffset)/5;
  window.scroll(0, frameY);
  if(window.pageYOffset===yPos||counter>40){
    counter=0
    return
  }
  if(window.pageYOffset!=yPos)setTimeout(`scrollAnim(${yPos})`, 10);
}
$(document).ready(function(){
  $("#monday-info").click(function(){
    $("#monday-content").fadeOut();
    $("#monday-content").css("display", "none");
    $("#monday-details").fadeIn();
  })
  $("#monday-back").click(function(){
    $("#monday-details").fadeOut();
    $("#monday-details").css("display", "none");
    $("#monday-content").fadeIn();
  })
  $("#tuesday-info").click(function(){
    $("#tuesday-content").fadeOut();
    $("#tuesday-content").css("display", "none");
    $("#tuesday-details").fadeIn();
  })
  $("#tuesday-back").click(function(){
    $("#tuesday-details").fadeOut();
    $("#tuesday-details").css("display", "none");
    $("#tuesday-content").fadeIn();
  })
  $("#wednesday-info").click(function(){
    $("#wednesday-content").fadeOut();
    $("#wednesday-content").css("display", "none");
    $("#wednesday-details").fadeIn();
  })
  $("#wednesday-back").click(function(){
    $("#wednesday-details").fadeOut();
    $("#wednesday-details").css("display", "none");
    $("#wednesday-content").fadeIn();
  })
  $("#thursday-info").click(function(){
    $("#thursday-content").fadeOut();
    $("#thursday-content").css("display", "none");
    $("#thursday-details").fadeIn();
  })
  $("#thursday-back").click(function(){
    $("#thursday-details").fadeOut();
    $("#thursday-details").css("display", "none");
    $("#thursday-content").fadeIn();
  })
  $("#friday-info").click(function(){
    $("#friday-content").fadeOut();
    $("#friday-content").css("display", "none");
    $("#friday-details").fadeIn();
  })
  $("#friday-back").click(function(){
    $("#friday-details").fadeOut();
    $("#friday-details").css("display", "none");
    $("#friday-content").fadeIn();
  })
  $("#saturday-info").click(function(){
    $("#saturday-content").fadeOut();
    $("#saturday-content").css("display", "none");
    $("#saturday-details").fadeIn();
  })
  $("#saturday-back").click(function(){
    $("#saturday-details").fadeOut();
    $("#saturday-details").css("display", "none");
    $("#saturday-content").fadeIn();
  })
  $("#sunday-info").click(function(){
    $("#sunday-content").fadeOut();
    $("#sunday-content").css("display", "none");
    $("#sunday-details").fadeIn();
  })
  $("#sunday-back").click(function(){
    $("#sunday-details").fadeOut();
    $("#sunday-details").css("display", "none");
    $("#sunday-content").fadeIn();
  })
  $("#monday1-info").click(function(){
    $("#monday1-content").fadeOut();
    $("#monday1-content").css("display", "none");
    $("#monday1-details").fadeIn();
  })
  $("#monday1-back").click(function(){
    $("#monday1-details").fadeOut();
    $("#monday1-details").css("display", "none");
    $("#monday1-content").fadeIn();
  })
});

/*$(function(){
  $("#welcome").waypoint(function(){
    $(".nav-item").removeClass("active")
    $("#welcome-nav").addClass("active")
  })
  $("#forecast").waypoint(function(){
    $(".nav-item").removeClass("active")
    $("#forecast-nav").addClass("active")
  })
  $("#seismic").waypoint(function(){
    $(".nav-item").removeClass("active")
    $("#seismic-nav").addClass("active")
  })
  $("#volcanic").waypoint(function(){
    $(".nav-item").removeClass("active")
    $("#volcanic-nav").addClass("active")
  })
});*/

$(document).ready(function(){
  fetch("http://localhost:3000/days", {
    method: "GET",
    headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000"
    },
  })
    .then(res => {return res.json()})
    .then(res => {
      const cardTitle = document.getElementsByClassName("card-title");
      const degrees = document.getElementsByClassName("degrees");
      const sunrise = document.getElementsByClassName("sunrise");
      const sunset = document.getElementsByClassName("sunset");
      const wind = document.getElementsByClassName("wind");
      const humidity = document.getElementsByClassName("humidity");
      for(let i=0; i< res.length; i++){
        cardTitle[i].innerHTML = res[i].dayName;
        degrees[i].innerHTML = res[i].tempRange;
        sunrise[i].innerHTML = res[i].sunRise;
        sunset[i].innerHTML = res[i].sunSet;
        wind[i].innerHTML = res[i].wind;
        humidity[i].innerHTML = res[i].humidity;
      }
    })
    .catch(ex=> console.log(ex));
})