(function(){
    var canvas = document.getElementById("canvas-demo");
    var ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "rgba(255,0,0,.5)"
    ctx.fillRect(10, 10, 75, 75)

    ctx.fillStyle = "rgba(0,255,0,.5)"
    ctx.beginPath();
    ctx.arc(70, 70, 40, 0, 2 * Math.PI)
    ctx.fill();
    
    ctx.fillStyle = "rgba(0,0,255,.5)"
    ctx.beginPath();
    ctx.moveTo(90, 60);
    ctx.lineTo(30,130);
    ctx.lineTo(150,130);
    ctx.fill();
})();