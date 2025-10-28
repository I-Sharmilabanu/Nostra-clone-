var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("close-nav");

menuicon.addEventListener("click", function () {
    sidenav.style.left = "0";
});
closenav.addEventListener("click", function () {
    sidenav.style.left = "-50%";
});

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("textarea").value.trim();

    let usernameError = document.getElementById("usernameError");
    let emailError = document.getElementById("emailError");
    let textareaError = document.getElementById("textareaError");

    usernameError.textContent = "";
    emailError.textContent = "";
    textareaError.textContent = "";

    let isValid = true;

    if (username === "") {
        usernameError.textContent = "Please enter your name";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Please enter your email";
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    }

    if (message === "") {
        textareaError.textContent = "Message cannot be empty";
        isValid = false;
    } else if (message.length > 50) {
        textareaError.textContent = "Message should not exceed 50 characters";
        isValid = false;
    }

    if (isValid) {
        alert("Message submitted successfully!");
        document.getElementById("form").reset();
    }
});
