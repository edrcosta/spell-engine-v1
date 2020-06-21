class GameSelector{
    loadFile = (file) => {
        var js = document.createElement("script");

        js.type = "text/javascript";
        js.src = file;

        document.body.appendChild(js);
    }
}



(() => {

    let gamesMenu = document.getElementById('games-menu');
    let loadGameBtn = document.getElementById('load-game');

    CustomGameListArray.forEach(game => {
        gamesMenu.innerHTML += `<option>${game.gameName}</option>`
    });

    loadGameBtn.onclick = () => {

        let gameSelector = new GameSelector();

        if(gamesMenu.value === 'no-game-selected') return false;
        
        CustomGameListArray.forEach((game) => {
            
            if(game.gameName !== gamesMenu.value){
                game.files.forEach((file) => {
                    gameSelector.loadFile(file)
                });
            }

            
        
        });
    };
})()