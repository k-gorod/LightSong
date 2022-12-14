import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRedux } from '../hooks'
import { setLogoHighlightState } from '../redux/actions/appState.actions';
import styles from '../styles/pages/home.module.scss'



const Home = (data: any) => {

  const dispatch = useDispatch()

  const logoIsHighlighted = useRedux((state) => state.appState.logoIsHighlighted)

  const userData = useRedux<{ username?: string}>((state) => state.user)


  useEffect(()=>{
    if (!logoIsHighlighted) dispatch(setLogoHighlightState(true))

    return () => {
      dispatch(setLogoHighlightState(false))
    }
  }, [])

  return (
    <div className={styles.container}>
      <main
        className={styles.main}
        style={{display: 'grid', justifyContent: 'center', alignItems: 'center', minHeight:'100vh'}}
      >
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
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



export default Home
