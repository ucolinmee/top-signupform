var password = document.querySelector("#password");
var cfmPassword = document.querySelector("#cfm-password");
var message = document.querySelector(".unmatched");
var submitButton = document.querySelector("button");

submitButton.addEventListener("click", (e) => {
    if (password.value !== cfmPassword.value) {
        message.classList.remove("hidden");
    }
    else {
        message.classList.add("hidden");
    }
})