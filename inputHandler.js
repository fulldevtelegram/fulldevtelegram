export class InputHandler{
    constructor(game){
        this.game = game;
        this.keys =[];
        this.touchY='';
        this.touchTreshold=30;
        

        window.addEventListener('touchstart',()=>{
            if(this.keys.length<10)  this.keys.push(1);
         });
        


    }

   

}