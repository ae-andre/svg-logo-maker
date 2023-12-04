const {Circle, Triangle, Square} = require('./shapes.js')

describe("triangle", function(){
    test("render", function(){
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="10,200 290,200 150,0" fill="blue"/>');
    })
})

describe("square", function(){
    test("render", function(){
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect width="200" height="200" x="50px" fill="blue"/>');
    })
})

describe("circle", function(){
    test("render", function(){
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
    })
})
