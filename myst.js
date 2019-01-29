  var rn = document.querySelectorAll(".rune");
  var i = 0;
  var wtf = rn.length;
  


  
  // Code for Chrome, Safari and Opera
  rn.addEventListener("webkitAnimationIteration", flash);

  // Standard syntax
  rn.addEventListener("animationiteration", flash);   
  
function flash() {
    this.style.color = "#FFFFFF";
    
  }
  
  function idonteven(){
    document.getElementByID("boop").innerHTML = "what the hell " + "wtf";
  }
