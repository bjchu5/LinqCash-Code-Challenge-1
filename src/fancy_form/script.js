// Detect when user releases a key press
document.addEventListener("keyup", initialize);
        
// initialize the form, disable the button and enable it when all the fields are entered correctly.
function initialize(){
    if (document.getElementById("input-address").value.trim() != "" && document.getElementById("input-amount").value.trim() != "" && document.getElementById("input-otp").value.trim() != ""){
        // enable button
        btnEnable();
    }
    else{
        // disable button
        btnDisable();
    }
}
        
// enable the button by setting the attribute to the button with the id of "submit".
function btnEnable(){
    document.getElementById("submit").setAttribute("class", "btn purple waves-effect");
}
        
// disable the button by setting the attribute to the button with the id of "submit".
function btnDisable(){
    document.getElementById("submit").setAttribute("class", "btn purple waves-effect disabled");
}
  
// check if the user inputs for all the field are in correct format
function checkInput(){
    // regexCheck to check the bitcoin address and checkInputType to check if the amount and OTP are in number format.
    if (regexCheck() === true && checkInputType() === true){
        successfulTransaction();
    }
}


// check for the validity of the bitcoin address using regular expression .
function regexCheck(){
    var input = document.getElementById("input-address").value.trim();
    var regex = new RegExp("^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$");
    // test if the address pass the regex testing.
    if (regex.test(input)) {
        // matches the regex
        console.log("Successful");
        removeError();
        return true;

    } else {
        // failed the regex test.
        console.log("Invalid");
        // display error message when the regex test fails.
        displayError("input-address", "field1");
    }
}

// check if the amount and OTP are in number format
function checkInputType(){
    // get the user input amount value
    var input1 = document.getElementById("input-amount").value.trim();
    // get the user input OTP value
    var input2 = document.getElementById("input-otp").value.trim();
    
    // if they're not not-a-number, return true
    if (isNaN(input1) === false && isNaN(input2) === false){
        removeError();
        return true;
    }
    // if amount is not a number
    else if (isNaN(input1) === true){
        displayError("input-amount", "field2");
    }
    // if OTP is not a number
    else{
        displayError("input-otp", "field3");
    }
}


//  Display Error Message
function displayError(elementID, elementMsgID) {
    // disable the button upon submit failure
    btnDisable();
    // display a badge that is red in color
   // document.getElementById(elementMsgID).setAttribute("class", "new badge red left");
    if (elementMsgID === "field1"){
        document.getElementById(elementMsgID).innerHTML += "<span id='errorMsg'>Invalid bitcoin address. Please try again.</span>";
    }
    else{
        document.getElementById(elementMsgID).innerHTML += "<span id='errorMsg'>The input format is wrong. Please enter a number.</span>";
    }
    
    // Clear the input field with the id of "input-address"
    document.getElementById(elementID).value = "";
    // focus on the input field so that user can immediately get back to typing the correct address.
    document.getElementById(elementID).focus();
}

// remove the error message
function removeError(){
    // remove error message badge, if any.
    if (document.getElementById("errorMsg") != null){
        document.getElementById("errorMsg").remove();
    }
}

// if all the input fields passed the validation.
function successfulTransaction(){
    // Clear the input field with the id of "input-address"
    document.getElementById("input-address").value = "";
    // Clear the input field with the id of "input-amount"
    document.getElementById("input-amount").value = "";
    // Clear the input field with the id of "input-otp"
    document.getElementById("input-otp").value = "";
    // disable the submit button
    btnDisable();
    // navigate to success.html page
    window.location.href = "success.html";
}

