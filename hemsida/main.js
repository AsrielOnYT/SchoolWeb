let all_buttons = document.querySelectorAll("button");
let number_code = [];

let valid_codes = {
    "1111": "no, not that one",
    "2222": "still no",
    "3333": "why? (hint: tetris)",
    "4444": "ok stop",
    "1234": "unsecure password",
    "8472": "why are you typing random numbers?",
    "7856": "CORRECT!!" // correct code
}

all_buttons.forEach(numpadButton => {
    numpadButton.addEventListener("click", buttonPressed)
});

function buttonPressed() {
    if ( !(this.value == "confirm" || this.value == "clear") && number_code.length < 4) {
        number_code.push(this.value);
        
        this.style.backgroundColor = "lime";

    } else if (this.value == "clear") {
        clearColors();

        let element = document.getElementById("correct_image");
        if (element) {
            element.remove();
        }

        document.getElementById("secret_message").textContent = "";

        number_code.length = 0;
    } else if (this.value == "confirm" && number_code.length == 4) {
        clearMessage();
        clearColors();
        validateCode();

        number_code.length = 0;
    };
};

function validateCode() {
    let enteredCode = ""
    for (let i = 0; i < number_code.length; i++) {
        enteredCode += number_code[i];
    }

    console.log(enteredCode);
    console.log(valid_codes[enteredCode]);

    if (valid_codes[enteredCode] != "CORRECT!!") {
        document.getElementById("secret_message").textContent = valid_codes[enteredCode];
        
    } else if (valid_codes[enteredCode] == "CORRECT!!" && !document.getElementById("correct_image")) {
        let image = document.createElement("img");
        image.id = "correct_image";
        image.src = "./correct_code.jpg";
        document.body.appendChild(image);
    }
}

function clearMessage() {
    document.getElementById("secret_message").textContent = ""

    let image = document.getElementById("correct_image")

    if (image) {
        image.remove();
    }
}

function clearColors() {
    all_buttons.forEach(numpadButton => {
        numpadButton.style.backgroundColor = "white";
    });
}