/* eslint-disable @typescript-eslint/restrict-template-expressions */
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  padding: 1.375rem 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  height: 5rm;
  background: #FFF;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);


`;

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 90%;
  width: 90%;

  @media (max-width: 768px) {
    width: 100%;
    gap: 70%;
  }
`;

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Icon = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: #F0F4F5;

  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover{
    cursor: pointer;
  }

  img{
    width: 1.5rem;
    height: 1.5rem;
    align-self: center;
  }
`;

