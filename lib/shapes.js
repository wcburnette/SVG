// Define a base Shape class with a color property
class Shape {
  constructor(color) {
    this.color = color;
  }
}

// Define a Circle class that extends Shape and renders an SVG circle with text
class Circle extends Shape {
  render(text, textColor) {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" fill="${this.color}" />
        <text x="150" y="125" font-size="45" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
  }
}

// Define a Triangle class that extends Shape and renders an SVG triangle with text
class Triangle extends Shape {
  render(text, textColor) {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,50 100,150 200,150" fill="${this.color}" />
        <text x="150" y="125" font-size="45" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
  }
}

// Define a Square class that extends Shape and renders an SVG square with text
class Square extends Shape {
  render(text, textColor) {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="50" width="100" height="100" fill="${this.color}" />
        <text x="150" y="125" font-size="45" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
  }
}

module.exports = { Circle, Triangle, Square };
