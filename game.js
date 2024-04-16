const platforming = new Image();
platforming.src = './pics/platform.png';

const backgroundimg = new Image();
backgroundimg.src = './pics/background.webp';

const pipenolabel = new Image();
pipenolabel.src = `./pics/pipenolabel.png`

const pipelabel = new Image();
pipelabel.src = './pics/pipewithlabel.png'

const stimg = new Image();
stimg.src = './pics/start.png'

const cloud = new Image();
cloud.src = './pics/cloud.png'

const spriteStandRight = new Image()
spriteStandRight.src = './pics/spriteStandRight.png'

const spriteStandLeft = new Image()
spriteStandLeft.src = './pics/spriteStandLeft.png'

const spriteRunRight = new Image()
spriteRunRight.src = './pics/spriteRunRight.png'

const spriteRunLeft = new Image()
spriteRunLeft.src = './pics/spriteRunLeft.png'

const canvas = document.querySelector('canvas')

const c  = canvas.getContext('2d')

canvas.height = 576
canvas.width = 900

let currentkey
const gravity = 1;
class Player{
  constructor(){
    this.position={
      x: 100,
      y: 100
    } 

    this.velocity={
      x:0,
      y:0
    }
    this.width = 37
    this.height = 75

    this.image = spriteStandRight
    this.frames = 58

    this.sprites = {
      stand:{
        right: spriteStandRight,
        left: spriteStandLeft,
        cropWidth: 177,
        width: 37
      },
      run:{
        right: spriteRunRight,
        left: spriteRunLeft,
        cropWidth: 341,
        width: 75
      }
    }

    this.currentsprit = this.sprites.stand.right
    this.currentCropwidth = 177
  }
  draw(){
    c.drawImage(
      this.currentsprit,
      this.currentCropwidth * this.frames,
      0,
      this.currentCropwidth,
      400,
      this.position.x,
      this.position.y,
      this.width,
      this.height 
    )
  }
  update(){
    this.frames++
    if (this.frames>59 && this.currentsprit === (this.sprites.stand.right || this.sprites.stand.left)){
      this.frames = 0
    }
    
    else if (this.frames>29 && (this.currentsprit === this.sprites.run.right|| this.currentsprit === this.sprites.run.left)){
      this.frames = 0
    }
    
    this.draw();

    // Update vertical position and velocity
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    // Apply gravity if player is not on the ground or on a platform
    let standingOnPlatform = false;
    platforms.forEach(platform => {
        if (this.position.x + this.width >= platform.position.x &&
            this.position.x <= platform.position.x + platform.width &&
            this.position.y + this.height >= platform.position.y &&
            this.position.y <= platform.position.y + platform.height) {
            standingOnPlatform = true;
            if (this.velocity.y > 0) { // Only adjust position if player is moving downwards
                this.velocity.y = 0; // Stop falling
                // this.position.y = platform.position.y - this.height; // Place player on top of the platform
            }
            // Check for collision with platform sides
          }
          if (this.position.y + this.height > platform.position.y && this.position.y < platform.position.y + platform.height) {
              // Player is colliding with the sides of the platform
              if (keys.down.pressed) { // Check if "s" key is pressed
                this.velocity.y = 0; // Stop downward movement
                this.position.y = platform.position.y - this.height; // Place player on top of the platform
            } else {
                standingOnPlatform = false;
                this.velocity.y = 10; // Move downwards
                this.velocity.x = 0;
            }
          }
    });
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
    } 
      
      
      if (!standingOnPlatform) {
        this.velocity.y += gravity;
      }
      else{
    this.position.y = Math.min(this.position.y, canvas.height - this.height);

  }

    // Check for collision with left and right canvas borders
    // if (this.position.x <= 0) {
    //     this.position.x = 5;
    // } else if (this.position.x + this.width >= canvas.width) {
    //     this.position.x = canvas.width - this.width;
    // }

    // Check for collision with top canvas border
    if (this.position.y <= 0 && this.velocity.y < 0) { // Only stop upward movement if moving upwards
        this.position.y = 0;
        this.velocity.y = 0; // Stop upward movement if hitting top border
    }

    
}



}

class Platform{
  constructor({x,y, image}){
    this.position = {
      x,
      y
    }
    this.width = 400
    this.height = 120
    this.image = image
  }
  
