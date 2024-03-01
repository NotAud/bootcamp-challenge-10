import Shape from "../shape.js";
import formatSvg from "../../util/formatSvg.js";

export default class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    // Our readable SVG string with the injected properties
    const svg = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
                <rect width="150" height="100" x="75" y="50" fill="${this.shapeColor}" />
  
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
            </svg>
        `;
    // Format our SVG to remove our readablity and allow consistency when testing
    return formatSvg(svg);
  }
}
