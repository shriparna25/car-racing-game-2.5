class Form {
    constructor(){
    this.title = createElement('h1');
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    }

hide(){
    this.greeting.hide();
    this.input.hide(); 
    this.button.hide();
}  

    display(){
       
        this.title.html("Multiplayer Car Racing Game");
        this.title.position(width/2-120,150 );
        this.title.style('color',"white");
        this.title.style('font-size','50px');
        
        this.input.position(width/2-40, height/2-80);
        this.button.position(width/2+30, height/2);
        
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateplayerCount(playerCount);

           
            this.greeting.html("Hello "+ player.name );
            this.greeting.position(width/2-40, height/2);
            this.greeting.style('color',"white");
            this.greeting.style('font-size','45px');
        })
    }
}