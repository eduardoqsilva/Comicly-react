import { ReactNode } from "react";
import { Search } from "../Search";
import { BackgroundStyled, GridContainer } from "./Background.styled";

interface BackgroundType {
  children: ReactNode
}

export function Background({children}:BackgroundType) {
   return(
    <BackgroundStyled>
      <GridContainer>
        {children}
        <div className="leftDecal"></div>
      </GridContainer>
    </BackgroundStyled>
   )
}