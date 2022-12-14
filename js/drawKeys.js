import { alphabet } from "./alphabet.js";
import { clickKey } from "./clickKey.js";

const keysContainer = document.getElementById('letters');

export const drawKeys = () => {

    let keysHtml = ``;

    alphabet.forEach(letter => {


        keysHtml += `<div class="key" id="key${letter}" data-letter="${letter}">${letter}</div>`;

    });

    keysContainer.innerHTML = keysHtml;

    alphabet.forEach(letter => {
        document.getElementById(`key${letter}`).addEventListener('click', clickKey);
    });

}