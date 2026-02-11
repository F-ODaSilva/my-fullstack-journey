// MATH CALCULATOR SYSTEM
/*
    Here we will create a system that allows the user to perform basic math operations.
    Instead of creating one function per operation, we will build a smart structure
    that reads what operation should be done directly from the HTML using data attributes.
    This makes the code cleaner, more professional, reusable, and easier to scale.
*/

// 1. Select all calculator blocks on the page
let calculators = document.querySelectorAll(".calc");

// 2. Loop through each calculator section
calculators.forEach(calc => {

    // 3. Add click event to the "=" button inside each calculator
    calc.querySelector("button").addEventListener("click", () => {

        // 4. Get the math operation written in HTML (data-op="add", "mul", etc.)
        // dataset allows JavaScript to read custom HTML attributes that start with data-
        let operation = calc.dataset.op;

        // 5. Get both number inputs inside this calculator block
        let inputs = calc.querySelectorAll("input");

        // 6. Convert input values from TEXT into NUMBERS
        // parseFloat is necessary because inputs always return strings
        let num1 = parseFloat(inputs[0].value);
        let num2 = parseFloat(inputs[1].value);

        let result;

        // 7. Validate numbers before calculating
        if (isNaN(num1) || isNaN(num2)) {
            result = "Enter valid numbers";
        } else {

            // 8. Decide which operation to execute
            if (operation === "add") result = num1 + num2;
            if (operation === "mul") result = num1 * num2;
            if (operation === "div") result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
            if (operation === "mod") result = num1 % num2;
        }

        // 9. Display result in the result div of that specific calculator
        calc.querySelector(".result").textContent = result;
    });
});


// CLEAR ALL SYSTEM
/*
    This section resets the calculator by clearing all inputs and results.
    This improves user experience and keeps the interface clean.
*/

// 10. Select the Clear All button
let clearBtn = document.getElementById("clearAll");

// 11. Add click event to clear everything
clearBtn.addEventListener("click", () => {

    // 12. Clear all number inputs
    document.querySelectorAll("input").forEach(input => input.value = "");

    // 13. Clear all results
    document.querySelectorAll(".result").forEach(res => res.textContent = "");
});
