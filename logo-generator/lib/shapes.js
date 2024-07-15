class Shape {
    constructor(color) {
      this.color = color;
    }
  }
  
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
  
  
  