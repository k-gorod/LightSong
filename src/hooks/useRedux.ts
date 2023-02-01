import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux";


type useReduxType = <T>(callback: (state: AppState) => any, defaultValue?: T) => T | null;

/**
 * 
 * @description This hook exist to prevent redux-next ssr conflict
 */

export const useRedux: useReduxType = <T extends unknown | null>(callback: (state: AppState) => any, defaultValue: T | undefined) => {
    const [state, setState] = useState<T | null>(defaultValue || null);
  
    const data: T = useSelector(callback);
  
    useEffect(()=>{
      setState(data)
    }, [data])
  
    return state
  }