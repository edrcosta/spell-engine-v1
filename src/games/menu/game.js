class GameMenu{
    
    game;

    constructor(id, name){
        this.game = new PixelGame(id, name, 100, 100);    
    }

    generateSprites(){

        sprites = {
            'teste1' : new PixelSprite('teste', 'lol', 10, 10),
            'teste1' : new PixelSprite('teste', 'lol', 10, 10),
        }
                        

        this.loadSprites(sprites)

    }

}