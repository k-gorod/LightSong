import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux";

/**
 * 
 * This hook exist to prevent redux-next ssr conflict
 */

export const useRedux: <T>(callback: (state: AppState) => any) => T | null = <T extends unknown | null>(callback: (state: AppState) => any) => {
    const [state, setState] = useState<T | null>(null);
  
    const data: T = useSelector(callback);
  
    useEffect(()=>{
      setState(data)
    }, [data])
  
    return state
  }