// Styles
import * as Styles from './styles';

export interface InputProps {
  placeholder?: string,
  

}

const MaskedInput: React.FC<InputProps> = ({placeholder}) =>{
  return (
      <Styles.MaskedInput type="text" placeholder={placeholder}/>
  );
}

export default MaskedInput;
