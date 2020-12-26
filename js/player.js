class Player {
    constructor(){
    this.index = null;
    this.distance = 0;
    this.name= null;
    }

    getplayerCount(){
        database.ref('playerCount').on("value",function(data){
          playerCount = data.val();
        })
      }
    
      updateplayerCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
    
      update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance : this.distance
        });
      }
      static getPlayerInfo(){
      database.ref('players').on("value",(data)=>{
        allPlayers = data.val();
      })
      }
    
}