// Write your JavaScript here
// Input:
// amount due
// amount tendered
// cents stored in an array
// dollars calculated first 
// output change in dollars, quarters, dimes, nickels, and pennies

// var cents = ["quarters", "dimes", "nickels", "pennies"];

function calculateChange(amountTendered, totalDue) {
    var totalDue = document.getElementById("totalDue").value;
    var amountTendered = document.getElementById("amountTendered").value;
        return amountTendered - totalDue;
}

function handleClickEvent(e) {
    var totalDue = document.getElementById("totalDue").value;
    var amountTendered = document.getElementById("amountTendered").value;
    var change = amountTendered - totalDue
    console.log(change);
    document.getElementById("calculate").innerHTML = "Change Due: ";
    
    var coins = change - Math.floor(change)
    console.log(coins);
    
    var dollars = Math.floor(change);
    document.getElementById("dollars").innerHTML = "Dollars: " + dollars;
    
    var cents = coins * 100
    console.log(cents);

// quarters change
    var quarters = Math.floor(cents/25);
    cents = cents - (quarters * 25);
    document.getElementById("quarters").innerHTML = "Quarters: " + quarters;
// dimes change
    var dimes = Math.floor(cents/10);
    cents = cents - (dimes * 10);
    document.getElementById("dimes").innerHTML = "Dimes: " + dimes;
// nickels change
    var nickels = Math.floor(cents/05);
    cents = cents - (nickels * 05);
    document.getElementById("nickels").innerHTML = "Nickels: " + nickels;
// pennies change
    var pennies = Math.round(cents/1);
    console.log(pennies);
    cents = cents - (pennies * 1)
    document.getElementById("pennies").innerHTML = "Pennies: " + pennies;
}