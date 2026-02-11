function rev_num() {
    let num = document.getElementById('revInput').value;
    
    let reversed = num.toString().split('').reverse().join('');
    
    document.getElementById('out6').innerHTML = "Reversed: " + reversed;
}