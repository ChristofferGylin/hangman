export const getWord = async () => {
    const response = await fetch('https://random-word-api.herokuapp.com/word');

    if (response.ok) {

        const data = await response.json();
        console.log(data);
    }
}