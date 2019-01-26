'use strict';

/**
 * `BootGame`
 * First Phaser scene, to preload all assets.
 */
class BootGame extends Phaser.Scene {
  constructor() {
    super('BootGame');

    window.EG = {
      art: [
        {id: 'carpet', x: 300, y: 400},
        {id: 'couch-base', x: 200, y: 400},
        {id: 'lamp-base-1', x: 300, y: 200},
        {id: 'lamp-shade', x: 400, y: 300},
        {id: 'painting-base', x: 500, y: 100},
        {id: 'painting', x: 600, y: 0},
        {id: 'plant-base', x: 700, y: 350},
        {id: 'pillow-1', x: 700, y: 350},
        {id: 'pillow-2', x: 0, y: 200},
        {id: 'pillow-couch-1', x: 100, y: 150},
        {id: 'pillow-couch-2', x: 200, y: 250},
        {id: 'plant-1', x: 300, y: 450},
        {id: 'plant-2', x: 400, y: 550},
        {id: 'table-base', x: 600, y: 500},
      ],
      rooms: [
        {
          description: 'first room',
          items: [
            {id: 'couch-base', x: 401, y: 423},
            {id: 'pillow-couch-1', x: 372, y: 439},
            {id: 'pillow-couch-2', x: 434, y: 440},
            {id: 'pillow-1', x: 372, y: 401},
            {id: 'pillow-2', x: 433, y: 401},

            {id: 'carpet', x: 402, y: 448},

            {id: 'painting-base', x: 74, y: 178},
            {id: 'painting', x: 80, y: 181},

            {id: 'plant-base', x: 700, y: 461},
            {id: 'plant-1', x: 706, y: 416},

            {id: 'table-base', x: 92, y: 407},
            {id: 'lamp-base-1', x: 112, y: 406},
            {id: 'lamp-shade', x: 114, y: 380},

          ],
        },
      ],
    };
  }

  // Phaser function to preload all assets.
  preload() {
    // Graphics.
    this.load.image('background', 'assets/background.png');
    this.load.spritesheet('stamps', 'assets/stamps.png', { frameWidth: 500, frameHeight: 100 });

    // Load all art graphics.
    window.EG.art.map(n => this.load.image(n.id, `assets/${n.id}.png`));

    // Audio.
    // todo: preload audio files.
  }

  // Phaser function, here used to activate the play button once the preload has completed its work.
  create() {
    document.getElementById('play-button').addEventListener('click', (e) => {
      e.preventDefault();

      // Hide the loading screen when the player clicks on the enabled Play button.
      document.getElementById('loading').style.display = 'none';

      // Display the canvas.
      document.querySelector('body > canvas').style.display = 'block';

      this.scene.start('PlayGame');
    });

    // Game has finished loading all assets, so it's possible to start playing.
    document.getElementById('play-button').disabled = false;
    document.getElementById('loading-animation').style.display = 'none';
  }
}

export default BootGame;
