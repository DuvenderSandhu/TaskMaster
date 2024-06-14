import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([])
  useEffect(()=>{
    let res= fetch('https://api.github.com/users').then(res=>res.json()).then(data=>setCount(data))
  },[])
  return (
    <div>
      <h1>
      Hello WOrld How areYOu
    </h1>
    <ol>
      {count.map(e=>{
        return <li>{e.login}</li>
      })}
    </ol>
    </div>
  )
}

export default App
