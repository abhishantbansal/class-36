class Form{
    constructor(){

    }
    display(){
       var title = createElement("h2");
       title.html("CAR RACING GAME");
       title.position(200,50);

       var input = createInput(" ");
        input.position(200,150);
       var button = createButton("PLAY");
        button.position(250,250);
        button.mousePressed(function(){
            title.hide();
            input.hide();
            button.hide();
            var name = input.value();
            var message = createElement("h3");
            message.html("HELLO "+name)
            message.position(200,150);
            
        });
    }
}