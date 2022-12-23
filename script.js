async function run() {
    joke = getJoke()
    outputJoke(joke)
}
async function getJoke () {
    //get Joke
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b70b3eebe7mshb6ccde910a70443p1413b6jsnaa296c327351',
            'X-RapidAPI-Host': 'joke110.p.rapidapi.com'
        }
    };

    const resp = await fetch('https://joke110.p.rapidapi.com/random_joke', options)
    const record = await resp.json()

    document.getElementById("setup").innerHTML = record.setup
    document.getElementById("punchline").innerHTML = record.punchline
}
async function outputJoke (record) {
    const revealButton = document.getElementById("button");
    const refreshButton = document.getElementById("refresh");
    const punchLine = document.getElementById("punchline");
    //shows punchline
    button.addEventListener('click', function () {
        punchLine.style.display = 'block';
    });
    //hides reveal button
    revealButton.addEventListener('click', function () {
        revealButton.style.display = 'none';
    });
    //event click for refresh button
    refreshButton.addEventListener('click', function () {
        window.location.reload();
    });

}
run();

//TODO: IMPROVE VISUAL