import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import QuickPlay from './components/QuickPlay';
import './App.css'

function App() {

  console.log('%cGo through index.css to remove unnecessary styling', 'color:tomato');

  return (
    <MantineProvider>
      <main id="main">
        <QuickPlay />
      </main>
    </MantineProvider>
  )
}

export default App
