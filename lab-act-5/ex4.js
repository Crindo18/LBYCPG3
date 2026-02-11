function multiplyBy() {
    let n1 = document.forms["calcForm"]["num1"].value;
    let n2 = document.forms["calcForm"]["num2"].value;
    let res = n1 * n2;
    document.getElementById('out4').innerHTML = "Product: " + res;
}

function divideBy() {
    let n1 = document.forms["calcForm"]["num1"].value;
    let n2 = document.forms["calcForm"]["num2"].value;
    
    if (n2 == 0) {
        document.getElementById('out4').innerHTML = "Cannot divide by zero";
    } else {
        let res = n1 / n2;
        document.getElementById('out4').innerHTML = "Quotient: " + res;
    }
}