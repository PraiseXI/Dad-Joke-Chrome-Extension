async function fetchJoke() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b70b3eebe7mshb6ccde910a70443p1413b6jsnaa296c327351',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };
    
    const resp = await fetch ('https://dad-jokes.p.rapidapi.com/random/joke', options)
    const record = await resp.json()

    document.getElementById("setup").innerHTML = record.body[0].setup
    document.getElementById("punchline").innerHTML = record.body[0].punchline
}
fetchJoke();