// Removes tabs and spaces from SVG string - Allows for better readability in code and consistent formatting when testing
export default function formatSvg(svg) {
  // Regex looks for all tabs and new lines and removed them
  // Also removes all spaces between tags by using a look ahead and look behind
  // Extra trim to remove leading and trailing spaces
  const formatted = svg.replace(/(?<=\>)(\s+)(?=\<)|[\t\r\n]/gm, "").trim();
  return formatted;
}
