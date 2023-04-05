import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 70rem;
  margin: 0 auto;
  padding: 1.5rem 0 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.625rem;
  background-color: ${({ theme }) => theme.colors.purpleLight};
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.purpleDark};
  font-weight: 500;
  font-size: 0.875rem;
`;

export const CartButton = styled.button`
  position: relative;
  padding: 0.625rem;
  background-color: ${({ theme }) => theme.colors.yellowLight};
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: all 200ms ease-in-out;
  }

  &:not(:hover) {
    transform: scale(1);
    transition: all 200ms ease-in-out;
  }

  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -7px;
    right: -7px;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.yellowDark};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    border-radius: 50%;
  }
`;
