import { useState } from 'react';
import { useRedux } from '../hooks'
import CircleLightSongIcon from '../icons/CircleLightSongIcon';
import LightSongLogoIcon from '../icons/LightSongLogoIcon';
import styles from '../styles/pages/home.module.scss'



const Home = (data: any) => {
  const userData = useRedux<{ username?: string}>((state) => state.user)

  const [input, setInput] = useState("");

  const onChangeHandle = ({target})=>{
    // 3,2,4
    // target.value.reduce((acc, el)=>{
    //   return 
    // },'')
    console.log(
      target.value
    )

    // setInput(
    //   target.value.split().reduce((acc, el)=>{
    //     return acc + "*"
    //   }, "")
    // )

    setInput(target.value.split("").reduce((acc, el)=>{
      return acc + "*" + (
          acc.length === 2 ||
          acc.length === 6 ?
          " " : ""
        )
    }, ""))
  }

  return (
    <div className={styles.container}>
      <main
        className={styles.main}
        style={{display: 'grid', justifyContent: 'center', alignItems: 'center', minHeight:'100vh'}}
      >
        <LightSongLogoIcon />
        <CircleLightSongIcon />
          <input value={input} onChange={onChangeHandle} />
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
