var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["823faff5-1e16-4ceb-84cd-39e4bda760c7","5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8","251332b3-7aeb-40af-ac0f-1cceb3d1db5b","a8f36482-803d-4474-94a6-b14b425df10b","54c7b714-082d-432f-b761-58b3991e4165","ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7","9a0eefee-870e-4d21-be18-564e5d01a9cd"],"propsByKey":{"823faff5-1e16-4ceb-84cd-39e4bda760c7":{"name":"red","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"yPqf6MDkcf1UeKI8FqCX7.1cBoljwQC7","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/823faff5-1e16-4ceb-84cd-39e4bda760c7.png"},"5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8":{"name":"green","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"5lL8pLBFhgC81mHwctwNJqd3ta6UaGF_","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8.png"},"251332b3-7aeb-40af-ac0f-1cceb3d1db5b":{"name":"blue","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"wfoBhViJJCo.EY0it2adqXhpkw4N2PvH","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/251332b3-7aeb-40af-ac0f-1cceb3d1db5b.png"},"a8f36482-803d-4474-94a6-b14b425df10b":{"name":"yellow","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"rY5G.WYnlOdgwoDJhWqwCqXDf6UeRne_","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/a8f36482-803d-4474-94a6-b14b425df10b.png"},"54c7b714-082d-432f-b761-58b3991e4165":{"name":"arrow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ld.m0V7dmJJV47T35FxAiIJkOl1.Sh6P","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/54c7b714-082d-432f-b761-58b3991e4165.png"},"ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7":{"name":"bow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"9Lr2hFQfJy3tJfr.o.7lXwDDS0uZeEv2","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7.png"},"9a0eefee-870e-4d21-be18-564e5d01a9cd":{"name":"sunshine_showers","sourceUrl":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png"}}};
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

//create looping background
var background1 =createSprite(0,0,400,400);
  background1.setAnimation("sunshine_showers");
  background1.scale=2;

//create bow
var bow =createSprite(375,200,35,35);
  bow.setAnimation("bow");
  
var ArrowGroup = createGroup();
var RedBalloonGroup = createGroup();
var GreenBalloonGroup = createGroup();
var BlueBalloonGroup = createGroup();
var YellowBalloonGroup = createGroup(); 
  

//score 
var score = 0;
textSize(20);
fill("black");


function draw() {
//set background as white
background("white"); 

//make balloons appear

var rand = randomNumber(1,4);
if (World.frameCount%80===0) {
 if (rand===1){
redballoon()}
 else if (rand===2){
greenballoon()}
 else if (rand===3){
blueballoon()}
 else{
yellowballoon()}
}



//background  
background1.velocityX = -3; 

if(background1.x<0){
  background1.x=background1.width/2;  
}

//make bow follow the mouse
 bow.y=mouseY;


  
 if (keyDown("space")){ 
  createArrow();
  playSound("assets/category_slide/whoosh_4.mp3");
}



if(ArrowGroup.isTouching(RedBalloonGroup)){
RedBalloonGroup.destroyEach();
ArrowGroup.destroyEach();
score=score+1;}

else if(ArrowGroup.isTouching(GreenBalloonGroup)){
GreenBalloonGroup.destroyEach();
ArrowGroup.destroyEach();
score=score+2;}

else if(ArrowGroup.isTouching(BlueBalloonGroup)){
BlueBalloonGroup.destroyEach();
ArrowGroup.destroyEach();
score=score+3;}

if(ArrowGroup.isTouching(YellowBalloonGroup)){
YellowBalloonGroup.destroyEach();
ArrowGroup.destroyEach();
score=score+4;}  



drawSprites();

text("Score: " +score, 270,30);
}


function createArrow(){
var arrow=createSprite(360,200,50,3);
  arrow.setAnimation("arrow");
  arrow.velocityX=-9;
  playSound("assets/category_slide/whoosh_4.mp3");
  arrow.y=bow.y;
  arrow.lifetime=43;
  ArrowGroup.add(arrow);

}

//balloons
function redballoon(){
var red= createSprite(0,randomNumber(20,380),10,10) ;
red.setAnimation("red");
red.velocityX=3;
red.lifetime= 130;
RedBalloonGroup.add(red);
}

function greenballoon(){
var green= createSprite(0,randomNumber(20,380),10,10) ;
green.setAnimation("green");
green.velocityX=3;
green.lifetime=130;
GreenBalloonGroup.add(green);
  
}

function blueballoon(){
var blue= createSprite(0,randomNumber(20,380),10,10) ;
blue.setAnimation("blue");
blue.velocityX=3;
blue.lifetime=130;
BlueBalloonGroup.add(blue);
  
}

function yellowballoon(){
var yellow= createSprite(0,randomNumber(20,380),10,10) ;
yellow.setAnimation("yellow");
yellow.velocityX=3;
yellow.lifetime=130;
YellowBalloonGroup.add(yellow);
  
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
