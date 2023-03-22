import axios from "axios"
import { useEffect, useState } from "react"

const key = import.meta.env.VITE_API_KEY

export function useFetching(search:string) {
  const [isFetching, setIsFetching] = useState(true)
  const [data, setData] = useState<object>()
  const url = `https://www.superheroapi.com/api.php/${key}/search/${search}`

  useEffect(() => {
    setIsFetching(true)
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
  }, [search])

  return {data, isFetching}
}