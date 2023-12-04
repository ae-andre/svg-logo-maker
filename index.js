const inquirer = require('inquirer')
const {SVG, Circle, Triangle, Square, Text} = require('./lib/shapes.js')
const fs = require('fs')

inquirer.prompt([
    {
        type: "input",
        message: "Enter three text characters",
        name: "text"
    },
    {
        type: "input",
        message: "Enter text color",
        name: "textColor",
    },
    {
        type: "list",
        message: "Enter shape",
        name: "shape",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        message: "Enter shape color",
        name: "shapeColor",
    },
]
).then(answers => {
    let newShape;
    if (answers.shape == "circle") {
        newShape = new Circle (answers.shapeColor)
    } else if (answers.shape == "triangle") {
        newShape = new Triangle (answers.shapeColor)
    } else if (answers.shape == "square") {
        newShape = new Square (answers.shapeColor)
    } 
    const newText = new Text(answers.textColor, answers.text) 
    const svg = new SVG(newShape, newText)
    const code = svg.render()
    console.log(code)
    fs.writeFile("./examples/logo.svg", code, function() {
        console.log("Generated logo.svg")
    })
})

