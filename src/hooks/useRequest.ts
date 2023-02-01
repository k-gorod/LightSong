import { useEffect, useMemo, useState } from "react"
import { useRedux } from "./useRedux"

export const useRequest = (url?: string, method?: string) => {
    
  const [response, setResponse] = useState<Response | any>({} as Response)

  const [isLoading,  setIsLoading] = useState(false)

  const token = useRedux(state => state.user.token)

  const headers = useMemo(()=>{
    const myHeaders = new Headers()
    !token || myHeaders.append('Authorization', `Bearer ${token}`)
    return myHeaders
  }, [token])

  useEffect(()=>{
    if (url) {
        setIsLoading(true);

        fetch(url, {
            headers,
            method,
            mode: 'cors',
            cache: 'default',
          })
            .then((response) => {
            //   if (!response.ok) throw response.json()
              return response.json()
            })
            // .then(data => setResponse(data))
            .catch(err => {
              setResponse({ Error : "Wrong user id" })
              return err
            })
            .then(data => setResponse(data))
    
            .finally(()=>{
              setIsLoading(false)
            })
    }
  }, [url, method, token])

  return [response, isLoading]
 
}