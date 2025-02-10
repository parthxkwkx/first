const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

let yesSize = 18; // Initial font size

noButton.addEventListener("click", function() {
    yesSize += 10; // Increase font size
    yesButton.style.fontSize = yesSize + "px";
});

yesButton.addEventListener("click", function() {
    alert("Yay! You said YES! ❤🥳");
});