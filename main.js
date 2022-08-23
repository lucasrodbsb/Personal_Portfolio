
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementsByTagName("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementsByTagName("main").style.marginLeft = "0";
}

var messageArray1 = ["Lucas Rodrigues"];
var textPosition = 0;
var speed = 100;

typewriter1 = () => {
  document.querySelector("#nome").innerHTML = messageArray1[0].substring(0, textPosition) + "<span id='barrinha'>|</span>";

  if(textPosition++ != messageArray1[0].length)
    setTimeout(typewriter1, speed)
}


$(window).on("load", () => {
  // $(".image-thumb").css("transition", "0.5s");
  typewriter1();
})