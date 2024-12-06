// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

/* aashish */
function changeMain() {
    let current_main_text = document.getElementById("contact-page");
    current_main_text.innerHTML = "Thank you for your message";
}

document.getElementById("submit-button").addEventListener("click", changeMain);

document.getElementById("contact-page").style.fontSize = "24px";
