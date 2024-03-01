import Triangle from "../lib/shapes/triangle";
import formatSvg from "../util/formatSvg";

// Create a new Triangle object
const triangle = new Triangle("LogoText", "green", "blue");
describe("Triangle", () => {
  // Validate all properties of the triangle class
  describe("properties", () => {
    it("Validate the Logo text, text color, and shape color", () => {
      expect(triangle.text).toEqual("LogoText");
      expect(triangle.textColor).toEqual("green");
      expect(triangle.shapeColor).toEqual("blue");
    });
  });

  // Validate the render method outputs the correct string
  describe("render", () => {
    it("Validate the SVG string output", () => {
      const svg = `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                    <polygon points="150, 18 244, 182 56, 182" fill="blue" />

                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">LogoText</text>

                </svg>
            `;
      // Use the formatter to remove tabs and spaces from the SVG string - Allowing code readability
      expect(triangle.render()).toEqual(formatSvg(svg));
    });
  });
});
