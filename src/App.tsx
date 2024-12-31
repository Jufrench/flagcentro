import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

// import MobileHeader from './components/MobileHeader';
import QuickPlay from './components/QuickPlay';
import './App.css'
// import BottomNavBar from './components/BottomNavBar';

function App() {

  console.log('%cGo through index.css to remove unnecessary styling', 'color:tomato');

  return (
    <MantineProvider>
      {/* <header style={{ position: "fixed", top: 0, right: 0, left: 0 }}>
        <MobileHeader />
      </header> */}
      <main id="main">
        <QuickPlay />
      </main>
      {/* <footer style={{ position: "fixed", right: 0, bottom: 0, left: 0 }}>
        <BottomNavBar />
      </footer> */}
    </MantineProvider>
  )
}

export default App
