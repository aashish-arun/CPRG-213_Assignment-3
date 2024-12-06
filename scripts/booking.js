/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

/* collins */
let rate = 35;
let selectedDays = new Set(); 
let isFullDay = true;

var dayButtons = document.querySelectorAll(".day-selector li");
var fullDayButton = document.getElementById("full");
var halfDayButton = document.getElementById("half");
var calculatedCostSpan = document.getElementById("calculated-cost");
var clearButton = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

/* collins */
for (var i = 0; i < dayButtons.length; i++) {
    dayButtons[i].addEventListener("click", function () {
        var day = this.id;

        if (this.classList.contains("clicked")) {
            this.classList.remove("clicked");
            selectedDays.delete(day);
        } else {
            this.classList.add("clicked");
            selectedDays.add(day);
        }

        calculateCost();
    });
}

fullDayButton.addEventListener("click", function () {
    if (!isFullDay) {
        isFullDay = true;
        fullDayButton.classList.add("clicked");
        halfDayButton.classList.remove("clicked");
        calculateCost();
    }
});

halfDayButton.addEventListener("click", function () {
    if (isFullDay) {
        isFullDay = false;
        halfDayButton.classList.add("clicked");
        fullDayButton.classList.remove("clicked");
        calculateCost();
    }
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

/* collins */

clearButton.addEventListener("click", function () {
    for (var i = 0; i < dayButtons.length; i++) {
        dayButtons[i].classList.remove("clicked");
    }

    selectedDays.clear(); // clreared the set
    calculatedCostSpan.textContent = 0;
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

/* shila */
halfDayButton.addEventListener("click", function () {
    rate = 20;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    calculateCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/* shila */
fullDayButton.addEventListener("click", function () {
    rate = 35;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    calculateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

/* shila */
function calculateCost() {
    const dailyRate = isFullDay ? 30 : 20;
    const totalCost = selectedDays.size * dailyRate;
    calculatedCostSpan.textContent = totalCost;
}