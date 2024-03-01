// Shared properties and methods for each shape to inherit
export default class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  render() {
    // All shapes should have their own render function implemented
    throw Error("Shape has no render function");
  }
}
