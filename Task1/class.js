//      Day4
//      Task1
//      classes
// /**@Type {HTMLCanvasElement}**/

let canva = document.getElementById("cavna")
let ctx = canva.getContext("2d")
class polygon {
    constructor(side1, side2) {
        if (this.constructor == polygon) {
            throw 'Abstract Class'
        }
        this.side1 = side1
        this.side2 = side2

    }
}

class rectangle extends polygon {
    constructor(Rwidth, Rheight) {
        super(Rwidth, Rheight)
    }

    toString() {
        return ` Width = ${this.side1}, Height = ${this.side2},  Area of Rectangle = ${this.side1 * this.side2}`
    }
    draw() {
        ctx.beginPath()
        ctx.rect(20, 150, this.side1, this.side2)
        ctx.fillStyle = "brown"
        ctx.fill()
    }

}
let rectangle1 = new rectangle(100, 50);
rectangle1.draw()
console.log(rectangle1.toString());

class square extends rectangle {
    constructor(side) {
        super(side)
    }
    toString() {
        return ` Side = ${this.side1},  Area of Square = ${this.side1 * this.side1}`
    }

    draw() {
        ctx.beginPath()
        ctx.rect(140, 150, this.side1, this.side1)
        ctx.fillStyle = "pink";
        ctx.fill()
    }


}

let square1 = new square(80);
square1.draw()
console.log(square1.toString());


class triangle extends polygon {
    constructor(base, Theight) {
        super(base, Theight)
    }
    toString() {
        return ` Base = ${this.side1}, Height = ${this.side2},  Area of Triangle = ${(this.side1 * this.side2) * 0.5}`
    }
    draw() {
        ctx.beginPath()
        ctx.moveTo(240, 230)
        ctx.lineTo(340, 150)
        ctx.lineTo(340, 230)
        ctx.closePath()
        ctx.fillStyle = "orange"
        ctx.fill()
    }
}

let triangle1 = new triangle(100, 80);
triangle1.draw()
console.log(triangle1.toString());


class circle extends polygon {
    constructor(radius) {
        super(radius)
    }
    toString() {
        return `radius = ${this.side1}, Area of Circle = ${this.side1 * this.side1 * Math.PI}`
    }
    draw() {
        ctx.beginPath()
        ctx.arc(400, 180, this.side1, 0, 2 * Math.PI)  
        ctx.fillStyle = "purple"
        ctx.fill()
    }

}
let circle1 = new circle(50);
circle1.draw()
console.log(circle1.toString());