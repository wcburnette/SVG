const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: function(value) {
      if (value.length > 3) {
        return 'Please enter no more than three characters.';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a text color (keyword or hexadecimal):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a shape color (keyword or hexadecimal):'
  }
];

inquirer.prompt(questions).then(answers => {
  let shape;
  switch (answers.shape) {
    case 'circle':
      shape = new Circle(answers.shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(answers.shapeColor);
      break;
    case 'square':
      shape = new Square(answers.shapeColor);
      break;
  }

  const svgContent = shape.render(answers.text, answers.textColor);
  fs.writeFileSync('examples/logo.svg', svgContent, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
});


