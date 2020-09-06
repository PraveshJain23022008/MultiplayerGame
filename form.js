class Form{
    constructor(){

    } 
    display(){
        var title = createElement("H2");
        title.html("car racing game");
        title.position(130,0);
        var input = createInput("name");
        var button = createButton("play");
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1;
            player.upgradeCount(playerCount);
            player.updateName(name);
            var greeting = createElement("H3");
            greeting.html("Welcome:"+name);
            greeting.position(130,160);
            
        })
        
    }
}