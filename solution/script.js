$(document).ready(function(){
  $("#failure").hide();
  $("#success").hide();

  $("button").click(function(){
    var user = $("input").val();

    if(oldEnough(user)){
      $("#failure").hide();
      revealImage();
      $("#success").show();
    } else {
      $("#success").hide();
      $("#failure").show();
    }
  });
});

function oldEnough(age){
  if(age >= 21 ){
    return true;
  } else {
    return false;
  }
}

/* DO NOT MODIFY*/
function revealImage(){
  $("img").attr("src","./img/encrypted.jpg");
}
