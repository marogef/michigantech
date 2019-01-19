
  window.addEventListener("DOMContentLoaded", function(e) {

    var stage = document.getElementById("stage");
    var slideComplete = function(e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByTagName("a");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", slideComplete, false);
    }

  }, false);
