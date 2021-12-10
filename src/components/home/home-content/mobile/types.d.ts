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
    top: number;
    left: number;
  };
  size: number;
}

type Color = {
  red: number;
  green: number;
  blue: number;
};

interface CardContentProps {
  position: 'top' | 'bottom';
}
