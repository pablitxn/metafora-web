interface CardProps {
  background: Rgb;
}

interface TitleProps {
  isBolded?: boolean;
  background?: Rgb;
  textColor?: Rgb;
  minMargin?: boolean;
}

interface TextProps {
  textColor?: Rgb;
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

type Rgb = Color | undefined;
