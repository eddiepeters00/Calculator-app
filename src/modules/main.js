"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mathjs_1 = require("mathjs");
var displayedNumber = document.getElementById('number');
document.querySelectorAll('.inputs button').forEach(function (input) {
    input.addEventListener('click', function () {
        var userInput = input.textContent;
        switch (userInput) {
            case 'c':
                displayedNumber.innerText = '';
                break;
            case '<=':
                displayedNumber.innerText = displayedNumber.innerText.slice(0, -1);
                break;
            case '=':
                evaluateEquation();
                break;
            default:
                displayedNumber.innerText += userInput;
                break;
        }
    });
});
var evaluateEquation = function () {
    try {
        return displayedNumber.innerText = (0, mathjs_1.evaluate)(displayedNumber.innerText);
    }
    catch (e) {
        console.warn("".concat(displayedNumber.innerText, " is an invalid equation due to ").concat(e));
        return displayedNumber.innerText = 'NaN';
    }
};
//Background image
var imgUrl = new URL('../images/wall.jpg', import.meta.url);
document.body.style.background = "url(".concat(imgUrl.href, ") no-repeat center");
document.body.style.backgroundSize = 'cover';
