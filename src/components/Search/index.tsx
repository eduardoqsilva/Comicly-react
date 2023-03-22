import { SearchWrapper } from "./Search.styled";
import {MagnifyingGlass} from "@phosphor-icons/react"
import { KeyboardEvent, useState } from "react"

interface type {
  setSearch: (value:string) => void
}

export function Search({setSearch}:type) {
  
  function handleSetValue(e: KeyboardEvent<HTMLInputElement>) {
    const value = e.currentTarget.value.trim()
    
    if (e.key === 'Enter') {
      console.log('enter aqui')
      if(value.length >= 3) {
        setSearch(value)
        e.currentTarget.value = ''
      }
    }
  }
  return(
    <SearchWrapper>
      <MagnifyingGlass color="#0D9BEB" size={32} weight={"bold"}/>
      <input onKeyDown={handleSetValue} type="text" placeholder="look for your hero here"/> 
    </SearchWrapper>
  )
}