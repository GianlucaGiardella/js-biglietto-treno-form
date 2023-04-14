const ticket = document.querySelector(".ticket").classList;

// generator
function generate() {
    const pricePerKm = 0.21;
    const userName = document.getElementById("name").value;
    const distance = parseFloat(document.getElementById("km").value);
    const userAge = parseInt(document.getElementById("age").value);
    const fullPrice = (distance * pricePerKm).toFixed(2);
    const under18Price = (fullPrice * 0.6).toFixed(2);
    const over65Price = (fullPrice * 0.8).toFixed(2);

    if (userName != "" && !isNaN(distance) && !isNaN(userAge)) {
        // userName
        document.querySelector("#user_name").innerHTML = `${userName}`;

        // offer & ticket_price
        if (userAge < 18) {
            document.querySelector("#offer").innerHTML = `Biglietto Under18`
            document.querySelector("#ticket_price").innerHTML = `${under18Price}€`;
        } else if (userAge >= 65) {
            document.querySelector("#offer").innerHTML = `Biglietto Over65`
            document.querySelector("#ticket_price").innerHTML = `${over65Price}€`;
        } else {
            document.querySelector("#offer").innerHTML = `Biglietto Standard`
            document.querySelector("#ticket_price").innerHTML = `${fullPrice}€`;
        }

        // wagon
        document.querySelector("#wagon").innerHTML = Math.floor(Math.random() * 10) + 1;

        // code_cp
        document.querySelector("#code_cp").innerHTML = Math.floor(Math.random() * 100000) + 1;

        reset();
        ticket.add("show");
    }
};

// reset
function reset() {
    document.getElementById("name").value = "";
    document.getElementById("km").value = "";
    document.getElementById("age").value = "";
}

// cancel
function cancel() {
    ticket.remove("show");
    reset();
}

