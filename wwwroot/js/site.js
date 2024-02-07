// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


document.getElementById("quoteForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    var hours = parseFloat($("#hours").val())
    if (hours <= 0 || isNaN(hours)) { // make sure that the response is a positive number
        alert("Please enter a positive number for the number of hours.");
        return;
    }

    var rate = 1000 // unchangeable rate

    var totalRate = hours * rate

    $("#output").html("Total Cost: $" + totalRate.toFixed(2)) // output to the html page
})


