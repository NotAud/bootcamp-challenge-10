import Circle from "../lib/shapes/circle";
import formatSvg from "../util/formatSvg";

// Create a new Circle object
const circle = new Circle("LogoText", "green", "blue");
describe("Circle", () => {
  // Validate all properties of the circle class
  describe("properties", () => {
    it("Validate the Logo text, text color, and shape color", () => {
      expect(circle.text).toEqual("LogoText");
      expect(circle.textColor).toEqual("green");
      expect(circle.shapeColor).toEqual("blue");
    });
  });

  // Validate the render method outputs the correct string
  describe("render", () => {
    it("Validate the SVG string output", () => {
      const svg = `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                    <circle cx="150" cy="100" r="80" fill="blue" />

                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">LogoText</text>

                </svg>
            `;
      // Use the formatter to remove tabs and spaces from the SVG string - Allowing code readability
      expect(circle.render()).toEqual(formatSvg(svg));
    });
  });
});
