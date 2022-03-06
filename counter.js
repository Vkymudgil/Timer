

function startCount(){
    var counter = 5;
    document.getElementById("count").innerHTML = counter;
    document.getElementById("counttext").style.display = "block";
    document.getElementById("start").style.display ="none";
    setInterval(function(){
        counter--; 
        if(counter >= 0){
            id = document.getElementById("count");
            id.innerHTML = counter;
        } else{
            document.getElementById("count").innerHTML = "GO";
    document.getElementById("counttext").style.display = "none";
    document.getElementById("start").style.display ="block";
        }
    }, 1000);
    
    

    
}