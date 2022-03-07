async function fetchText() {
    let response = await fetch('word.txt');
    let data = await response.text();
    console.log(data);
