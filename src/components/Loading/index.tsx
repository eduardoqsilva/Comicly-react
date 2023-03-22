import { LoadingWrapper } from "./Loading.styled"
import loadingImg from "../../assets/loading/loading.gif"

interface type {
  isFetching: boolean
}
export function Loading({isFetching}: type) {
  return (
    <LoadingWrapper visible={isFetching}>
      <img className="img" src={loadingImg}/>
    </LoadingWrapper>
  )
}