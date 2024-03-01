import inquirer from "inquirer";
import { createShape } from "./lib/svg.js";

// Prompted questions for inquirer
const questions = [
  {
    type: "list",
    message: "Pick a background shape",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    message: "Input Logo Text: ",
    name: "text",
  },
  {
    type: "input",
    message: "Input Logo Text Color (Can be a color name or hex value): ",
    name: "textColor",
  },
  {
    type: "input",
    message: "Input Background Shape Color (Can be a color name or hex value):",
    name: "shapeColor",
  },
];

inquirer.prompt(questions).then((response) => {
  // Pass our responses to our createShape function - This will create our SVG string and pass it to the SVG generator function
  createShape(response);
});
