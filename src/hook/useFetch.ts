import {useState, useEffect} from 'react'
import { UserInfoProps } from '../../type';
  const useFetch = (url: string) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<UserInfoProps[]>()
    const [error, setError]=  useState<string|null>(null)
    useEffect(()=>{
        const FetchData = async ()=>{
            try {
                const response = await fetch(url)
                const result = await response.json()
                setData(result)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        FetchData()
    },[])
    return {
     data, loading, error
    };
  };
  
  export default useFetch;
  