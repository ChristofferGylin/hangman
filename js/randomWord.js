import { words } from "./words.js"

export const randomWord = () => {
    const randomNumber = Math.floor(Math.random() * words.length)
    return words[randomNumber];
}