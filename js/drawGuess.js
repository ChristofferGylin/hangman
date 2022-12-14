export const drawGuess = (word) => {

    const guessElement = document.getElementById('guess');
    let guessHtml = ``;
    for (let i = 0; i < word.length; i++) {

        guessHtml += `<div class="guess-letter" id="guessLetter-${i}"></div>`;

    }

    guessElement.innerHTML = guessHtml;

}