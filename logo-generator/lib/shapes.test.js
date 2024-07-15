const { Circle, Triangle, Square } = require('./shapes');

test('Circle renders correctly', () => {
  const shape = new Circle('red');
  const svg = shape.render('A', 'black');
  expect(svg).toContain('<circle');
  expect(svg).toContain('fill="red"');
  expect(svg).toContain('>A<');
});

test('Triangle renders correctly', () => {
  const shape = new Triangle('blue');
  const svg = shape.render('B', 'white');
  expect(svg).toContain('<polygon');
  expect(svg).toContain('fill="blue"');
  expect(svg).toContain('>B<');
});

test('Square renders correctly', () => {
  const shape = new Square('green');
  const svg = shape.render('C', 'yellow');
  expect(svg).toContain('<rect');
  expect(svg).toContain('fill="green"');
  expect(svg).toContain('>C<');
});
