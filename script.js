fetch("https://meme-api.herokuapp.com/gimme")
    .then(data => data.json())
    .then(memeData =>{
        const meme = memeData.url;
        const memeElement = document.getElementById('memeelement');
        memeelement.src = meme;
    })