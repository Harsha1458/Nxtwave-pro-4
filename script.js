let bouncingLetters = document.getElementsByClassName('bouncing-letters');
let letters = bouncingLetters[0].getElementsByTagName('span');
for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener("mouseover", function(event) {
        bounce(event.target);
    });
}
function bounce(letter) {
    if (!letter.classList.contains("bounce")) {
        letter.classList.add("bounce");
        setTimeout(function() {
            letter.classList.remove("bounce");
        }, 1000);
    }
}
