import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setScreenType } from "../redux/actions/appState.actions";
import { ScreenType } from "../types";
import { useRedux } from "./useRedux";

/**
 * Screen type watcher
 */

export const useScreeTypeDetection = () : void => {

    const dispatch = useDispatch()

    const screen = useRedux<ScreenType>((state) => state.appState.screenType);

    const [currentScreen, setCurrentScreen] = useState<ScreenType>(screen)
    
    const getScreen = (width: number) : ScreenType  => 
        width <= 480 ? "mobile" :
        width <= 1024 ? "tablet" :
        width <= 1400 ? "desktop" :
        width > 1400 ? "lg" :
        null

    const handleResize = () => {
      setCurrentScreen(getScreen(window.innerWidth))
    }

    useEffect(() => {
      window.addEventListener("resize", handleResize);
       
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(()=>{
      if(screen !== currentScreen) dispatch(setScreenType(currentScreen))
    }, [currentScreen])
  }