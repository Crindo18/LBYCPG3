function upper_case(str) {
    let regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        return "First character is UPPERCASE";
    } else {
        return "First character is NOT uppercase";
    }
}

function runUpperCase() {
    let str = document.getElementById('upperInput').value;
    let result = upper_case(str);
    
    document.getElementById('out8').innerHTML = result;
}