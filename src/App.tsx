import { Background } from "./components/Background"
import { Search } from "./components/Search"
import { Wrapper } from "./components/Wrapper"
import logoName from "./assets/logoName/comicly.png"
import { Logo } from "./components/Logo"
import { Overlay } from "./components/Overlay"
import { useState } from "react"

function App() {

  const [show, setShow] = useState(true)

  function handleSetShow() {
    setShow((prev) => !prev)
  }

  return (
    <>
      <Logo />
      <Background>
        <Wrapper>
          <img src={logoName} />
          <Search /> 
        </Wrapper>
      </Background>
      <Overlay show={show} handleSetShow={handleSetShow} data={{}}/>
    </>
  )
}

export default App
