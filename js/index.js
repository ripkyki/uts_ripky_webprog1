let modal = document.getElementById("login-container");
let landingPage = document.getElementById("landingPage");
let content = document.getElementById("content");

function openModal() {
    modal.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
}

function openContent() {
    landingPage.classList.add("hidden")
    content.classList.remove("hidden")
}

function closeContent() {
    landingPage.classList.remove("hidden")
    content.classList.add("hidden")
}

function targetButton() {
    content.focus()
}