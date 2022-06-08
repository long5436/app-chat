const rgb = [255, 0, 0];

function createColor() {
  // Randomly update colours
  rgb[0] = Math.round(Math.random() * 255);
  rgb[1] = Math.round(Math.random() * 255);
  rgb[2] = Math.round(Math.random() * 255);

  // http://www.w3.org/TR/AERT#color-contrast
  const brightness = Math.round(
    (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
      1000
  );
  const textColour = brightness > 150 ? "black" : "white";
  const backgroundColour = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
  //   content.style.color = textColour;
  //   box.style.backgroundColor = backgroundColour;
  return {
    textColor: textColour,
    backgroundColor: backgroundColour,
  };
}

export default createColor;
