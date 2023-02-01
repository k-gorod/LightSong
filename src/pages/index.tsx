import { CSSProperties, memo, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import HomePageContent from '../components/HomePageContent';
import PageContent from '../components/PageContent';
import { useRedux } from '../hooks'
import { setLogoHighlightState } from '../redux/actions/appState.actions';
import { WheelEvent } from '../types';


const Home = (data: any) => {

  const dispatch = useDispatch()

  const logoIsHighlighted = useRedux<boolean>((state) => state.appState.logoIsHighlighted, true);
  
  /**
   * catch wheel event to affect scroll
   */
  const listnerCallback = useCallback((event: WheelEvent) => {
    if (event?.wheelDelta && event?.wheelDelta < 0) {
      if (logoIsHighlighted) dispatch(setLogoHighlightState(false))
    } else {
      document.addEventListener('wheel', listnerCallback,  { once: true })
    }
  }, [logoIsHighlighted, dispatch, setLogoHighlightState])

  useEffect(() => {
    if (logoIsHighlighted) {
      document.addEventListener('wheel', listnerCallback,  { once: true })
    }
  }, [logoIsHighlighted, dispatch, setLogoHighlightState])

  useEffect(()=>{
    dispatch(setLogoHighlightState(true))

    return () => {
      dispatch(setLogoHighlightState(false));
    }
  }, [])

  return (
    <PageContent>
          <HomePageContent active={!logoIsHighlighted} />
    </PageContent>
  )
}

// This gets called on every request
export async function getServerSideProps (context: any) {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  // console.log(context)
  // Pass data to the page via props
  return { props: { data: 'Provided is working' } }
}



export default memo(Home)
