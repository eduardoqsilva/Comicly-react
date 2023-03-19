import { Background } from "./components/Background"
import { Search } from "./components/Search"
import { Wrapper } from "./components/Wrapper"
import logoName from "./assets/logoName/comicly.png"
import { Logo } from "./components/Logo"

function App() {

  return (
    <>
      <Logo />
      <Background>
        <Wrapper>
          <img src={logoName} />
          <Search /> 
        </Wrapper>
      </Background>
    </>
  )
}

export default App
