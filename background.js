class Layer{
    constructor(game,width,height,speedModifier,image){
        this.game = game;
        this.width = width;
        this.height = height;
        this.speedModifier = speedModifier;
        this.image = image;
        this.x = 0;
        this.y = 0;

    }

    update(){
        if(this.x < -this.width) this.x=0;
        else this.x -= this.game.speed * this.speedModifier;
    }

    draw(context){
        context.drawImage(this.image,this.x, this.y);
        context.drawImage(this.image,this.x + this.width, this.y);
    }

}


export class Background {
    constructor(game){
        this.game = game;
        this.width = 1024;
        this.height = this.game.height;
        this.layerImage = document.getElementById('background');
        this.layer1 = new Layer(this.game, this.width, this.height, 1, this.layerImage);
        this.backgroundLayers = [this.layer1];


    }

    update(){
        this.backgroundLayers.forEach(layer => {
            layer.update();
        });

    }
    draw(context){
        this.backgroundLayers.forEach(layer => {
            layer.draw(context);
        });

    }



}