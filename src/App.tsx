import { useEffect, useState } from "react"
import axios from "axios"

import { Background } from "./components/Background"
import { Search } from "./components/Search"
import { Wrapper } from "./components/Wrapper"
import logoName from "./assets/logoName/comicly.png"
import { Logo } from "./components/Logo"
import { Overlay } from "./components/Overlay"
import { Loading } from "./components/Loading"
import { useFetching } from "./services/api/useFetching"





function App() {

  const [show, setShow] = useState(false)
  const [search, setSearch] = useState<string>('')
  const {data, isFetching} = useFetching(search)

  function handleSetShow() {
    setShow((prev) => !prev)
  }
  function handleSetSearch(text: string) {
    setSearch(text)
    setShow(true)
  }

  return (
    <>
      <Logo />
      <Background>
        <Wrapper>
          <img src={logoName} />
          <Search setSearch={handleSetSearch} />
        </Wrapper>
      </Background>
      <Overlay data={data} show={show} handleSetShow={handleSetShow} />
       <Loading isFetching={isFetching} /> 
    </>
  )
}

export default App
