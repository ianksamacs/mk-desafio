import * as Styles from './styles';

interface CustomSelectProps {
  options: string[]
}


const CustomSelect: React.FC<CustomSelectProps>  = ({ options }) =>{
  return (
    <Styles.CustomSelect>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </Styles.CustomSelect>
  );
}

export default CustomSelect;