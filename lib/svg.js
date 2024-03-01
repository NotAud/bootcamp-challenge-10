import fs from "fs";
import Circle from "./shapes/circle.js";
import Triangle from "./shapes/triangle.js";
import Square from "./shapes/square.js";

// Consolidate our shape creation pipeline into a switch statement
function createShape(data) {
  switch (data.shape.toLowerCase()) {
    case "circle":
      const circle = new Circle(data.text, data.textColor, data.shapeColor);
      createSvgFile("circle", circle.render());
      break;
    case "triangle":
      const triangle = new Triangle(data.text, data.textColor, data.shapeColor);
      createSvgFile("triangle", triangle.render());
      break;
    case "square":
      const square = new Square(data.text, data.textColor, data.shapeColor);
      createSvgFile("square", square.render());
      break;
    default:
      throw new Error("Invalid shape");
  }
}

// Helper for outputting each shapes SVG file
function createSvgFile(filename, data) {
  fs.writeFile(`./examples/${filename}.svg`, data, (error) => {
    if (error) {
      throw Error(error);
    }
    console.log(`${filename}.svg created successfully`);
  });
}

// Our main function only needs to call createShape
export { createShape };
