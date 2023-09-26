class Obstacle{
    constructor(){
        this.Timer=0;
        this.Interval=1000;
    }

    update(){


        this.x -= this.speedX
    }

    draw(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

}


export class TopPipe extends Obstacle{
    constructor(game, speedX){
        super();
        this.game = game;
        this.width = 64; //width/height ratio = 384/3072 = 1/8
        this.height = 512 ;
        this.x = this.game.width;
        this.openSpace = this.game.height/4;
        
        
        this.y = - Math.random()*(this.height);
        
        if(this.y<-342){ 
            
            this.y=-342}
        this.speedX = speedX;
        this.image = document.getElementById('topPipe');
        this.passed=false;
    }

    update(){
        super.update();
    }

    draw(context){
        super.draw(context);
    }

}

export class BottomPipe extends Obstacle{
    constructor(topPipe){
                super();
        this.topPipe = topPipe;
        this.width = 64; //width/height ratio = 384/3072 = 1/8
        this.height = 512;
        this.x = this.topPipe.x;
        this.openSpace = this.topPipe.openSpace;
        
        
        this.y = this.topPipe.y + this.height + this.openSpace;
        this.speedX = this.topPipe.speedX;
        this.image = document.getElementById('bottomPipe');
        this.passed=false;
    }

    update(){
        super.update();
    }

    draw(context){
        super.draw(context);
    }

}