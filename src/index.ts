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
  set set_x(new_x: number) {
    this.x = new_x
  }
  set set_y(new_y: number) {
    this.y = new_y
  }
}

let cannon = new Cannon()

let invader1 = new Image()
invader1.src = 'invader1-small.png'

let invader2 = new Image()
invader2.src = 'invader2-small.png'

let invader3 = new Image()
invader3.src = 'invader3-small.png'

let shield = new Image()
shield.src = 'shield-small.png'

let ufo = new Image()
ufo.src = 'ufo-small.png'

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      cannon.set_x = cannon.x - 10
      break
    case 'ArrowRight':
      cannon.set_x = cannon.x + 10
      break
    case ' ':
      break
  }
})

function render() {
  if (ctx === null) {
    throw new Error('canvas context is null')
  }
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  cannon.draw(ctx)
  requestAnimationFrame(render)
}
render()
