// Front-end javascript for food pick up page
// basic package display
let viewcontent = document.querySelector('#buttonVeggie');

let vegDis = document.getElementById('ct1');

viewcontent.addEventListener('click', vegDisplay);

function vegDisplay (){
if (vegDis.style.display === "none") {
    vegDis.style.display = "block";
} else {
    vegDis.style.display = "none";
}
};

// Vegetable package display
let viewcontent2 = document.querySelector('#buttonBasic');

let basicDis = document.getElementById('ct2'); 
viewcontent2.addEventListener('click', basicDisplay);

function basicDisplay () {
if (basicDis.style.display === "none") {
    basicDis.style.display = "block";
} else {
    basicDis.style.display = "none";
}
};

// Online order button functionality file path for page

let onlineOrder = document.querySelector('#orderButton');

onlineOrder.addEventListener('click', onlineChoice);
// when user
function onlineChoice () {
    location.href ="/onlineChoice";
};

// To show success submission message/ embedd this code below in your entrypoint

const form = document.querySelector("#formAccess");
form.addEventListener('submit', submitClick);


function submitClick () {
    // i want to add this message where the P id "successSubmit" is on he page
    document.addEventListener("#successSubmit");
    event.preventDefault();
    // 
}

// if (formAccess) {
//     formAccess.addEventListener('submit', formAccess);
// }








// ////////////////////////////////////////////////////////////////////////////
// Host ideas page
function thisFunction (){
let email = document.getElementById("email").value.indexOf('@');
submitOK = true;

if (email == -1) {
    alert("Not a valid e-mail!");
    submitOK = "false";
  }
}
// ////////////////////////////////////////////////////////////////////////////

// this section applies to when user clicks submit button on host ideas page and a pop-up screen will appear confirming submission.

// // Get the modal
// let modal = document.getElementById("myModal");

// // Get the button that opens the modal
// let btn = document.getElementById("clickPop");

// // Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



