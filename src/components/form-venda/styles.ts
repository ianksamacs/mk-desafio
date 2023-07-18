import { styled } from "styled-components";


export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 2.875rem 2.625rem 4.125rem 1.875rem;

`;

export const Container = styled.div`
  display: flex;
  width: 45.250rem;
  padding: 1.25rem 1.8125rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  color: #205266;
  font-weight: 700;
  border-radius: 1.25rem;
  background: #FFF;

`;

export const CustomHR = styled.hr`
width: 1.5rem;
height: 0.1875rem;
background: #63D391;
border: none;
`;

export const CustomHR2 = styled.hr`
  width: 100%;
  height: 0.0625rem;
  background: #F3F3F3;
  border: none;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export interface LabelProps {
  width?: string;
}

export const Label = styled.div<LabelProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  ${props => (props.width && "width: "+props.width+";")}
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: line;
  align-items: flex-start;
  gap: 1.2rem;
`;

export const FormGroupEnd = styled.div`
  display: flex;
  flex-direction: line;
  align-items: flex-end;
  gap: 1.2rem;
`;

export const H4 = styled.h4`
  color: #205266;
`;

export const H3 = styled.h3`
  color: #63D391;
  font-size: 1.25rem;

`;

export const Voltar = styled.button`
  border: none;
  background: #FFF;
  border-radius: 0.25rem;
  display: flex;
  height: 2rem;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  color: #205266;
  text-decoration-line: underline;

`;