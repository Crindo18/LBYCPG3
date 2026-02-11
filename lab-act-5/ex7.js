function checkPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[\W_]/g, "");
    let revStr = cleanStr.split('').reverse().join('');
    return cleanStr === revStr;
}

function myFunction() {
    let str = document.getElementById('palInput').value;

    if (checkPalindrome(str)) {
        document.getElementById('out7').innerHTML = "The string <strong>" + str + "</strong> is a Palindrome.";
    } else {
        document.getElementById('out7').innerHTML = "The string <strong>" + str + "</strong> is NOT a Palindrome.";
    }
}