// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import './App.css'

import countries from '../public/countries.json';
import QuickPlay from './components/QuickPlay';

function App() {
  // const [count, setCount] = useState(0)

  console.group('%c   ', 'background:limegreen')
  console.log('countries:', countries);
  console.groupEnd()

  return (
    <MantineProvider>
      <QuickPlay />
    </MantineProvider>
  )
}

export default App
