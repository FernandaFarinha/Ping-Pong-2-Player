var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7289c002-eb17-49ba-b003-9bd8e31062bf"],"propsByKey":{"7289c002-eb17-49ba-b003-9bd8e31062bf":{"name":"tennisball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA/category_sports/tennisball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA/category_sports/tennisball.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var raquetePlayer = createSprite(390, 200, 10,100);
var raquetePlayer2 = createSprite(10, 200, 10,100);
var bolota = createSprite(200, 200,20,20);
bolota.setAnimation("tennisball_1");
bolota.scale=0.1

raquetePlayer.shapeColor="Blue";
raquetePlayer2.shapeColor="Red";
bolota.shapeColor="Purple"


createEdgeSprites();

var gameState = "Serve"

function draw() {
  background("white");
  drawSprites();
  

  
   if (gameState == "Serve")
{
    if (keyDown("space")) {
 bolota.velocityX=5;  
 bolota.velocityY=10;
 gameState="play"
 }
  textSize(17);
  
  text("Olá! Aperte Espaço para Começar.",50,150);
  
  textSize(17);
  
  text("A raquete azul se move com a setinhas.",30,250);
  
  textSize(17);
  
  text("A raquete vermelha se move com W S.",30,300);
}

if (gameState == "play"){
  
bolota.bounceOff(topEdge);
bolota.bounceOff(bottomEdge);
bolota.bounceOff(raquetePlayer);
bolota.bounceOff(raquetePlayer2);
  
  if (keyDown("up")) {
    raquetePlayer.y=raquetePlayer.y-10;
  }
  
  if (keyDown("down")) {
    raquetePlayer.y=raquetePlayer.y+10
  }
  if (keyDown("space")) {
    bolota.velocityX = -10;
    bolota.velocityY = -5;
  }
  if (keyDown("w")) {
    raquetePlayer2.y=raquetePlayer2.y-10;
  }
  if (keyDown("s")) {
    raquetePlayer2.y=raquetePlayer2.y+10
  }
  
 

for (var i = 0; i <=400; i=i+20) {
  line (200,i,200,i+10)
}

   if(bolota.isTouching(leftEdge)||(bolota.isTouching(rightEdge))){
  gameState="end"
}

if (gameState == "end")
{
   
 bolota.velocityX=0;  
 bolota.velocityY=0;
 for (var i = 0; i <=400; i=i+20) {
  line (200,i,200,i+10)
}
  



if (bolota.bounceOff(raquetePlayer2)) {
  playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_2.mp3", false);
}
 }
  } 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
