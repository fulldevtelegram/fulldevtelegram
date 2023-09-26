export class Player {
    constructor(game){
        this.score= document.getElementById('score');
        this.gameOverDiv=document.getElementById('endGame');
        this.canvas=document.getElementById('canvasContainer');
        this.game = game;
        this.height = 75 ;  //width/height = 175/413
        this.width= 31.77;
        this.frameX=0;
        this.frameToDisplay=0
        
        this.spriteWidth= 175;
        this.spriteHeight= 413;
        
        this.x= this.game.width/8;
        this.y=(this.game.height/2)-(this.height/2);
        this.previousY=(this.game.height/2)-(this.height/2)

        this.image= document.getElementById('player')

        this.playervelocity= 0;
        this.playerGravity= 0.3;


        

    }
    movePlayer(e) {

    }

    update(input){
      this.checkCollision();  
            
    if((this.game.gameOver==0))   {
               if(input.length>0){
                
                this.playervelocity = -6;
                input.shift()
               }
        
        this.playervelocity+=this.playerGravity
        this.previousY=this.y
        this.y = Math.max(this.y + this.playervelocity, 0);
        
        if(this.previousY>this.y){
            this.frameX=0;
            this.frameTimer=0;
        } 
        else this.frameX=2;}

     
        
    }

    draw(context){


 

        context.drawImage(this.image,(this.frameX) *  this.spriteWidth, 0, this.spriteWidth= 175,this.spriteHeight,this.x, this.y,this.width, this.width);
    }

    reset(){
        this.frameX=0;
        this.frameToDisplay=0
        this.x= this.game.width/8;
        this.y=(this.game.height/2)-(this.height/2);
        this.previousY=(this.game.height/2)-(this.height/2)

    }

checkCollision(){
    this.game.pipes.forEach(pipe => {
        if((pipe.x < this.x + this.width-5&&
           pipe.x + pipe.width > this.x-5&&
           pipe.y < this.y + this.height-50&&
           pipe.y + pipe.height > this.y -10) ||
           this.y-this.height > this.game.height
        ){
       this.game.gameOver=1;
       this.game.resetGame =1;
       this.score.innerText= "Score : "+ this.game.score;
       this.canvas.setAttribute('hidden','true');
       this.gameOverDiv.removeAttribute('hidden')     
        }else{

        }
    });

}
   

}
