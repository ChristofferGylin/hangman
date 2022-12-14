import { drawGuess } from "./drawGuess.js";
import { drawKeys } from "./drawKeys.js";
import { gameParams } from './gameParams.js';
import { imgLookup } from "./imgLookup.js";
import { randomWord } from "./randomWord.js";

export const newGame = () => {

    gameParams.word = randomWord();
    gameParams.wrongGuesses = 0;
    gameParams.guessedLetters.length = 0;
    gameParams.rightGuesses.length = 0;
    gameParams.rightGuesses.length = gameParams.word.length;
    document.getElementById('heading').innerHTML = 'Guess the word or Billy-Bob gets it.';
    document.getElementById('imgContainer').style.backgroundImage = `url(${imgLookup[0]})`;
    drawGuess(gameParams.word);
    drawKeys();
    gameParams.gameOn = true;


}