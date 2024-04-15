const case1 = document.getElementById("#1")
const case2 = document.getElementById("#2")
const case3 = document.getElementById("#3")
const case4 = document.getElementById("#4")
const case5 = document.getElementById("#5")
const case6 = document.getElementById("#6")
const case7 = document.getElementById("#7")
const case8 = document.getElementById("#8")
const case9 = document.getElementById("#9")
const case10 = document.getElementById("#10")
const case11 = document.getElementById("#11")
const case12 = document.getElementById("#12")
const case13 = document.getElementById("#13")
const case14 = document.getElementById("#14")
const case15 = document.getElementById("#15")

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateUniqueNumbers(quantity, min, max) {
    const uniqueNumbers = new Set();

    while (uniqueNumbers.size < quantity) {
        const randomNumber = getRandomInt(min, max);
        uniqueNumbers.add(randomNumber);
    }

    return Array.from(uniqueNumbers);
}

function fillCasesWithRandomNumbers() {
    const min = 1;
    const max = 25;
    const quantidade = 15;

    const caseElements = Array.from({ length: quantidade }, (_, index) => document.getElementById(`#${index + 1}`));

    const uniqueNumbers = generateUniqueNumbers(quantidade, min, max);

    caseElements.forEach((caseElement, index) => {
        const randomNumber = uniqueNumbers[index];
        caseElement.textContent = randomNumber;
    });
}

// Chamando a função quando o botão é clicado
document.querySelector('.btn').addEventListener('click', fillCasesWithRandomNumbers);