class SVG {
    // properties or methods
    constructor(shape, text) {
        this.shape = shape
        this.text = text
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape.render()}
        ${this.text.render()}
        </svg>
        `
    }
}



class Shape {
    constructor(color) {
        this.color = color
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}
class Triangle extends Shape {
    
    render() {
        return `<polygon points="10,200 290,200 150,0" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    
    render() {
        return `<rect width="200" height="200" x="50px" fill="${this.color}"/>`
    }
}

class Text {
    constructor(color, text) {
        this.color = color
        this.text = text
    }
    render() {
        return `
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        `
    }
}

module.exports = {SVG, Circle, Triangle, Square, Text}