  draw(){

    c.drawImage(this.image, this.position.x, this.position.y,400,120 )
    // c.fillRect(this.position.x, this.position.y,this.width,this.height)
  }
}
class Pipe{
  constructor({x,y, image}){
    this.position = {
      x,
      y
    }
    this.width = 80
    this.height = 140
    this.image = image
  }
  
  draw(){

    // c.fillStyle = 'white'
    c.drawImage(this.image, this.position.x, this.position.y,80,140 )
    // c.fillRect(this.position.x, this.position.y,this.width,this.height)
  }
  
}

class Bigpipe{
  constructor({x,y, image}){
    this.position = {
      x,
      y
    }
    this.width = 80
    this.height = 210
    this.image = image
  }
  draw(){
    c.drawImage(this.image, this.position.x, this.position.y,80,210)

  }
}

class Genericobj{
  constructor({x,y, image}){
    this.position = {
      x,
      y
    }
    this.image = image
    this.width = image.width
    this.height = image.height
  }
  
  draw(){

    c.drawImage(this.image, this.position.x, this.position.y,1024,576 )
    // c.fillRect(this.position.x, this.position.y,this.width,this.height)
  }


}
class npcobj{
  constructor({x,y, image}){
    this.position = {
      x,
      y
    }
    this.image = image
    this.width = 300
    this.height = 300
  }
  
  draw(){

    c.drawImage(this.image, this.position.x, this.position.y,80,80 )
    // c.fillRect(this.position.x, this.position.y,this.width,this.height)
  }


}



let player = new Player()
let platforms = [new Platform({
  x:0,
  y:470,
  image: platforming
}), new Platform({
  x: 398, 
  y:470,
  image: platforming
}), new Platform({
  x: 398 * 2 + 250, 
  y:470,
  image: platforming
})]

let genericobj = [
  new Genericobj({
    x:0,
    y:0,
    image: backgroundimg
  })
]

let pipe = [new Pipe({
  x: 300,
  y: 330,
  image: pipenolabel
})]

let bigpip = [new Bigpipe({
  x: 640,
  y: 260,
  image: pipelabel
})]

let bgobj = [new npcobj({
  x: 10,
  y:410,
  image: stimg
}), new npcobj({
  x:460,
  y:80,
  image: cloud
})]

let scrolloffset = 0

function init() {
  
  player = new Player()
  platforms = [new Platform({
    x:0,
    y:470,
    image: platforming
  }), new Platform({
    x: 398, 
    y:470,
    image: platforming
  }), new Platform({
    x: 398 * 2 + 250, 
    y:470,
    image: platforming
  })]
  
  genericobj = [
    new Genericobj({
      x:0,
      y:0,
      image: backgroundimg
    }),]

  pipe = [new Pipe({
    x: 300,
    y: 330,
    image: pipenolabel
  })]

  bigpip = [new Bigpipe({
    x: 590,
    y: 260,
    image: pipelabel
  })]

  bgobj = [new npcobj({
    x: 10,
    y:410,
    image: stimg
  }), new npcobj({
    x:460,
    y:80,
    image: cloud
  })]
  
  scrolloffset = 0
}
const keys = {
  right:{
    pressed: false
  },
  left:{
    pressed: false
  },
  down:{
    pressed:false}
}

