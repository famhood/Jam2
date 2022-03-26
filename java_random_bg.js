function random_bg_color() {
    var x = Math.floor(Math.random() * 10);
    var y = Math.floor(Math.random() * 10);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }
    
random_bg_color();
setInterval("random_bg_color()", 500);