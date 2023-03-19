import { LogoStyled } from "./logo.styled";
import logo from "/favicon.svg"

export function Logo() {
  return (
    <LogoStyled>
      <img src={logo}/>
    </LogoStyled>
  )
}