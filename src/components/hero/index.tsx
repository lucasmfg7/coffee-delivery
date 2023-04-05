import React from "react";
import * as S from "./styles";
import Image from "next/image";

import coffeeImage from "@/assets/coffee.svg";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { Baloo_2 } from "next/font/google";
import { useTheme } from "styled-components";

const baloo_2 = Baloo_2({
  weight: ["700", "800"],
  subsets: ["latin"],
});

export const Hero = () => {
  const { colors } = useTheme();

  const itensContent = [
    {
      text: "Compras simples e segura",
      color: colors.yellowDark,
      icon: <ShoppingCart size={16} weight="fill" color={colors.white} />,
    },
    {
      text: "Embalagem mantém o café intacto",
      color: colors.base.text,
      icon: <Package size={16} weight="fill" color={colors.white} />,
    },
    {
      text: "Entrega rápida e rastreada",
      color: colors.yellow,
      icon: <Timer size={16} weight="fill" color={colors.white} />,
    },
    {
      text: "O café chega fresquinho até você",
      color: colors.purple,
      icon: <Coffee size={16} weight="fill" color={colors.white} />,
    },
  ];

  return (
    <S.HeroContainer>
      <S.HeroContent>
        <S.LeftContent>
          <h2 className={baloo_2.className}>
            Encontre o café perfeito para qualquer hora do dia
          </h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <S.ItensContent>
            {itensContent.map((item) => (
              <ItemContent
                key={item.text}
                text={item.text}
                color={item.color}
                icon={item.icon}
              />
            ))}
          </S.ItensContent>
        </S.LeftContent>
        <S.RightContent>
          <Image src={coffeeImage} alt="" />
        </S.RightContent>
      </S.HeroContent>
    </S.HeroContainer>
  );
};

interface ItemContentProps {
  text: string;
  color: string;
  icon: JSX.Element;
}

export const ItemContent = ({ text, color, icon }: ItemContentProps) => {
  return (
    <S.ItemContent>
      <S.Icon color={color}>{icon}</S.Icon>
      <span>{text}</span>
    </S.ItemContent>
  );
};
