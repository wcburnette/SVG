// Import the Circle, Triangle, and Square classes for testing
const { Circle, Triangle, Square } = require('./shapes');

// Test that the Circle class renders the correct SVG elements with given parameters
test('Circle renders correctly', () => {
  const shape = new Circle('red');
  const svg = shape.render('A', 'black');
  expect(svg).toContain('<circle');
  expect(svg).toContain('fill="red"');
  expect(svg).toContain('>A<');
});

// Test that the Triangle class renders the correct SVG elements with given parameters
test('Triangle renders correctly', () => {
  const shape = new Triangle('blue');
  const svg = shape.render('B', 'white');
  expect(svg).toContain('<polygon');
  expect(svg).toContain('fill="blue"');
  expect(svg).toContain('>B<');
});

// Test that the Square class renders the correct SVG elements with given parameters
test('Square renders correctly', () => {
  const shape = new Square('green');
  const svg = shape.render('C', 'yellow');
  expect(svg).toContain('<rect');
  expect(svg).toContain('fill="green"');
  expect(svg).toContain('>C<');
});
