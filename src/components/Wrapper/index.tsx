import { ReactNode } from "react";
import { WrapperStyled } from "./wrapper.styled";

interface type {
  children: ReactNode
}

export function Wrapper({children}: type) {
  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
  )
}