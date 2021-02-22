class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide()
    textSize(12)
    text("GAME IS STARTING", 200,200)
    Player.getPlayerInfo()
    if (allplayers!==undefined){
      var displayPosition=100;
      for(var plr in allplayers){
        if (plr==='player'+player.index)
        fill('blue')
        else
        fill('black')
      }
      displayPosition+=20;
      textSize(32)
      text(allplayers[plr].name + ':' + allplayers[plr].distance,150,displayPosition)
    }
     if (keyIsDown (UP_ARROW)&& player.index!==null){
      player.distance+=50;
      player.update()
     }
}}