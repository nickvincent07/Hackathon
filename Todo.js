var counter = 0; 
var pressedEnter = false;
var table = document.getElementById("mainTable");
document.onkeypress = function (e) {
    var keyCode = e.keyCode;
    if(keyCode == 13) {
        pressedEnter = true;
        itemCreation()
    }
};
function itemCreation () {
    var userInput = document.getElementById("newItem").value;
    var form = document.getElementById("mainForm");
    var items = document.getElementsByClassName("text");

    if(userInput.length <= 4 && pressedEnter == false) {
            alert("Whoa, let's be a little more specific yeah?");
            form.reset();
            console.log(userInput.length);
    } else if(userInput.length > 4 && counter < 11) {
        var BTN = document.createElement("BUTTON");
        var REMOVE = document.createElement("BUTTON");
        var I = document.createElement("i");
        REMOVE.id = counter;
        REMOVE.className = "btn btn-warning float-right";
        I.className = "fa fa-trash";
        BTN.id = counter;
        BTN.className = "list-group-item list-group-item-action text";
        BTN.innerHTML = userInput;

        table.appendChild(BTN);
        BTN.appendChild(REMOVE); 
        REMOVE.appendChild(I);
        counter++; 
        console.log(counter);

        form.reset();
    } else {
        alert("Lets focus on our most important planned todo's at the moment!");
        form.reset();
    }

    //check-off function
    REMOVE.addEventListener("click", function() {
        this.style.visibility = "hidden";
        BTN.style.textDecoration = "line-through";
    })
} 

function itemDeletion() {
    var elements = document.getElementsByClassName("text");
    for(var i = 0; i < elements.length; i++) {
        if(elements[i].style.textDecoration === "line-through"){
            elements[i].outerHTML = "";
            delete elements[i];
            counter--;
        }
    }
}




