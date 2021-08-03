class Form{
    constructor(){

    }
    display(){
        var title=createElement("h1");
        title.html("The Race");
        title.position(130,0);

        var input= createInput("name");
        var button= createButton("Let's Go!");
        input.position(130,160);
        button.position(250,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name=input.value();
            playerCount++;
            player.update(name);
            player.updateCount(playerCount);

            var greeting= createElement("h2");
            greeting.html("Hi "+name+" !");
            greeting.position(130,160);
        })
    
    }
}