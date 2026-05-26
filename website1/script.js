$(document).ready(function(){
    $("#header1").load("header.html");
    $("#footer1").load("footer.html");
});
let totalPrice = 3599 + 4599 + 3999;

document.getElementById("amount").value =
"₹" + totalPrice;