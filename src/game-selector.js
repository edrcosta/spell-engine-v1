class GameSelector
{
    customGameList;
    selectMenuId = 'games-menu';
    selectGameButtonId = 'load-game';

    constructor(customGameList){
        this.customGameList = customGameList;
    }

    renderSelectMenu(){ 
        let gamesMenu = document.getElementById(this.selectMenuId);

        this.customGameList.forEach(game => {
            gamesMenu.innerHTML += `<option>${game.gameName}</option>`
        });
    }

    loadFile = (file) => {
        var js = document.createElement("script");

        js.type = "text/javascript";
        js.src = file;

        document.body.appendChild(js);
    }
    
    loadGame(gameName){
        if(gameName === 'no-game-selected') return false;
        
        this.customGameList.forEach((game) => {
            if(game.gameName === gameName){
                
                game.files.forEach((file) => { this.loadFile(file) });
                
                document.getElementById(this.selectGameButtonId).style.display = 'none';
                document.getElementById(this.selectMenuId).style.display = 'none';
            }
        });
    }
}