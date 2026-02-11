function MobileNoValidation() {

    let mobile = document.forms["mobileForm"]["mobile"].value;
 
    let pattern = /^[0-9]{10,11}$/;
    let message = "";
    
    if (pattern.test(mobile)) {
        message = "Valid Mobile Number";
    } else {
        message = "Invalid Mobile Number (must be 10-11 digits)";
    }
  
    document.getElementById('out10').innerHTML = message;
}