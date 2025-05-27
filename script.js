// Select all the span elements inside the h1 with class 'bouncing-letters'
document.querySelectorAll(".bouncing-letters > span")
    .forEach(function(element) {
        // Add mouseover event to each letter
        element.addEventListener("mouseover", function(e) {
            bounce(e.target);
        });
    });

// Function to add bounce animation class and remove it after 1 second
function bounce(letter) {
    if (!letter.classList.contains("bounce")) {
        letter.classList.add("bounce");
        setTimeout(function() {
            letter.classList.remove("bounce");
        }, 1000);
    }
}
