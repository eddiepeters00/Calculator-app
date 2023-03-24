import { evaluate } from 'mathjs';

const displayedNumber = document.getElementById('number') as HTMLHeadingElement;
document.querySelectorAll('.inputs button').forEach(input => {
    input.addEventListener('click', () => {
        const userInput = input.textContent as string;
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
    })
})

const evaluateEquation = (): string => {
    try {
        return displayedNumber.innerText = evaluate(displayedNumber.innerText);
    }
    catch (e) {
        console.warn(`${displayedNumber.innerText} is an invalid equation due to ${e}`);
        return displayedNumber.innerText = 'NaN';
    }
}


//Background image
const imgUrl = new URL('../images/wall.jpg', import.meta.url);
document.body.style.background = `url(${imgUrl.href}) no-repeat center`;
document.body.style.backgroundSize = 'cover';