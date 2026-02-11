function FartoCen() {
    let f = document.forms["tempForm"]["fahrenheit"].value;
    let c = (f - 32) * 5 / 9;

    document.getElementById('out5').innerHTML = f + "°F is " + c.toFixed(2) + "°C";
}

function CentoFar() {
    let c = document.forms["tempForm"]["celsius"].value;
    let f = (c * 9 / 5) + 32;
    document.getElementById('out5').innerHTML = c + "°C is " + f.toFixed(2) + "°F";
}