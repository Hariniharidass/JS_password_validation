/**
 *
 * Write a isValidPassword function

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
function isValidPassword(uname, pass) {
    const whitespaceChars = [' ', '\t', '\n'];
    if (pass < 8) {
        return false;
    }
    else if (pass.includes(uname)) {
        return false;
    }
    else if (pass.some(char => pass.includes(char))) {
        return false;
    }
    else
        return true;

}
function validatePassword() {
    alert("here");
    console.log("hi")
    let validPassword = Boolean(false);
    let password = document.getElementById(password);
    let username = document.getElementById(username);
    console.log(password);
    console.log(username);
    console.log("---------");
    /*  validPassword = isValidPassword(password, username); */
    console.log(validPassword)
    return true;
}
