import styled from "styled-components";

import heroBackground from "@/assets/hero-background.png";

export const HeroContainer = styled.section`
  height: 34rem;
  background-image: url(${heroBackground.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  justify-content: center;
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;
  }
`;

export const ItensContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 3.125rem;
  gap: 1.25rem;
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-size: 1rem;
    font-weight: 500;
  }
`;

interface IconProps {
  color: string;
}

export const Icon = styled.div<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const RightContent = styled.div``;
