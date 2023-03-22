import { LogoStyled } from "./logo.styled";


interface LogoType {
  srcImg: string
}
export function Logo({srcImg}:LogoType) {
  return (
    <LogoStyled>
      <img src={srcImg}/>
    </LogoStyled>
  )
}