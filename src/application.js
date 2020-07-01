(() => {

    let gameSelector = new GameSelector(CustomGameListArray);

    gameSelector.renderSelectMenu();
    
    gameSelector.loadGame(window.location.hash.replace('#', ''));

    document.getElementById(gameSelector.selectGameButtonId).onclick = () => {
        gameSelector.loadGame(
            document.getElementById('games-menu').value
        );
    };
})()