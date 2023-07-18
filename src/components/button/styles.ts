import { styled } from "styled-components";
import { ButtonProps } from ".";

const primary = "#63D391"
const secundary = "#205266"

export const Button = styled.button<ButtonProps>`
  
  border-radius: 0.25rem;
  display: flex;
  width: ${props => (props.auto ? "auto": "8.75rem")};
  height: 2rem;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;

  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  color: ${props => (props.outline ? (props.primary ? primary : secundary) : '#FFF')};
  background-color: ${props => (props.outline ? '#FFF' : (props.primary ? primary : secundary))};
  ${props => (props.blue && 'background-color: #4B8DB5;')}
  border: ${props => (props.outline ? '1px solid ' + (props.primary ? primary : secundary) : 'none')};

`;