function animate(){
  requestAnimationFrame(animate)
  c.fillStyle = 'white'
  c.fillRect(0,0,canvas.width,canvas.height)
  genericobj.forEach(genericobjs=>{
    genericobjs.draw()
  })
  
  bgobj.forEach(str=>{
    str.draw()
  })
  platforms.forEach(platform=>{
    platform.draw()

 
  })


  player.update()

  pipe.forEach(pipeno=>{
    pipeno.draw()
  })

  bigpip.forEach(bigpep =>{
    bigpep.draw()
  })



  if(keys.right.pressed && player.position.x <  410){
    player.velocity.x = 10
  }
  else if(keys.left.pressed && player.position.x > 50 || keys.left.pressed && scrolloffset === 0 && player.position.x > 0){
    player.velocity.x = -10
  }
  else{
    player.velocity.x = 0

    if(keys.right.pressed){
      scrolloffset += 10
      platforms.forEach(platform=>{
        platform.position.x -= 10
      })
      pipe.forEach(pipeno=>{
        pipeno.position.x -= 10
      })
      bigpip.forEach(bigpep=>{
        bigpep.position.x -= 10
      })
      bgobj.forEach(bigobjs=>{
        bigobjs.position.x -= 10
      })
    }
    else if(keys.left.pressed && scrolloffset > 0){
      scrolloffset -= 10
      platforms.forEach(platform=>{
        platform.position.x += 10
      })
      pipe.forEach(pipeno=>{
        pipeno.position.x += 10
      })
      bigpip.forEach(bigpep=>{
        bigpep.position.x += 10
      })
      bgobj.forEach(bigobjs=>{
        bigobjs.position.x += 10
      })
    }
  }

// platform collision detection
  platforms.forEach(platform=>{
    if (player.position.y + player.height <= platform.position.y && 
      player.position.y + player.height + player.velocity.y >= platform.position.y && 
      player.position.x + player.width >= platform.position.x && 
      player.position.x <= platform.position.x + platform.width) 
      {
        player.velocity.y = 0;
      }
    
      if (player.position.x + player.width >= platform.position.x &&
          player.position.x <= platform.position.x + platform.width &&
          player.position.y + player.height >= platform.position.y &&
          player.position.y <= platform.position.y + platform.height) {
        // Player is standing on the platform
        player.velocity.x = 0; // Stop horizontal movement
      }
    })

    // pipe.forEach(pipe => {
    //   if (
    //     player.position.x + player.width >= pipe.position.x &&
    //     player.position.x <= pipe.position.x + pipe.width &&
    //     player.position.y + player.height >= pipe.position.y &&
    //     player.position.y <= pipe.position.y + pipe.height
    //   ) {
    //     if (player.velocity.x > 0) {
    //       // Moving right, adjust position to prevent collision
    //       player.position.x = pipe.position.x - player.width;
    //     } else if (player.velocity.x < 0) {
    //       // Moving left, adjust position to prevent collision
    //       player.position.x = pipe.position.x + pipe.width;
    //     }
    //   }
    // });

    let collidingWithPipe = false;
    pipe.forEach(pipe => {
      if (
        player.position.x + player.width >= pipe.position.x &&
        player.position.x <= pipe.position.x + pipe.width &&
        player.position.y + player.height >= pipe.position.y &&
        player.position.y <= pipe.position.y + pipe.height
      ) {
        collidingWithPipe = true;
        if(player.position.x + player.width == pipe.position.x){
          if (player.velocity.x > 0 && keys.right.pressed) {
                    // Moving right and colliding with pipe, stop horizontal movement
                    player.velocity.x = 0;
                  }
                  else if(player.velocity.x <0 && keys.left.pressed){
                    player.velocity.x -= 10;
                  }
        }
        
        else if (player.velocity.x < 0 && keys.left.pressed) 
        {
          // Moving left and colliding with pipe, stop horizontal movement
          player.velocity.x - 0;
        }
      }

      if (
        player.position.x + player.width >= pipe.position.x &&
        player.position.x <= pipe.position.x + pipe.width &&
        player.position.y + player.height >= pipe.position.y &&
        player.position.y <= pipe.position.y + pipe.height
      ) {
        collidingWithPipe = true;
        if (player.velocity.x > 0) {
          // Moving right and colliding with pipe, stop horizontal movement
          player.velocity.x = 0;
        }
      }

      if (
        player.position.y + player.height <= pipe.position.y && // Player's bottom edge is above or at the same level as the top edge of the pipe
        player.position.y + player.height + player.velocity.y >= pipe.position.y && // Player's bottom edge will intersect with or be above the top edge of the pipe after movement
        player.position.x + player.width >= pipe.position.x && // Player's right edge is to the right of the left edge of the pipe
        player.position.x <= pipe.position.x + pipe.width // Player's left edge is to the left of the right edge of the pipe
      ) {
        // Collision detected with the top of the pipe
        // Adjust player's position and velocity as necessary
        player.velocity.y = 0
      }
    });

    bigpip.forEach(pipe => {
      if (
        player.position.x + player.width >= pipe.position.x &&
        player.position.x <= pipe.position.x + pipe.width &&
        player.position.y + player.height >= pipe.position.y &&
        player.position.y <= pipe.position.y + pipe.height
      ) {
        collidingWithPipe = true;
        if(player.position.x + player.width == pipe.position.x){
          if (player.velocity.x > 0 && keys.right.pressed) {
                    // Moving right and colliding with pipe, stop horizontal movement
                    player.velocity.x = 0;
                  }
                  else if(player.velocity.x <0 && keys.left.pressed){
                    player.velocity.x -= 10;
                  }
        }
        
        else if (player.velocity.x < 0 && keys.left.pressed) 
        {
          // Moving left and colliding with pipe, stop horizontal movement
          player.velocity.x - 0;
        }
      }

      if (
        player.position.x + player.width >= pipe.position.x &&
        player.position.x <= pipe.position.x + pipe.width &&
        player.position.y + player.height >= pipe.position.y &&
        player.position.y <= pipe.position.y + pipe.height
      ) {
        collidingWithPipe = true;
        if (player.velocity.x > 0) {
          // Moving right and colliding with pipe, stop horizontal movement
          player.velocity.x = 0;
        }
      }

      if (
        player.position.y + player.height <= pipe.position.y && // Player's bottom edge is above or at the same level as the top edge of the pipe
        player.position.y + player.height + player.velocity.y >= pipe.position.y && // Player's bottom edge will intersect with or be above the top edge of the pipe after movement
        player.position.x + player.width >= pipe.position.x && // Player's right edge is to the right of the left edge of the pipe
        player.position.x <= pipe.position.x + pipe.width // Player's left edge is to the left of the right edge of the pipe
      ) {
        // Collision detected with the top of the pipe
        // Adjust player's position and velocity as necessary
        player.velocity.y = 0
      }
    });

//  pipe.forEach(pipe => {
//   // Check for collision with top of platform or pipe
//   if (
//     player.position.y + player.height <= pipe.position.y &&
//     player.position.y + player.height + player.velocity.y >= pipe.position.y &&
//     player.position.x + player.width >= pipe.position.x &&
//     player.position.x <= pipe.position.x + pipe.width
//   ) {
//     player.velocity.y = 0; // Stop falling
//     player.position.y = pipe.position.y - player.height; // Place player on top of the pipe
//   }

//   // Check for collision with sides of the pipe
//   if (
//     player.position.x + player.width >= pipe.position.x &&
//     player.position.x <= pipe.position.x + pipe.width &&
//     player.position.y + player.height >= pipe.position.y &&
//     player.position.y <= pipe.position.y + pipe.height
//   ) {
//     if (player.velocity.x > 0) {
//       // Moving right, adjust position to prevent collision
//       player.position.x = pipe.position.x - player.width;
//     } else if (player.velocity.x < 0) {
//       // Moving left, adjust position to prevent collision
//       player.position.x = pipe.position.x + pipe.width;
//     }
//   }
// });

  if(currentkey === 'right'){

  }

    if(scrolloffset == 1500){
      console.log('u win');
    }
    

    if(player.position.y > canvas.height) {
        console.log('u lose');
        init()
      }


}

