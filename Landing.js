//Set clock timer
function startTime() {
    var today = new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML=
    h + ":" + m + ":" + s;
    var t =setTimeout(startTime, 500);
         
}
    function checkTime(i){
    if (i<10){i= "0" +i};
    return i;

}

//Rotate Ruotes
var myIndex = 0;
rotatequotes();

function rotatequotes() {
    var x = document.getElementsByClassName("words");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;

    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(rotatequotes, 8000);
} 

//Rotate pictures
var myIndex1 = 0;
rotatepictures()

function rotatepictures() {
    var x = document.getElementsByClassName("pictures");
    for (var j = 0; j < x.length; j++) {
        x[j].style.display = "none";  
    }
    myIndex1++;

    if (myIndex1 > x.length) {myIndex1 = 1}    
    x[myIndex1-1].style.display = "block";  
    setTimeout(rotatepictures, 8000);
}


    
