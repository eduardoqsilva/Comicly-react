import { useEffect, useState } from "react"
import axios from "axios"

import { Background } from "./components/Background"
import { Search } from "./components/Search"
import { Wrapper } from "./components/Wrapper"
import logoName from "./assets/logoName/comicly.png"
import { Logo } from "./components/Logo"
import { Overlay } from "./components/Overlay"



const key = import.meta.env.VITE_API_KEY

function App() {
  
  const [show, setShow] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [data, setData] = useState<object>()
  const [search, setSearch] = useState<string>()
  const url = `https://www.superheroapi.com/api.php/${key}/search/${search}`

  function handleSetShow() {
    setShow((prev) => !prev)
  }
  function handleSetSearch(text:string) {
    setSearch(text)
    setShow(true)
  }

  useEffect(() =>{
    axios.get(url)
    .then((res) => {
      setData(res.data.results)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      setIsFetching(false)
    })
    console.log(search)
  },[search])

  useEffect(() => {
    console.log(data)
  },[data])

  return (
    <>
      <Logo />
      <Background>
        <Wrapper>
          <img src={logoName} />
          <Search setSearch={handleSetSearch}/> 
        </Wrapper>  
      </Background>
      <Overlay data={data} show={show} handleSetShow={handleSetShow} />
      
    </>
  )
}

export default App
