class Game {
    constructor(){}

    getState(){
        var getState=database.ref("gameState");
        getState.on("value",function (data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
   async start() {
       if(gameState===0){
       player=new Player;
       var playerCountRef=await database.ref("PlayerCount").once("value");
       if(playerCountRef.exists()){
           playerCount=playerCountRef.val();
           player.getCount();
       }  
       
       form=new Form();
       form.display();
    }
    car1=creatSprite(100,200)
   }
}