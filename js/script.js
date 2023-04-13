const userName = document.querySelector("#name").value;
const distance = parseFloat(document.querySelector("#km").value);
const userAge = parseInt(document.querySelector("#age").value);
const pricePerKm = 0.21;

// generator event
function generate() {
    let fullPrice = (distance * pricePerKm).toFixed(2);
    let under18Price = (fullPrice * 0.6).toFixed(2);
    let over65Price = (fullPrice * 0.8).toFixed(2);

    if (userAge < 18) {
        console.log(under18Price);
    } else if (userAge >= 65) {
        console.log(over65Price);
    } else {
        console.log(fullPrice);
    }

    reset();
};

// reset
function reset() {
    document.querySelector("#name").value = "";
    document.querySelector("#km").value = "";
    document.querySelector("#age").value = "";
}


