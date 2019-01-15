(function(){
    var btnAdd = document.getElementById("addElement");
    var btnRemove = document.getElementById("removeElement");
    var canvas = document.getElementById("section1DemoContainer").childNodes[1];
    var log = document.getElementById("section1DemoContainer").childNodes[3];

    function SetLog(msg){
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        log.innerHTML = time + " - " + msg;
    }

    btnAdd.addEventListener("click", function(){
        //Add a new div element to the canvas
        var newDiv = document.createElement("div");
        canvas.appendChild(newDiv);
        
        //Update the log
        SetLog("Added a new element");
    });

    btnRemove.addEventListener("click", function(){
        if(canvas.hasChildNodes() && canvas.lastChild.tagName === "DIV"){
            canvas.lastChild.remove();
            SetLog("Removed the last element");
        }
        else{
            SetLog("No elements to remove!")
        }
    });
})();