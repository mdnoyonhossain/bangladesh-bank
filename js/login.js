// Step-1: add click event handler with the submit button
document.getElementById('submit-btn').addEventListener('click', function () {
    // Step-2: get the email address inside the email input field
    // alwys remember to use .value to get text from an input field
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    /*
        Step-3: get password
        3.a: set id on the html element
        3.b: get the element
        3.c: get the value from the element
    */
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    // DANGER: DO NOT VERFY email password to the client side
    // Step-4: verfy email and password
    if (email === "noyonhossain560@gmail.com" && password === "noyonhossain560") {
        window.location.href = "bank.html";
    }
    else {
        alert("Invalid Your Information");
    }
});