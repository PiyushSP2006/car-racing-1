class Form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton('play');
        this.greeting=createElement('h3');
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
    display(){
        var title=createElement('h2');
        title.html("CAR RACING GAME");
        title.position(130,0)
        
       
        this.input.position(570,160);
        this.button.position(590,300);

        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("HELLO "+player.name);
            this.greeting.position(130,160);

        });

    }
}