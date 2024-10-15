// Events

// alert("Alert");

// function welcomeUser(){
//     alert("alert call...");
// }

function changingStyle(element){
element.src = "https://www.shutterstock.com/image-illustration/modern-cars-studio-room-3d-260nw-735402217.jpg";
element.style.width = "400px";
element.style.borderRadius = "10px";
}

function returnStyleback(element){
    element.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBXDmaxLLYl-ovdP7I3EfViGaHKlc9iH3Fe-i1_0VmhGSROcWuTRiWprLgLz2NdLAJnE&usqp=CAU";
    element.style.width = "200px";
    element.style.borderRadius = "10px";
}

console.log(document.getElementById("link"));
console.log(document.getElementsByClassName("para"));

var headingElement = document.getElementById("head")
console.log(headingElement);


var anchorElement = document.getElementById("link")
anchorElement.href = "https://www.google.com";
console.log(anchorElement);


// function login(){

//     var emailElement = document.getElementById("email");
//     var passwordElement = document.getElementById("password");
//     if(emailElement.value === "" || passwordElement.value === ""){
//         alert("Field Missing");
//     } else {

//     console.log(emailElement.value);
//     console.log(passwordElement.value);
// }
// }

function login(){

    var emailElement = document.getElementById("email");
    var passwordElement = document.getElementById("password");
    if(emailElement.value.trim() && passwordElement.value.trim()){
        console.log(emailElement.value);
        console.log(passwordElement.value);
    } else {
    alert("Field Missing");
    
}
    emailElement.value = "";
    passwordElement.value = "";

}


