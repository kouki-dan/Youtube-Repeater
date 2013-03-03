if(!document.location.hostname.match(/youtube.com/)){
  alert("This page is not youtube.");
}
else{
  function repeater(state){
    if(state == 0){
      player.playVideo();
    }
  }

  var player = document.getElementsByTagName("embed")[0];
  if(player){
    if(player.addEventListener){
      player.addEventListener("onStateChange","repeater");
    }
  }

}
  
