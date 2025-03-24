/**
 *
 *  isValidPassword function

It accepts 2 arguments: password and username

Password must:

- be atleast 8 characters

- cannot contain spaces

- cannot contain the username

If all requirements are met, return true,

otherwise return false
 *
 *
 */
function isValidPassword(pass, uname) {
    passwordLength = pass.length;
    if (passwordLength < 8) {
        console.log("Invalid - Password should be atleast 8 characters");
        return false;
    }
    else if (pass.includes(uname)) {
        console.log("Invalid - Password contains username");
        return false;
    }
    else if (pass.indexOf(' ') >= 0) {
        console.log("Invalid - Password contains whitespace");
        return false;
    }
    else
        console.log("Valid Password!!!");
    return true;
}
function validatePassword() {
    let validPassword = Boolean(false);
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;
    validPassword = isValidPassword(password, username);
    console.log("Is the password valid? - " + validPassword);
    return false;
}