var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6ccd7428-07d0-4aed-b620-7d1550419ead","723fe089-cc7e-4b71-b976-3690db9ae0ca","d1ff642e-b705-4e61-9095-059e2178180c"],"propsByKey":{"6ccd7428-07d0-4aed-b620-7d1550419ead":{"name":"retro_powerup_heart_1","sourceUrl":"assets/api/v1/animation-library/gamelab/TYdIIrFBMhvSaF09aD9YcAVj4Q1KENbF/category_retro/retro_powerup_heart.png","frameSize":{"x":352,"y":352},"frameCount":1,"looping":true,"frameDelay":2,"version":"TYdIIrFBMhvSaF09aD9YcAVj4Q1KENbF","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":352},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TYdIIrFBMhvSaF09aD9YcAVj4Q1KENbF/category_retro/retro_powerup_heart.png"},"723fe089-cc7e-4b71-b976-3690db9ae0ca":{"name":"retro_coin_1","sourceUrl":"assets/api/v1/animation-library/gamelab/yyMkmGM.lMnt0PF6R49LlyGX9vMPtDav/category_retro/retro_coin.png","frameSize":{"x":95,"y":113},"frameCount":1,"looping":true,"frameDelay":2,"version":"yyMkmGM.lMnt0PF6R49LlyGX9vMPtDav","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":95,"y":113},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yyMkmGM.lMnt0PF6R49LlyGX9vMPtDav/category_retro/retro_coin.png"},"d1ff642e-b705-4e61-9095-059e2178180c":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":41,"y":11},"frameCount":1,"looping":true,"frameDelay":12,"version":"VnV9b3yG9HdiW3q2SrLr0sCcL.e7Z4w1","loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":11},"rootRelativePath":"assets/d1ff642e-b705-4e61-9095-059e2178180c.png"}}};
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

//Crear primera fila de ladrillos
var box1=createSprite(25,75,50,50);
box1.setAnimation("retro_coin_1");
box1.scale=0.4;
var box2=createSprite(75,75,50,50);
box2.setAnimation("retro_coin_1");
box2.scale=0.4;
var box3=createSprite(125,75,50,50);
box3.setAnimation("retro_coin_1");
box3.scale=0.4;
var box4=createSprite(175,75,50,50);
box4.setAnimation("retro_coin_1");
box4.scale=0.4;
var box5=createSprite(225,75,50,50);
box5.setAnimation("retro_coin_1");
box5.scale=0.4;
var box6=createSprite(275,75,50,50);
box6.setAnimation("retro_coin_1");
box6.scale=0.4;
var box7=createSprite(325,75,50,50);
box7.setAnimation("retro_coin_1");
box7.scale=0.4;
var box8=createSprite(375,75,50,50);
box8.setAnimation("retro_coin_1");
box8.scale=0.4;

//Crear segunda fila de ladrillos
var box9=createSprite(25,125,50,50);
box9.setAnimation("retro_coin_1");
box9.scale=0.4;
var box10=createSprite(75,125,50,50);
box10.setAnimation("retro_coin_1");
box10.scale=0.4;
var box11=createSprite(125,125,50,50);
box11.setAnimation("retro_coin_1");
box11.scale=0.4;
var box12=createSprite(175,125,50,50);
box12.setAnimation("retro_coin_1");
box12.scale=0.4;
var box13=createSprite(225,125,50,50);
box13.setAnimation("retro_coin_1");
box13.scale=0.4;
var box14=createSprite(275,125,50,50);
box14.setAnimation("retro_coin_1");
box14.scale=0.4;
var box15=createSprite(325,125,50,50);
box15.setAnimation("retro_coin_1");
box15.scale=0.4;
var box16=createSprite(375,125,50,50);
box16.setAnimation("retro_coin_1");
box16.scale=0.4;

//Crear paleta
var Paddle=createSprite(200,350, 80,10);
Paddle.setAnimation("animation_1");
Paddle.scale=1.75;


//Crear pelota
var ball=createSprite(200, 250, 20,20);
ball.setAnimation("retro_powerup_heart_1");
ball.scale=0.10;

//Score
var score=0;

//Crear gameState
var gameState="serve";

function draw() {

//Agregar sonidos
if (ball.isTouching(box1) ||ball.isTouching(box2) ||ball.isTouching(box3) ||ball.isTouching(box4) ||ball.isTouching(box5) ||ball.isTouching(box6) ||ball.isTouching(box7) ||ball.isTouching(box8) ||ball.isTouching(box9) ||ball.isTouching(box10) ||ball.isTouching(box11) ||ball.isTouching(box12) ||ball.isTouching(box13) ||ball.isTouching(box14) ||ball.isTouching(box15) ||ball.isTouching(box16)) {
  playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
}
if (ball.isTouching(Paddle)) {
 playSound("assets/category_retro/retro_game_enemy_spawn_7.mp3", false);
    
}


//Color de fondo
background("black");

//Condicionales de los estados de juego
if (gameState=="serve") {

 textSize(18);
 fill("white");
 text("Bienvenido, presiona ENTER para comenzar", 20,200); 
}
if (gameState=="play") {
 
//Mover paleta con el mouse
Paddle.x=World.mouseX;

//GameState play a GameState end 
if (ball.isTouching(bottomEdge) || score==16) {
   gameState="end";
 }
  
 //Texto score
textSize(18);
stroke("black");
fill("white");
text("Puntuación: "+score, 270, 20); 
}
if (gameState=="end") {
 //Texto score
textSize(18);
stroke("black");
fill("white");
text("Puntuación: "+score, 270, 20); 

//Detener pelota
ball.velocityX=0;
ball.velocityY=0;

//Texto Fin del juego
textSize(18);
stroke("black");
fill("white");
text("Fin del juego",150,200);
}

//Hacer que los ladrillos desaparezcan
if (ball.isTouching(box1)) {
 score=score+1;
 box1.destroy();
}
if (ball.isTouching(box2)) {
 score=score+1;
 box2.destroy();
}
if (ball.isTouching(box3)) {
score=score+1;
 box3.destroy();
}
if (ball.isTouching(box4)) {
 score=score+1;
 box4.destroy();
}
if (ball.isTouching(box5)) {
 score=score+1;
 box5.destroy();
}
if (ball.isTouching(box6)) {
 score=score+1;
 box6.destroy();
}
if (ball.isTouching(box7)) {
 score=score+1;
 box7.destroy();
}
if (ball.isTouching(box8)) {
 score=score+1;
 box8.destroy();
}
if (ball.isTouching(box9)) {
 score=score+1;
 box9.destroy();
}
if (ball.isTouching(box10)) {
 score=score+1;
 box10.destroy();
}
if (ball.isTouching(box11)) {
 score=score+1;
 box11.destroy();
}
if (ball.isTouching(box12)) {
 score=score+1;
 box12.destroy();
}
if (ball.isTouching(box13)) {
 score=score+1;
 box13.destroy();
}
if (ball.isTouching(box14)) {
 score=score+1;
 box14.destroy();
}
if (ball.isTouching(box15)) {
 score=score+1;
 box15.destroy();
}
if (ball.isTouching(box16)) {
 score=score+1;
 box16.destroy();
}

//Al presionar enter la pelota se mueve
if (keyDown("ENTER")) {
  gameState="play";
  ball.velocityX=+8.75;
  ball.velocityY=+3;
  }

//Crear bordes
createEdgeSprites();

//Hacer que la pelota rebote con los bordes
ball.bounceOff(topEdge);
ball.bounceOff(leftEdge);
ball.bounceOff(rightEdge);
ball.bounceOff(Paddle);


  

    
  drawSprites();
  
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
