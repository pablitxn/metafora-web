interface CardProps {
  background: Colors;
}

interface TitleProps {
  isBolded?: boolean;
  background?: Color;
  textColor?: Color;
  minMargin?: boolean;
}

interface TextProps {
  textColor?: Color;
}

interface DotProps {
  position: {
    top: string;
    left: string;
  };
  size: string;
}

interface Color {
  red: number;
  green: number;
  blue: number;
}
