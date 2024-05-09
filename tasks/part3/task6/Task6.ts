import { Circle, Rectangle, Shape } from '../../part2/task15/Task15';

function calculateArea(shape: Shape) {
  if (shape instanceof Circle) {
    const circle = shape as Circle;
    return circle.radius * circle.radius * Math.PI;
  } else if (shape instanceof Rectangle) {
    const rectangle = shape as Rectangle;
    return rectangle.width * rectangle.height;
  } else {
    throw new Error('Unknown shape');
  }
}
