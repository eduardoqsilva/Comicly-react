import { SearchWrapper } from "./Search.styled";
import {MagnifyingGlass} from "@phosphor-icons/react"

export function Search() {
  return(
    <SearchWrapper>
      <MagnifyingGlass color="#0D9BEB" size={32} weight={"bold"}/>
      <input type="text" /> 
    </SearchWrapper>
  )
}