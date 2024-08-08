// Import necessary modules: inquirer for user prompts, fs for file system operations, and shape classes
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Define a series of questions to prompt the user for input
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

// Prompt the user for answers and generate an SVG logo based on the input
inquirer.prompt(questions).then(answers => {
  let shape;
  
  // Determine the shape class to instantiate based on user selection
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

  // Render the SVG content using the selected shape and user input
  const svgContent = shape.render(answers.text, answers.textColor);
  
  // Write the SVG content to a file named 'logo.svg'
  fs.writeFileSync('examples/logo.svg', svgContent, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
});


