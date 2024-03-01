import Square from "../lib/shapes/square";
import formatSvg from "../util/formatSvg";

// Create a new Square object
const square = new Square("LogoText", "green", "blue");
describe("Square", () => {
  // Validate all properties of the square class
  describe("properties", () => {
    it("Validate the Logo text, text color, and shape color", () => {
      expect(square.text).toEqual("LogoText");
      expect(square.textColor).toEqual("green");
      expect(square.shapeColor).toEqual("blue");
    });
  });

  // Validate the render method outputs the correct string
  describe("render", () => {
    it("Validate the SVG string output", () => {
      const svg = `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                    <rect width="150" height="100" x="75" y="50" fill="blue" />

                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">LogoText</text>

                </svg>
            `;
      // Use the formatter to remove tabs and spaces from the SVG string - Allowing code readability
      expect(square.render()).toEqual(formatSvg(svg));
    });
  });
});
