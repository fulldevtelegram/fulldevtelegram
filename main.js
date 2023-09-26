import { Player } from "./player.js";
import { InputHandler } from "./inputHandler.js";
import { Background } from "./background.js";
import {TopPipe, BottomPipe} from "./obstacle.js"






window.addEventListener('load', function name(params) {
    
    const canvas= document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width= 400;
    canvas.height= 800;
    

    class Game {
        constructor(width, height){
            
            this.gameOver= 1;
            this.resetGame=0;
            this.width = width;
            this.height= height;
            this.speed=1;
            this.background = new Background(this);
            this.player = new Player(this);
            this.input= new InputHandler(this);
            this.score=0;
            

            this.gameFrame = 0;
            this.pipes = [];
            this.pipeTimer = 0;
            this.pipeInterval = 1000;
            this.PipeSpeedTimer=0;
            this.PipeSpeedInterval=5000;
            this.PipespeedX=5;
        }
        update(deltaTime){
            
            
            this.background.update();

            
            this.player.update(this.input.keys);
            
          /*  if(this.gameFrame==300) this.gameFrame =0;
            else this.gameFrame++;*/
            
            
                if(this.pipeTimer> this.pipeInterval){
                 this.addPipes();
                 this.pipeTimer=0;
                 
                 
                }else this.pipeTimer+= deltaTime;

            

                

            this.pipes.forEach(pipe =>{
                pipe.update();
            });
        }

        draw(context){

            this.background.draw(context);

            this.player.draw(context);
            this.pipes.forEach(pipe => {
                if(pipe.x+pipe.width<0){
                    this.score= this.score + 0.5;
                    pipe.passed=true;
                    this.pipes.shift();
                    
                    
                }
                pipe.draw(context);
            });
            context.save();
            context.fillStyle = "white";
            context.font="30px sans-serif";
            context.fillText("score: "+this.score, 5, 45); 
            context.restore();
        }

        reset(){
            this.gameFrame = 0;
            this.pipes = [];
            this.pipeTimer = 0;
            this.pipeInterval = 1000;
            this.PipeSpeedTimer=0;
            this.PipeSpeedInterval=5000;
            this.PipespeedX=5; 
            this.gameOver= 1;
            this.resetGame=0;
            this.input.keys= [];
            this.score=0;
            this.player.reset();
            
        }


        
        addPipes(){
            
              let pipe= new TopPipe(this, this.PipespeedX)
                this.pipes.push(pipe);
                this.pipes.push(new BottomPipe(pipe));

            
        }





    }

    const game = new Game(canvas.width, canvas.height);
    
    let lastTime=0;
    
    function animate(timeStamp) {
        
            let deltaTime= timeStamp-lastTime;
            lastTime=timeStamp
            
            ctx.clearRect(0,0,canvas.width,canvas.height);

            game.update(deltaTime);
            game.draw(ctx);
            if(game.gameOver==0) requestAnimationFrame(animate);
            if(game.resetGame== 1) {
                game.reset();
                requestAnimationFrame(animate);
            }


    }

    window.addEventListener('touchstart', e =>{
        game.input.touchY = e.changedTouches[0].pageY;
    });
    window.addEventListener('touchmove', e =>{
        const swipeDistance = e.changedTouches[0].pageY - game.input.touchY;
        if(game.gameOver==1){
        if(swipeDistance < -game.input.touchTreshold ){
            game.gameOver=0;
            animate(0);
        } }
    });
    window.addEventListener('touchend', e =>{
       
    });
    animate(0);

    
});

