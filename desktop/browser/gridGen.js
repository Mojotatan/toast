function Slot(x, y) {
  this.x = x
  this.y = y
  this.color = 'white'
}

export function Grid(x, y) {
  this.width = x
  this.height = y
  this.slots = {}
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      this.slots[`${i}-${j}`] = new Slot(i, j)
    }
  }

  this.traverse = (slot, direction) => (
    this.slots[`${slot.x + direction.x}-${slot.y + direction.y}`]
  )

  this.getFloor = x => {
    let y = this.height - 1
    while (y >= 0) {
      if (this.slots[`${x}-${y}`].color === 'white') {
        return this.slots[`${x}-${y}`]
      } else y--
    }
    return null
  }

  this.getColumns = () => {
    let arr = []
    for (let i = 0; i < this.width; i++) {
      let col = []
      for (let j = 0; j < this.height; j++) {
        col.push(this.slots[`${i}-${j}`])
      }
      arr.push(col)
    }
    return arr
  }

  this.victoryCheck = () => {
    for (let j = 0; j < this.height; j++) {
      for (let i = 0; i < this.width - 3; i++) {
        let slot = this.slots[`${i}-${j}`]
        if (slot.color !== 'white' &&
        slot.color === this.traverse(slot, {x: 1, y: 0}).color &&
        slot.color === this.traverse(slot, {x: 2, y: 0}).color &&
        slot.color === this.traverse(slot, {x: 3, y: 0}).color) {
          return slot.color
        }
      }
    }
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height - 3; j++) {
        let slot = this.slots[`${i}-${j}`]
        if (slot.color !== 'white' &&
        slot.color === this.traverse(slot, {x: 0, y: 1}).color &&
        slot.color === this.traverse(slot, {x: 0, y: 2}).color &&
        slot.color === this.traverse(slot, {x: 0, y: 3}).color) {
          return slot.color
        }
      }
    }
    for (let i = 0; i < this.width - 3; i++) {
      for (let j = 0; j < this.height - 3; j++) {
        let slot = this.slots[`${i}-${j}`]
        if (slot.color !== 'white' &&
        slot.color === this.traverse(slot, {x: 1, y: 1}).color &&
        slot.color === this.traverse(slot, {x: 2, y: 2}).color &&
        slot.color === this.traverse(slot, {x: 3, y: 3}).color) {
          return slot.color
        }
      }
    }
    for (let i = 0; i < this.width - 3; i++) {
      for (let j = 3; j < this.height; j++) {
        let slot = this.slots[`${i}-${j}`]
        if (slot.color !== 'white' &&
        slot.color === this.traverse(slot, {x: 1, y: -1}).color &&
        slot.color === this.traverse(slot, {x: 2, y: -2}).color &&
        slot.color === this.traverse(slot, {x: 3, y: -3}).color) {
          return slot.color
        }
      }
    }
    return null
  }
}