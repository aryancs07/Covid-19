function validateFirstName() {
    var fname = document.getElementById("firstName").value;
    var re1 = /^[a-zA-Z\s\'\-]{3,15}$/;

    if (re1.test(fname)) {
        document.getElementById("firstNamePrompt").style.color = "green";
        document.getElementById("firstNamePrompt").innerHTML = "<strong>VALID</strong>"
        return true;

    }
    else {
        document.getElementById("firstNamePrompt").style.color = "red";
        document.getElementById("firstNamePrompt").innerHTML = "<strong>ENTER BETWEEN 3&15</strong>"
        return false;

    }

}
function validateLastName() {
    var lname = document.getElementById("lastName").value;
    var re2 = /^[a-zA-Z\s\'\-]{3,15}$/;


    if (re2.test(lname)) {
        document.getElementById("lastNamePrompt").style.color = "green";
        document.getElementById("lastNamePrompt").innerHTML = "<strong>VALID</strong>"
        return true;

    }
    else {
        document.getElementById("lastNamePrompt").style.color = "red";
        document.getElementById("lastNamePrompt").innerHTML = "<strong>ENTER BETWEEN 3&15</strong>"
        return false;

    }
}
function validatePhone() {
    var phoneno = document.getElementById("phone").value;
    var re3 = /^\d{3}-\d{3}-\d{4}$/;
    if (re3.test(phoneno)) {
        document.getElementById("phonePrompt").style.color = "green";
        document.getElementById("phonePrompt").innerHTML = "<strong>VALID</strong>"
        return true;

    }
    else {
        document.getElementById("phonePrompt").style.color = "red";
        document.getElementById("phonePrompt").innerHTML = "<strong>ENTER 10</strong>"
        return false;

    }
}
function calcOrder() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var userName = firstName + " " + lastName;
    var phone = document.getElementById("phone").value;
    var quantity = document.getElementById("quantity").value;
    var typeOfP = document.getElementById("typeof").value;
    document.getElementById("orderConfirm").innerHTML = "<h2>Your Pickup Details</h2>";
    document.getElementById("orderConfirm").innerHTML += "<p>" + userName.toUpperCase() + "<br>"+ phone + "</p>";
    document.getElementById("orderConfirm").innerHTML += "<p> Order: " + quantity + " "+typeOfP +"</p>";
}


function validatePassword() {
    var password = valueOf("password");
    var retype = valueOf("retype_password");

    if (password.length <= 6)
        return "Password should be at least 6 characters.\n";

    if (password != retype)
        return "Passwords do not match.\n";
    return "";
}
function validateEmail() {
    var email = valueOf("email");
    var retype = valueOf("retype_email");

    if (email.indexOf('@') == -1)
        return "Email should be a valid address.\n";

    if (email != retype)
        return "Email addresses do not match.\n";
    return "";
}
function validate() {
    var result = "";
    result += validateEmail();
    result += validatePassword();

    if (result == "") return true;

    alert("Validation Result:\n\n" + result);
    return false;
}
function validatePincode() {
    var pincode = document.getElementById("pincode").value;
    var re4 = /^\d{6}$/;
    if (re4.test(pincode)) {
        document.getElementById("pincodePrompt").style.color = "green";
        document.getElementById("pincodePrompt").innerHTML = "<strong>VALID</strong>"
        return true;

    }
    else {
        document.getElementById("pincodePrompt").style.color = "red";
        document.getElementById("pincodePrompt").innerHTML = "<strong>Enter valid Pin</strong>"
        return false;

    }
}
//code written by Aryan jain
