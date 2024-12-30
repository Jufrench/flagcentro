import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import './App.css'
import QuickPlay from './components/QuickPlay';

function App() {

  console.log('%cGo through index.css to remove unnecessary styling', 'color:tomato');

  return (
    <MantineProvider>
      <QuickPlay />
    </MantineProvider>
  )
}

export default App
