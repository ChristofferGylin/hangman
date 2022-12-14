import { gameParams } from "./gameParams.js";
import { imgLookup } from "./imgLookup.js";

export const clickKey = (e) => {

    if (!gameParams.gameOn) return;

    e.currentTarget.removeEventListener('click', clickKey);

    const matches = [];
    const wordUpper = gameParams.word.toUpperCase();
    const letter = e.currentTarget.dataset.letter;

    for (let i = 0; i < gameParams.word.length; i++) {

        if (letter === wordUpper[i]) {

            matches.push(i);

        }

    }

    if (matches.length === 0) {

        e.currentTarget.classList.add('wrong-letter');
        gameParams.wrongGuesses++;
        document.getElementById('imgContainer').style.backgroundImage = `url(${imgLookup[gameParams.wrongGuesses]})`;

        if (gameParams.wrongGuesses === gameParams.maxGuesses) {

            document.getElementById('heading').innerHTML = 'You loose, Billy-Bob is no more.';
            gameParams.gameOn = false;

        }

    } else {

        e.currentTarget.classList.add('right-letter');


        for (let i = 0; i < matches.length; i++) {

            gameParams.guessedLetters[matches[i]] = letter;
            document.getElementById(`guessLetter-${matches[i]}`).innerHTML = letter;

        }

        let guessedWord = ``;

        for (let i = 0; i < gameParams.guessedLetters.length; i++) {
            guessedWord += gameParams.guessedLetters[i];

        }

        if (guessedWord === wordUpper) {
            document.getElementById('heading').innerHTML = 'You win, you saved Billy-Bob!'
            gameParams.gameOn = false;
        }

    }

}