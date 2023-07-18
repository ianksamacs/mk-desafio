// Styles
import * as Styles from "./styles";

export interface ButtonProps {
  primary?: boolean;
  outline?: boolean;
  text?: string;
  auto?: boolean;
  blue?: boolean;
}

const Button: React.FC<ButtonProps> = ({primary, text, outline, auto, blue})=> {
 return ( 
  <Styles.Button primary={primary} outline={outline} auto={auto} blue={blue}>
    {text}
  </Styles.Button>
 );
}

export default Button;