//--------------------
//-----Basic Info-----
//--------------------

//Answers
var gender
var age
var time
var type
var anwsers
var finalGender
var finalAge
var finalTime
var finalType

//Gets the players basic info
function getInfo() {
    
	//Grabs the info from html elements
	var gender = document.getElementById("myGender");
	var age = document.getElementById("myAge");
	var time = document.getElementById("myTime");
	var type = document.getElementById("myType");
	finalGender = gender.options[gender.selectedIndex].text;
    	finalAge = age.options[age.selectedIndex].text;
	finalTime = time.options[time.selectedIndex].text;
	finalType = type.options[gender.selectedIndex].text;
		
	//Puts info into one variable
	anwsers = gender.options[gender.selectedIndex].text + " " +
	age.options[age.selectedIndex].text + " " +
	time.options[time.selectedIndex].text + " " +
	type.options[type.selectedIndex].text;

	//Stats running the game
	startGame()
	
	
	//Removes HTML elements
	var elem = document.getElementById('myForm2');
    elem.parentNode.removeChild(elem);
    return false;
	
};

//------------------
//-----The Game-----
//------------------

//Variables - Information
var firstPick = 1
var firstTime = 1
var firstTimeTotal = 1
var firstDeath = 1
var firstGroup = 1
var secondPick = 1
var secondTime = 1
var secondTimeTotal = 1
var secondDeath = 1
var secondGroup = 1
var thirdPick = 1
var thirdTime = 1
var thirdTimeTotal = 1
var thirdDeath = 1
var thirdGroup = 1


//Sends Data to Form
function sendData(){
	var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLScJth8ZVUExnjgNgSt4JUC4Gp4LFFKw51twZvkv-9xGTXfkOw/formResponse?'
	var finalGenderID = 'entry.1279542314'
	var finalAgeID = 'entry_29227208'
	var finalTimeID = 'entry_1996315103'
	var finalTypeID = 'entry_983967903'
	
	var firstPickID = 'entry_1834935472'
	var firstDeathID = 'entry_638738052'
	var firstTimeTotalID = 'entry_1409441374'
	var firstTimeID = 'entry_1456036417'
	
	var secondPickID = 'entry_1878459257'
	var secondDeathID = 'entry_1791191887'
	var secondTimeTotalID = 'entry_866474960'
	var secondTimeID = 'entry_1117728368'
	
	var thirdPickID = 'entry_1565981905'
	var thirdDeathID = 'entry_786338694'
	var thirdTimeTotalID = 'entry_1144423913'
	var thirdTimeID = 'entry_1525315882'
		
	var submitURL = (baseURL + finalGenderID  + '=' + finalGender + "&" + finalAgeID + '=' + finalAge + "&" + finalTimeID + '=' + finalTime + "&" + finalTypeID + '=' + finalType + "&" +
	
	firstPickID + '=' + firstPick + "&" + firstDeathID + '=' + firstDeath + "&" + firstTimeTotalID + '=' + firstTimeTotal + "&" + firstTimeID + '=' + firstTime + "&" +
	
	secondPickID + '=' + secondPick + "&" + secondDeathID + '=' + secondDeath + "&" + secondTimeTotalID + '=' + secondTimeTotal + "&" + secondTimeID + '=' + secondTime + "&" +
	
	thirdPickID + '=' + thirdPick + "&" + thirdDeathID + '=' + thirdDeath + "&" + thirdTimeTotalID + '=' + thirdTimeTotal + "&" + thirdTimeID + '=' + thirdTime
	
	);
	
	//console.log(submitURL);
	var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", submitURL);
    ifrm.setAttribute("style", "visibility:hidden")
    document.body.appendChild(ifrm);
	
	
	
}


//Create Game
function startGame(){
	game = new Phaser.Game(640, 480, Phaser.AUTO, 'gamePlay', { preload: preload, create: create, update: update, render: render} ); 
	
};

//Variables - Game play
var difficulty
var startText
var levelLayout
var player
var game
var tutON



