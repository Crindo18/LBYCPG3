function computeSum() {
    const integers = [5, 10, 15, 20, 25, 30];
    let sum = 0;

    for (let i = 0; i < integers.length; i++) {
        sum += integers[i];
    }

    document.getElementById('out1').innerHTML = "The sum of [" + integers + "] is: <strong>" + sum + "</strong>";
}