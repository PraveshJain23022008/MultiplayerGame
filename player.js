class Player{
    constructor(){
        
    }
    getCount(){
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value",function(data){
            playerCount = data.val();
        });
    }
    upgradeCount(Count){
        database.ref("/").update({
            playerCount:Count
        })
    }
    updateName(name){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name:name
        })
    }
    
}