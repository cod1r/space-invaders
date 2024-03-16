let canvas = document.getElementById('cvs') as HTMLCanvasElement
let ctx = canvas.getContext('2d')
if (ctx === null) {
  throw new Error('canvas context is null')
}
canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Cannon {
  x = 0
  y = 0
  cannonImage
  constructor() {
    this.cannonImage = new Image()
    this.cannonImage.src = 'cannon-small.png'
    this.cannonImage.addEventListener('load', () => {
      this.x = window.innerWidth / 2 - this.cannonImage.naturalWidth / 2
      this.y = window.innerHeight * 0.8
    })
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(cannon.image, this.x, this.y)
  }
  get image() {
    return this.cannonImage
  }
}

class Invader1 {
  x = 0
  y = 0
  invader1Image
  constructor() {
    this.invader1Image = new Image()
    this.invader1Image.src = 'invader1-small.png'
    this.invader1Image.addEventListener('load', () => {
      this.x = canvas.width / 2
      this.y = canvas.height / 2
    })
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.invader1Image, this.x, this.y)
  }
}
class Invader2 {}
class Invader3 {}

let cannon = new Cannon()
let invader1 = new Invader1()

let invader2 = new Image()
invader2.src = 'invader2-small.png'

let invader3 = new Image()
invader3.src = 'invader3-small.png'

let shield = new Image()
shield.src = 'shield-small.png'

let ufo = new Image()
ufo.src = 'ufo-small.png'

class Bullet {
  x = 0
  y = 0
  constructor(dx: number, dy: number) {
    this.x = dx
    this.y = dy
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill()
    ctx.stroke()
  }
}
let bullet: Bullet | null = null

let pushLeft = false
let pushRight = false
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      pushLeft = true
      pushRight = false
      break
    case 'ArrowRight':
      pushRight = true
      pushLeft = false
      break
    case ' ':
      if (bullet === null) {
        bullet = new Bullet(cannon.x + cannon.image.naturalWidth / 2, cannon.y)
      }
      break
  }
})
document.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      pushLeft = false
      break
    case 'ArrowRight':
      pushRight = false
      break
  }
})

function render() {
  if (ctx === null) {
    throw new Error('canvas context is null')
  }
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  if (pushLeft) {
    cannon.x -= 10
  } else if (pushRight) {
    cannon.x += 10
  }
  invader1.draw(ctx)
  cannon.draw(ctx)
  if (bullet !== null) {
    bullet.draw(ctx)
    bullet.y -= 10
    if (bullet.y < 0) {
      bullet = null
    }
  }
  requestAnimationFrame(render)
}
render()