animate()


addEventListener('keydown', (event)=>{
  switch (event.key) {
    case 'a':
    case 'A':
    case 'ArrowLeft':
      keys.left.pressed = true
      player.currentsprit = player.sprites.run.left
      player.currentCropwidth = player.sprites.run.cropWidth
      player.width = player.sprites.run.width
      break;
    case 'd':
    case 'D':
    case 'ArrowRight':
      // console.log('d');
      keys.right.pressed = true
      player.currentsprit = player.sprites.run.right
      player.currentCropwidth = player.sprites.run.cropWidth
      player.width = player.sprites.run.width
      break;
    case 's':
    case 'S':
    case 'ArrowDown':
      player.velocity.y += 15
      keys.down.pressed = true
      break;
    case 'w':
    case 'W':
    case ' ':
    case 'ArrowUp':
      player.velocity.y -= 15
      break;

    default:
      break;
  }
})
addEventListener('keyup', (event)=>{
  switch (event.key) {
    case 'a':
    case 'A':
    case 'ArrowLeft':
      keys.left.pressed = false
      player.currentsprit = player.sprites.stand.left
      player.currentCropwidth = player.sprites.stand.cropWidth
      player.width = player.sprites.stand.width
      break;
    case 'D':
    case 'd':
    case 'ArrowRight':
      // console.log('d');
      keys.right.pressed = false
      player.currentsprit = player.sprites.stand.right
      player.currentCropwidth = player.sprites.stand.cropWidth
      player.width = player.sprites.stand.width
      break;
    case 'w':
    case 'W':
    case ' ':
    case 'ArrowUp':
      console.log('w');
      player.velocity.y -= 0
      break;
    case 's':
    case 'S':
    case 'ArrowDown':
      console.log('s');
      keys.down.pressed = false
      player.velocity.y += 0
      break;
  
    default:
      break;
  }
})
