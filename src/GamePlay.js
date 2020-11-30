
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('background', 'assets/images/fondo.png');
        game.load.spritesheet('jdc', 'assets/images/jdc.png', 156.4, 157, 14);
        game.load.audio('sonido', 'assets/sounds/jdc.mp3');
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
        this.kirby = game.add.sprite(-200, 600, 'jdc');
        this.kirby.animations.add('walk', [0],2,true);
        this.kirby.animations.play("walk");

        sonido.play('', 0, 0.5, true);
        
    },
    update: function() {
        console.log("update");
        this.kirby.x += 2;
        if (this.kirby.x == 1190){
            this.kirby = game.add.sprite(-200, 600, 'jdc');
            this.kirby.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11,12,13],1,true);
            this.kirby.animations.play("walk");
        }

        
    }
}

var game = new Phaser.Game(1200, 720, Phaser.CANVAS);
var sonido;
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");