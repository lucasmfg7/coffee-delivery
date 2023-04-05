import React from "react";
import {
  ButtonContainer,
  CartButton,
  HeaderContainer,
  LocationButton,
} from "./styled";
import Image from "next/image";
import logoImg from "../../assets/logo.svg";
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

export const Header = () => {
  const theme = useTheme();
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="Coffee Shop" width={85} height={40} />

      <ButtonContainer>
        <LocationButton>
          <MapPin weight="fill" size={22} color={theme.colors.purple} />
          <span>Rio de Janeiro, RJ</span>
        </LocationButton>
        <CartButton>
          <ShoppingCartSimple
            size={22}
            weight="fill"
            color={theme.colors.yellowDark}
          />
          <span>3</span>
        </CartButton>
      </ButtonContainer>
    </HeaderContainer>
  );
};
