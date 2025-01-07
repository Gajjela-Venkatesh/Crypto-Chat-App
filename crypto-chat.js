let savedPassword = "";

function setPassword() {
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword === "" || confirmPassword === "") {
        alert("Password fields cannot be empty");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    savedPassword = newPassword;
    alert("Password set successfully!");
    document.getElementById("set-password-section").style.display = "none";
    document.getElementById("main-section").style.display = "block";
}

function encryptMessage() {
    const passwordInput = document.getElementById("password-input").value;
    const messageText = document.getElementById("message-text").value;

    if (passwordInput !== savedPassword) {
        alert("Invalid Password");
        return;
    }

    if (messageText === "") {
        alert("Please enter a message to encrypt");
        return;
    }

    const encodedMessage = btoa(messageText);
    document.getElementById("result-text").value = encodedMessage;
}

function decryptMessage() {
    const passwordInput = document.getElementById("password-input").value;
    const messageText = document.getElementById("message-text").value;

    if (passwordInput !== savedPassword) {
        alert("Invalid Password");
        return;
    }

    if (messageText === "") {
        alert("Please enter a message to decrypt");
        return;
    }

    try {
        const decodedMessage = atob(messageText);
        document.getElementById("result-text").value = decodedMessage;
    } catch (e) {
        alert("Invalid encoded message");
    }
}

function reset() {
    document.getElementById("password-input").value = "";
    document.getElementById("message-text").value = "";
    document.getElementById("result-text").value = "";
}

function copyToClipboard() {
    const resultText = document.getElementById("result-text");
    resultText.select();
    document.execCommand("copy");
    alert("Copied to clipboard");
}
