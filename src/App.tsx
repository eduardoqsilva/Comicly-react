import { useEffect, useState } from "react"
import axios from "axios"

import { useFetching } from "./services/api/useFetching"
import { Background } from "./components/Background"
import { Search } from "./components/Search"
import { Wrapper } from "./components/Wrapper"
import { Logo } from "./components/Logo"
import { Overlay } from "./components/Overlay"
import { Loading } from "./components/Loading"

import logoName from "./assets/logoName/comicly.png"
import imgLogo from "/favicon.svg"





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
      <Logo srcImg={imgLogo}/>
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
