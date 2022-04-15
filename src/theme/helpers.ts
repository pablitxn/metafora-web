export const colorPicker = (rgb?: Color): string => {
  if (rgb) {
    const { red, green, blue } = rgb;
    return `color: rgb(${red}, ${green}, ${blue})`;
  }
  return ``;
};

export const backgroundPicker = (rgb?: Color): string => {
  if (rgb) {
    const { red, green, blue } = rgb;
    return `background: rgb(${red}, ${green}, ${blue})`;
  }
  return ``;
};