//Loads in the games assets
function preload() {  
        //center game
		//game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		//game.scale.pageAlignHorizontally = true;
        //game.scale.pageAlignVertically = true;
		//game.stage.disableVisibilityChange = true;
        
		//load images
		game.load.image('player', 'assets/player.png');
		game.load.image('wall', 'assets/tile.png');
		game.load.image('coin', 'assets/coin.png');
		game.load.image('enemy', 'assets/lava.png');
		game.load.image('closedDoor', 'assets/closedDoor.png');
		game.load.image('openDoor', 'assets/openDoor.png');
		game.load.image('background', 'assets/backdrop2.png');
		game.load.image('slime', 'assets/slime.png');
		game.load.image('lavaHalf', 'assets/lavaHalf.png');
		
		
		//load tile maps
		game.load.tilemap("level", 'levels/level.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap("level-tut1", 'levels/level-tut1.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap("level-tut2", 'levels/level-tut2.json', null, Phaser.Tilemap.TILED_JSON);
		
		game.load.tilemap("level-med", 'levels/level-med.json', null, Phaser.Tilemap.TILED_JSON);
		
		game.load.tilemap("level-1", 'levels/level-1.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap("level-2", 'levels/level-2.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap("level-3", 'levels/level-3.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap("level-4", 'levels/level-4.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap("level-5", 'levels/level-5.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap("level-6", 'levels/level-6.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap("level-7", 'levels/level-7.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap("level-7.5", 'levels/level-7.5.json', null, Phaser.Tilemap.TILED_JSON);
		//load buttons
		game.load.spritesheet('btn_easy', 'assets/buttons/btn_easy.png',156,56);
		game.load.spritesheet('btn_norm', 'assets/buttons/btn_norm.png',156,56);
		game.load.spritesheet('btn_hard', 'assets/buttons/btn_hard.png',156,56);
		game.load.spritesheet('btn_easier', 'assets/buttons/btn_easier.png',156,56);
		game.load.spritesheet('btn_harder', 'assets/buttons/btn_harder.png',156,56);
		
		
};

//Variables
var startText
var levelLayout
var player
var enemy

var tutOn = false

//Create stage for first question
function create() {
	tutOn = true
	tutorial();
	
   
};


function tutorial() {
	//First Pick
	playingLevel = true
	var style = { font: "35px Arial", fill: "#ffffff", align: "center", boundsAlignH: "center",boundsAlignV: "middle"};
	var style2 = { font: "35px Arial", fill: "#ffffff", align: "center" };
	var Text = game.add.text(0, 0, "Use the left and right arrows\nto move and the up arrow to jump.\n\n Get to the exit as fast as you can.", style);
	var Text2 = game.add.text(525, 295, "EXIT", style2);
	Text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	Text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	Text.setTextBounds(0, 100, 640, 100);
	currentLevel = "level-tut1"
	levelLayout = [
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                  D ',
		'                    ',
		'                    ',
		'                    ',
	];
	spawnX = 64
	spawnY = 352
	deaths = 0
	time = 0
	coinNumber = 0
	createStage()

};

function tutorial2() {
	//First Pick
	playingLevel = true
	
	var style = { font: "35px Arial", fill: "#ffffff", align: "center", boundsAlignH: "center",boundsAlignV: "middle"};
	var Text = game.add.text(0, 0, "Collect all the coins to\nto open the door.\n\n You can't exit without getting\n all the coins.", style);
	var Text2 = game.add.text(525, 295, "EXIT", style);
	Text.setTextBounds(0, 100, 640, 100);
	Text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	Text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	currentLevel = "level-tut1"
	levelLayout = [
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'        oooo        ',
		'                  D ',
		'                    ',
		'                    ',
		'                    ',
	];
	spawnX = 64
	spawnY = 352
	deaths = 0
	time = 0
	timeTotal = 0
	coinNumber = 4
	createStage()

};

function tutorial3() {
	//First Pick
	playingLevel = true
	var style = { font: "35px Arial", fill: "#ffffff", align: "center", boundsAlignH: "center",boundsAlignV: "middle"};
	var style2 = { font: "35px Arial", fill: "#ffffff", align: "center" };
	var Text = game.add.text(0, 0, "Avoid touching lava and slimes.\n\nDoing so will kill you \nand restart the level.", style);
	var Text2 = game.add.text(525, 295, "EXIT", style);
	Text.setTextBounds(0, 100, 640, 100);
	Text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	Text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	currentLevel = "level-tut2"
	levelLayout = [
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'        oooo        ',
		'                  D ',
		'                    ',
		' xxxxX    s   Xxxxx ',
		'                    ',
	];
	spawnX = 64
	spawnY = 352
	deaths = 0
	time = 0
	timeTotal = 0
	coinNumber = 4
	createStage()

};

function tutorial4() {
	//First Pick
	playingLevel = true
	var style = { font: "35px Arial", fill: "#ffffff", align: "center" };
	var Text = game.add.text(85, 70, "Touching lava will kill you\nand send you back to the start", style);
	var Text2 = game.add.text(525, 295, "EXIT", style);
	Text.setTextBounds(0, 100, 640, 100);
	Text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	Text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	currentLevel = "level"
	levelLayout = [
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'   s  xx          D ',
		'                    ',
		'                    ',
		'                    ',
	];
	spawnX = 64
	spawnY = 352
	deaths = 0
	time = 0
	timeTotal = 0
	coinNumber = 0
	createStage()

};

//Gets the players first choice
function question1() {
	game.world.setBounds(0, 0, 640, 480);
    game.stage.backgroundColor = '#3598db';
	//background = game.add.tileSprite(0, 0, 640, 480, 'background');
	var style = { font: "35px Arial", fill: "#ffffff", align: "center" };

    startText = game.add.text(95, 70, "What level of difficulty would \nyou like to start with?", style);
	startText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	buttonEasy = game.add.button(45, 220, 'btn_easy', startEasy, this, 1, 2, 0);
	buttonMed = game.add.button(235, 220, 'btn_norm', startMed, this, 1, 2, 0);
	buttonHard = game.add.button(435, 220, 'btn_hard', startHard, this, 1, 2, 0);
};




//Gets the players second choice
function question2() {
	game.world.setBounds(0, 0, 640, 480);
    game.stage.backgroundColor = '#3598db';
	//background = game.add.tileSprite(0, 0, 640, 480, 'background');
	var style = { font: "35px Arial", fill: "#ffffff", align: "center" };

    startText = game.add.text(115, 70, "Would you like to play on a \nharder or easier level?", style);
	startText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	buttonEasy2 = game.add.button(125, 220, 'btn_easier', startSecondEasy, this, 1, 2, 0);
	buttonHard2 = game.add.button(355, 220, 'btn_harder', startSecondHard, this, 1, 2, 0);
};

//Gets the players third choice
function question3() {
	game.world.setBounds(0, 0, 640, 480);
    game.stage.backgroundColor = '#3598db';
	//background = game.add.tileSprite(0, 0, 640, 480, 'background');
	var style = { font: "35px Arial", fill: "#ffffff", align: "center" };

    startText = game.add.text(115, 70, "Would you like to play on a \nharder or easier level?", style);
	startText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	buttonEasy3 = game.add.button(125, 220, 'btn_easier', startThirdEasy, this, 1, 2, 0);
	buttonHard3 = game.add.button(355, 220, 'btn_harder', startThirdHard, this, 1, 2, 0);
};


//Removes the text and starts the first level
function removeTextStart(){
	game.world.remove(buttonEasy);
	game.world.remove(buttonMed);
	game.world.remove(buttonHard);
	game.world.remove(startText);
	game.stage.backgroundColor = '#3598db';
};


function endScreen(){
	game.stage.backgroundColor = '#3598db';
	game.world.setBounds(0, 0, 640, 480);
	//background = game.add.tileSprite(0, 0, 640, 480, 'background');
	var style = { font: "35px Arial", fill: "#ffffff", align: "center" };
	startText = game.add.text(130, 70, "Thank you for playing.", style);
	startText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	sendData();
	//download()
	//console.log(anwsers);
	//console.log(firstGroup);
	//console.log(secondGroup);
	//console.log(thirdGroup);
	
	
	
	

};

function download() {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('Thanks for taking part and playing my game.\r\nPlease email these results to GamesResearch2018@gmail.com' + '\r\n' +anwsers + '\r\n' + firstGroup + '\r\n' + secondGroup + '\r\n' + thirdGroup));
  element.setAttribute('download', 'Results');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}



//First choice
/* 3 */function startEasy() {
	//First Pick
	playingLevel = true
	firstPick = "Easy"
	difficulty = 3
	currentLevel = "level-3"
	removeTextStart()
	levelLayout = [
		'00000000000000000000',
		'00000000000000000000',
		'                    ',
		'            o     d ',
		'0   00000xx000000000',
		'0   0000000000000000',
		'                    ',
		'       o            ',
		'000000000xx0000     ',
		'000000000000000    0',
		'                    ',
		'            o       ',
		'000000000xx000000000',
		'00000000000000000000',
		'00000000000000000000',
	];
	spawnX = 64
	spawnY = 352
	deaths = 0
	time = 0
	timeTotal = 0
	coinNumber = 3
	createStage()
};


/* 4 */function startMed() {
	//First Pick
	playingLevel = true
	firstPick = "Normal"
	difficulty = 4
	currentLevel = "level-4"
	game.world.setBounds(0, 0, 800, 480);
	removeTextStart()
	levelLayout = [
		'0000000000000000000000000',
		'0000000000000000000000000',
		'0                       0',
		'0                 00000 0',
		'0o                      0',
		'00xxx0xxx0      00     00',
		'0000000000    0000  s o00',
		'0          o  00000000000',
		'0         00    000000000',
		'0         00            0',
		'0       000000         o0',
		'0d      00000000xxx0xxx00',
		'0000000000000000000000000',
		'0000000000000000000000000',
		'0000000000000000000000000',
	];
	spawnX = 64
	spawnY = 352
	deaths = 0
	time = 0
	timeTotal = 0
	coinNumber = 4
	createStage()

};



/* 5 */function startHard() {
	//First Pick
	game.world.setBounds(0, 0, 960, 480);
	playingLevel = true
	firstPick = "Hard"
	difficulty = 5
	currentLevel = "level-5"
	removeTextStart();
	levelLayout = [
		'000000000000000000000000000000',
		'000000000000000000000000000000',
		'000000000      000000000    o0',
		'00o0000xxx     0s000       000',
		'0000000    0               000',
		'0000000               00xxx000',
		'00000       o         00000000',
		'00000      000xxx000   0000000',
		'0      0xxx000000000   0000000',
		'0      0000           000    0',
		'0    000000           000   d0',
		'0    000o00  0000000       000',
		'00000000 00  0000000       000',
		'00000000    s   0000 o0s000000',
		'000000000000000000000000000000',
	];
	spawnX = 64
	spawnY = 352
	deaths = 0
	time = 0
	timeTotal = 0
	coinNumber = 5
	createStage();
};



//Second Choice
function startSecondHard(){
	removeBTN2();
	secondPick = "Harder"
	//++ difficulty
	difficulty++ 
	switch(difficulty) {
    case 4:
        level4();
        break;
    case 5:
        level5(); 
        break;
    case 6:
		level6()
	};
};
function startSecondEasy(){
	removeBTN2();
	secondPick = "Easier"
	//--difficulty
	difficulty--
	switch(difficulty) {
    case 2:
        level2();
        break;
    case 3:
        level3(); 
        break;
    case 4:
		level4();
	};
};


//thrid Choice
function startThirdHard(){
	removeBTN3();
	thirdPick = "Harder"
	//++ difficulty
	difficulty++ 
	//console.log(difficulty);
	switch(difficulty) {
	case 3:
        level3();
        break;	
    case 4:
        level4();
        break;
    case 5:
        level5(); 
        break;
    case 6:
		level6()  
		break;		
	case 7:
		level7() 
	};
};
function startThirdEasy(){
	removeBTN3();
	thirdPick = "Easier"
	//--difficulty
	difficulty--
	switch(difficulty) {
	case 1:
        level1();
        break;	
    case 2:
        level2();
        break;
    case 3:
        level3(); 
        break;
	case 4:
        level4();
        break;
    case 5:
		level5();
	};
};

function removeBTN2(){
	game.world.remove(buttonEasy2);
	game.world.remove(buttonHard2);	
} 
function removeBTN3(){
	game.world.remove(buttonEasy3);
	game.world.remove(buttonHard3);	
} 


//Variables
	var walls
	var door
	var coins
	var enemies
	var layer
	var player
	var cursor
	var deaths
	var coinsLeft
	var coinNumber
	var time = 0
	var timeTotal = 0
	var timer
	var timerTotal
	var spawnX
	var spawnY
	var gamePlaying = false
	var timerStart = false
	var door
	var tutDoor
	var currentLevel

//Creates Game
function createStage() {
	
	
	
	gamePlaying = true
	game.physics.startSystem(Phaser.Physics.ARCADE);
	cursor = game.input.keyboard.createCursorKeys();
	game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.RIGHT, Phaser.Keyboard.LEFT]);
	game.world.enableBody = true;
	
	game.stage.backgroundColor = '#3598db';
	//background = game.add.tileSprite(0, 0, 640, 480, 'background');
	
	timeTotal = 0
	timeX()
	coinsLeft = coinNumber
	buildLevel()
	
    map = game.add.tilemap(currentLevel);
    map.addTilesetImage("tileset01", "wall");
    map.setCollision(1);
    layer = map.createLayer("layer01");	

    player = game.add.sprite(spawnX, spawnY, "player");
    player.anchor.set(0.5, 0.5);
    game.physics.enable(player, Phaser.Physics.ARCADE);
    player.body.gravity.y = 600;
	
	game.camera.follow(player);
	game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
    style = 'STYLE_PLATFORMER';
	
	timerText = game.add.text(500, 450, '', { font: "18px Arial", fill: "#DAA520", align: "center" });
	deathText = game.add.text(4, 450, '', { font: "18px Arial", fill: "#DAA520", align: "center" });
	coinText = game.add.text(4, 430, '', { font: "18px Arial", fill: "#DAA520", align: "center" });
	
	
	
};



//times each level
function timeX(){
	
	if(timerStart == false){
		//  Create our Timer
		timer = game.time.create(false);

		//  Set a TimerEvent to occur after 1 seconds
		timer.loop(1000, updateCounter, this);
		
		timer.start();
		
		timerStart = true
		
		
		
	}
	
};
//timer tic
function updateCounter() {
    timeTotal++;
	time++;
};



function render(){
	//if(gamePlaying == true){
	//	game.debug.text('Deaths: ' + deaths, 4, 430);
	//}
};

//reads level layouts and renders them
var slimes 
function buildLevel(){
	
	enemies = game.add.group();
	coins = game.add.group();
	slimes = game.add.group();
	lavaHalfs = game.add.group();
	
	for (var i = 0; i < levelLayout.length; i++) {
		for (var j = 0; j < levelLayout[i].length; j++) {
			//Creates enemies
			if (levelLayout[i][j] == 'x') {
					var enemy = game.add.sprite(32*j, 32*i+6, 'enemy');
					enemies.add(enemy);
			}
			//Creates enemies
			if (levelLayout[i][j] == 'X') {
					var lavaHalf = game.add.sprite(32*j, 32*i+6, 'lavaHalf');
					game.physics.enable(lavaHalf, Phaser.Physics.ARCADE);
					lavaHalf.body.collideWorldBounds = true;
					lavaHalf.body.immovable = true;
					lavaHalfs.add(lavaHalf);
			}
			//Creates coins
			else if (levelLayout[i][j] == 'o') {
				var coin = game.add.sprite(32*j, 32*i, 'coin');
				coins.add(coin);
				
			}
			//places slimes
			else if (levelLayout[i][j] == 's') {
				slime = game.add.sprite(32*j, 32*i+23, 'slime');
				slime.anchor.set(0.5);
				game.physics.enable(slime, Phaser.Physics.ARCADE);
				slime.body.velocity.x = -50; 
				slimes.add(slime);
				//console.log(slime.body.velocity.x);
			}
			//places door
			else if (levelLayout[i][j] == 'd') {
				door = game.add.sprite(32*j, 32*i-32, 'closedDoor');
			}
			//places tutorial door
			else if (levelLayout[i][j] == 'D') {
				tutDoor = game.add.sprite(32*j, 32*i-32, 'closedDoor');
			}
		}
		
	}	
};
var enemySpeed
//slime movement
function enemyWall(slime){
	if(slime.scale.x == 1){
		slime.body.velocity.x = 50
		slime.scale.x = -1;
		enemySpeed = 50
	}else{
		slime.body.velocity.x = -50
		slime.scale.x = 1;
		enemySpeed = -50
	};
};


//counts remaining coins
function currentCoins() {
	if(playingLevel == true){
		if(coinsLeft == 0){
			if(tutOn == false){ 
			door.loadTexture('openDoor');
			game.physics.arcade.collide(player, door, finishLevel, null, this);
			}else{
			tutDoor.loadTexture('openDoor');
			game.physics.arcade.collide(player, tutDoor, tutFinishLevel, null, this);
			}
		}
		
	}
	
};
//Tracks player tutorial progress
var tutProgress = 0
//ends level
function tutFinishLevel(player, tutDoor) {
	tutProgress++
	if(tutProgress == 1){
		gamePlaying = false
		game.world.removeAll();
		tutorial2();
	}else if(tutProgress == 2) {
			
		gamePlaying = false
		game.world.removeAll();
		tutorial3();	
	}else if(tutProgress == 3){
		
		gamePlaying = false
		game.world.removeAll();
		tutOn = false
		question1();
	}
};

//Tracks player progress
var progress = 0
//ends level
function finishLevel(player, door) {
	progress++
	if(progress == 1){
		firstTime = time
		firstTimeTotal = timeTotal
		firstDeath = deaths
		firstGroup =  firstPick + " " + time  + " " + deaths + " " +  timeTotal;
		//console.log(firstTime);
		//console.log(firstDeath);
		//console.log(firstPick);	
		gamePlaying = false
		game.world.removeAll();
		question2();
	}else if(progress == 2) {
		secondTime = time
		secondTimeTotal = timeTotal
		secondDeath = deaths
		secondGroup =  secondPick + " " + time  + " " + deaths + " " + timeTotal;
		//console.log(secondTime);
		//console.log(secondDeath);
		//console.log(secondPick);	
		gamePlaying = false
		game.world.removeAll();
		question3();	
	}else if(progress == 3){
		thirdTime = time
		thirdTimeTotal = timeTotal
		thirdDeath = deaths
		thirdGroup =  thirdPick + " " + time  + " " + deaths + " " + timeTotal;
		gamePlaying = false
		game.world.removeAll();
		endScreen();
	}
};







function progressManager(){
	if(progress == 1){
		question2()
	}else if(progress == 2) {
		
	}else if(progess == 3){
		
	}
	
	
};





//Updates the game 60 times a second
function update() {
	//Checks the game has started playing
	if(gamePlaying == true){
		if(tutON == false){
			deathText.setText('Deaths: ' + deaths, 400, 32);
			coinText.setText('Coins Left: ' + coinsLeft, 400, 32);
			timerText.setText('Timer: ' + time, 400, 32);
		}
		
		//Collision detection
		//game.physics.arcade.collide(player, walls);
		game.physics.arcade.overlap(player, coins, takeCoin, null, this);
		game.physics.arcade.overlap(player, enemies, respawn, null, this);
		game.physics.arcade.overlap(player, slimes, respawn, null, this);
		game.physics.arcade.collide(player, lavaHalfs, null, null, this);
		if(player.body.onFloor == true){	
		respawn();
		
		}
		game.physics.arcade.collide(player, layer);
		
		//Movement
		inputs();
		jump();	
		//Level Complete
		currentCoins();
		//enemy movement
		game.physics.arcade.collide(slimes, layer, enemyWall, null, this);
		
	}
};

playerSpeed = 200
jumpHight = 290

playingLevel = false



//Movement
function inputs() {
		if (this.cursor.left.isDown || this.moveLeft) {
			player.body.velocity.x = -playerSpeed;
			player.scale.x = -1;
		}
		else if (this.cursor.right.isDown || this.moveRight) {
			player.body.velocity.x = playerSpeed;
			player.scale.x = 1;
		}
		else {
			player.body.velocity.x = 0;
		}		
		if (this.cursor.up.isDown && this.player.body.blocked.down) 
		player.body.velocity.y = -220;	

};
function jump() {
		if (this.cursor.up.isDown && this.player.body.blocked.down) 
		player.body.velocity.y = -jumpHight;	

};


//kills coin
function takeCoin(player, coin) {
	coinsLeft = (coinsLeft - 1)
	coin.kill();
};




function respawn(){
	game.world.removeAll()
	deaths = (deaths + 1)
	coinsLeft = coinNumber
	createStage()
	
}

function level1() {
	game.world.setBounds(0, 0, 640, 480);
	playingLevel = true
	difficulty = 1
	currentLevel = "level-1"
	removeTextStart();
	levelLayout = [
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'                    ',
		'             o      ',
		'        xxxx      d ',
		'                    ',
		'                    ',
		'                    ',
	];
	spawnX = 64
	spawnY = 352
	deaths = 0
	time = 0
	coinNumber = 1
	createStage();
};

function level2() {
	game.world.setBounds(0, 0, 640, 480);
	playingLevel = true
	difficulty = 2
	currentLevel = "level-2"
	removeTextStart();
	levelLayout = [
		'00000000000000000000',
		'00000000000000000000',
		'0                  0',
		'0                  0',
		'0                  0',
		'0                  0',
		'0                  0',
		'0o                o0',
		'00xx00        00xx00',
		'00000000    00000000',
		'0                  0',
		'0      000000     d0',
		'00000000000000000000',
		'00000000000000000000',
		'00000000000000000000',
	];
	spawnX = 64
	spawnY = 352
	deaths = 0
	time = 0
	coinNumber = 2
	createStage();
};

function level3() {
	game.world.setBounds(0, 0, 640, 480);
	playingLevel = true
	difficulty = 3
	currentLevel = "level-3"
	removeTextStart();
	levelLayout = [
		'00000000000000000000',
		'00000000000000000000',
		'0                  0',
		'0           o     d0',
		'0   0000xxxx00000000',
		'0   0000000000000000',
		'0                  0',
		'0      o           0',
		'00000000xxxx000    0',
		'000000000000000    0',
		'0                  0',
		'0           o      0',
		'00000000xxxx00000000',
		'00000000000000000000',
		'00000000000000000000',
	];
	spawnX = 64
	spawnY = 352
	deaths = 0
	time = 0
	coinNumber = 3
	createStage();
};

function level4() {
	game.world.setBounds(0, 0, 800, 480);
	playingLevel = true
	difficulty = 4
	currentLevel = "level-4"
	removeTextStart();
	levelLayout = [
		'0000000000000000000000000',
		'0000000000000000000000000',
		'0                       0',
		'0                 00000 0',
		'0o                      0',
		'00xxx0xxx0      00     00',
		'0000000000    0000  s o00',
		'0          o  00000000000',
		'0         00    000000000',
		'0         00            0',
		'0       000000         o0',
		'0d      00000000xxx0xxx00',
		'0000000000000000000000000',
		'0000000000000000000000000',
		'0000000000000000000000000',
	];
	spawnX = 64
	spawnY = 352
	deaths = 0
	time = 0
	coinNumber = 4
	createStage();
};

function level5() {
	game.world.setBounds(0, 0, 960, 480);
	playingLevel = true
	difficulty = 5
	currentLevel = "level-5"
	removeTextStart();
	levelLayout = [
		'000000000000000000000000000000',
		'000000000000000000000000000000',
		'000000000      000000000    o0',
		'00o0000xxx     0s000       000',
		'0000000    0               000',
		'0000000               00xxx000',
		'00000       o         00000000',
		'00000      000xxx000   0000000',
		'0      0xxx000000000   0000000',
		'0      0000           000    0',
		'0    000000           000   d0',
		'0    000o00  0000000       000',
		'00000000 00  0000000       000',
		'00000000    s   0000 o0s000000',
		'000000000000000000000000000000',
	];
	spawnX = 64
	spawnY = 300
	deaths = 0
	time = 0
	coinNumber = 5
	createStage();
	
	
	
	
};

function level6() {
	game.world.setBounds(0, 0, 960, 480);
	playingLevel = true
	difficulty = 6
	currentLevel = "level-6"
	removeTextStart();
	levelLayout = [
		'000000000000000000000000000000',
		'0              00o           0',
		'0               00000000     0',
		'0o s  0   0xx0               0',
		'0000000   0000             000',
		'0000000   00000     00xxx00000',
		'000000     00000    0000000000',
		'00000   d     0000           0',
		'0       0       00           0',
		'0               000xxx0xxx0  0',
		'0   o       o   00000000000  0',
		'0  000     000              00',
		'0  000  o  0000            000',
		'000000  0  0000 s   00 s  o000',
		'000000xx0xx0000000000000000000',
	];
	spawnX = 64
	spawnY = 384
	deaths = 0
	time = 0
	coinNumber = 6
	createStage();
};

function level7() {
	game.world.setBounds(0, 0, 1120, 480);
	playingLevel = true
	difficulty = 7
	currentLevel = "level-7"
	removeTextStart();
	levelLayout = [
		'00000000000000000000000000000000000',
		'0               00000             0',
		'0d       o       000             o0',
		'0000xxx000               0xxx0xxx00',
		'000000000     0      0   0000000000',
		'0000000       00o  s 00           0',
		'0000         0000000000000        0',
		'00      0    00000000000000       0',
		'00  o s00     0000       00xxx0   0',
		'000000000             o   000000  0',
		'0000000               0     00    0',
		'0           o    0    0     0    00',
		'0           0    0    00   00  0000',
		'0     s0    0    0    000  s   o  0',
		'00000000xxxx0xxxx0xxxx0000000000000',
	];
	spawnX = 64 
	spawnY = 384
	deaths = 0
	time = 0
	coinNumber = 7
	createStage();
};


















