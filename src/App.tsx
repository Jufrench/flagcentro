// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import countries from '../public/countries.json';

function App() {
  // const [count, setCount] = useState(0)

  console.group('%c   ', 'background:limegreen')
  console.log('countries:', countries);
  console.groupEnd()

  return (
    <>
      hello
    </>
  )
}

export default App
