// Listen for button clicks and set priority
document.getElementById("highPriority").addEventListener("click", () => setPriority("High"));
document.getElementById("mediumPriority").addEventListener("click", () => setPriority("Medium"));
document.getElementById("lowPriority").addEventListener("click", () => setPriority("Low"));

function setPriority(priority) {
    window.TrelloPowerUp.iframe().set("card", "shared", "priority", priority)
    .then(() => window.TrelloPowerUp.iframe().closePopup());
}
