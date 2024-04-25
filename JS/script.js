//LOGIN, REGISTRATION COLOR CHANGE
function togglecolor() {
            
    //need to change logo also when clicking
    //also check with embeded backgorund-color
    document.getElementById("full-body").style.backgroundColor = "#aed6f1";
    var logoChange = document.getElementById("logo")
    logoChange.src = "../IMAGES/logo2.png";
}
//default color change
function togglecolor1() {
            
    //need to change logo also when clicking
    //also check with embeded backgorund-color
    document.getElementById("full-body").style.backgroundColor = "#252324";
    var logoChange = document.getElementById("logo")
    logoChange.src = "../IMAGES/logo1.png";
}
//changing the color when clicked
let heartClicked = false;
let plusClicked = false;

function ChangeColor() {
    const heartIcon = document.getElementById("heart");
    heartClicked = !heartClicked; // Toggle the clicked state

    if (heartClicked) {
        heartIcon.style.color = "green";
    } else {
        heartIcon.style.color = ""; // Reset to default color
    }
}

function Changecolor() {
    const plusIcon = document.getElementById("plus");
    plusClicked = !plusClicked; // Toggle the clicked state

    if (plusClicked) {
        plusIcon.style.color = "green";
    } else {
        plusIcon.style.color = ""; // Reset to default color
    }
}
//audio changing
