  var alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var mana = ["#FF0000", "#00FF00", "#0000FF", "#FF00FF", "#FFFF00", "#00FFFF", "#6600CC", "#FF0077"];
  var crypt1;
  var crypt2;
  var crypt3;
  var crypt4;
  var timer = setInterval(sundial, 1300);
  var timer2 = setInterval(sundial2, 1800);
  var timer3 = setInterval(sundial3, 1200);
  var timer4 = setInterval(sundial4, 2400);
  var nila = document.getElementById("rune1");
  var asveste = document.getElementById("rune2");
  var kuro = document.getElementById("rune3");
  var kijani = document.getElementById("rune4");



function sundial() {
    crypt1 = alpha[Math.floor(Math.random() * alpha.length)];
  document.getElementById("rune1").innerHTML = "<a href='#first-gate'>" + crypt1 +"</a>";
}
function sundial2(){
      crypt2 = alpha[Math.floor(Math.random() * alpha.length)];
    document.getElementById("rune2").innerHTML = "<a href='#second-gate'>" + crypt2 +"</a>";
}
function sundial3(){
      crypt3 = alpha[Math.floor(Math.random() * alpha.length)];
    document.getElementById("rune3").innerHTML = "<a href='#third-gate'>" + crypt3 +"</a>";;
}
function sundial4(){
    crypt4 = alpha[Math.floor(Math.random() * alpha.length)];
    document.getElementById("rune4").innerHTML = "<a href='#fourth-gate'>" + crypt4 +"</a>";;  
}

function callOfTheAncients(){
  var pr = document.getElementById("fgpr").value;
  if(pr == "Futanari"){
    document.getElementById("wisdom").innerHTML = "<center>Function execution successful. Thank you for assisting in the creation of this profile.<br>  <button onclick="slumber()" class="herald">Close</button"></center>"
    document.getElementById("wisdom").style.opacity = "1.0";
    document.getElementById("wisdom").style.zIndex = "10";
  }
  else{
    document.getElementById("wisdom").innerHTML ="No such widsom"
    document.getElementById("wisdom").style.opacity = "1.0";
    document.getElementById("wisdom").style.zIndex = "10";
  }
}

function slumber(){
    document.getElementById("wisdom").style.opacity = "0.0";
    document.getElementById("wisdom").style.zIndex = "-1";
}

 function power(glyph){
   var sigil;
   if(glyph == 1){
     sigil = document.getElementById("rune1");
   }
   else if(glyph == 2){
     sigil = document.getElementById("rune2");
   }
   else if(glyph == 3){
     sigil = document.getElementById("rune3");
   }
   else if(glyph == 4){
     sigil = document.getElementById("rune4");
   }
shadow1 = mana[Math.floor(Math.random() * mana.length)];
shadow2 = mana[Math.floor(Math.random() * mana.length)];
shadow3 = mana[Math.floor(Math.random() * mana.length)];
shadow4 = mana[Math.floor(Math.random() * mana.length)];
shadow5 = mana[Math.floor(Math.random() * mana.length)];
  sigil.style.textShadow = "-1px 0px 0px #ffffff, 1px 0px 0px #ffffff, 0px -1px 0px #ffffff, 0px 1px 0px #ffffff, -20px 0px 100px " + shadow1 +", 20px 0px 100px " + shadow2 +", 0px 20px 100px " + shadow3  +", 0px -20px 100px " + shadow4  +", 20px 0px 100px " + shadow5;

   
   
 }

function inert(){
  document.getElementById("rune1").style.textShadow = "0 0 #FFFFFF";
  document.getElementById("rune2").style.textShadow = "0 0 #FFFFFF";
  document.getElementById("rune3").style.textShadow = "0 0 #FFFFFF";
  document.getElementById("rune4").style.textShadow = "0 0 #FFFFFF";
}
