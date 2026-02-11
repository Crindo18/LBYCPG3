function oddEvenLoop() {
    let outputHTML = "";

    for (let i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            outputHTML += i + " is even<br>";
        } else {
            outputHTML += i + " is odd<br>";
        }
    }

    document.getElementById('out3').innerHTML = outputHTML;
}