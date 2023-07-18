import styled from 'styled-components';
import { mergeProps } from 'vue';

export const Stages = styled.div`
  width: 48.875rem;
  height: 3.5625rem;
  display: flex;
  flex-direction: line;
  align-items: flex-start;
  position: relative;

  border-radius: 1.25rem;
  background: #FFF;
`;

interface StepProps {
  atual: number,
  posicao: number
}

export const Step = styled.div<StepProps>`
  position: absolute;
  justify-content: center;
  width: 9.775rem;
  align-items: center;
  display: flex;
  height: 3.5625rem;
  background: ${props => (props.atual < 0 ) ? "#FF": (props.atual > 0) ? "#63D391" : "#4B8DB5"};
  color: ${props => (props.atual >= 0) ? "#FFF" : "#205266" };
  border-radius: 1.25rem;
  padding-left: ${props => (props.posicao * 9.775)}rem;
  top: 0px;
  left: 0px;
  text-align: center;
  z-index: 
  gap: 10px;

  span{
    margin-right: 10px;
    color: ${props => (props.atual >= 0) ? "#FFF" : "#63D391"};
    
  }

`;