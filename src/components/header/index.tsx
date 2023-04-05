import React from "react";
import Image from "next/image";
import logoImg from "@/assets/logo.svg";
import * as S from "./styled";
import { useTheme } from "styled-components";
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";

export const Header = () => {
  const theme = useTheme();
  return (
    <S.HeaderContainer>
      <Image src={logoImg} alt="Coffee Shop" width={85} height={40} />

      <S.ButtonContainer>
        <S.LocationButton>
          <MapPin weight="fill" size={22} color={theme.colors.purple} />
          <span>Rio de Janeiro, RJ</span>
        </S.LocationButton>
        <S.CartButton>
          <ShoppingCartSimple
            size={22}
            weight="fill"
            color={theme.colors.yellowDark}
          />
          <span>3</span>
        </S.CartButton>
      </S.ButtonContainer>
    </S.HeaderContainer>
  );
};
