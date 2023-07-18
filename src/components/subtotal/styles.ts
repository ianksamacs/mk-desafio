import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
  width: 48.875rem;
  height: 3.5625rem;

  border-radius: 1.25rem;
  background: #FFF;
`;

export const Container = styled.div`
  :h2{
    color: #6578;
  }
  display: flex;
  width: 14.0625rem;
  height: 2.4625rem;
  padding: 0.5625rem 2rem;
  justify-content: start;
  align-items: center;
  gap: 1.1875rem;

  border-radius: 2.5rem 1.25rem 1.25rem 2.5rem;
  background: #205266;

  background-image: url('assets/select-icon.svg'); 
  background-position: right 1.125rem center; 
  background-repeat: no-repeat; 
  background-size: 0.625rem 0.625rem;

`;

export const H3 = styled.h3`
  color: #FFF;
  /* mk next / h3_16px */
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3125rem;
`;

export const H2 = styled.h3`
  color: #63D391;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.6875rem;
`;