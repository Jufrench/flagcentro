import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import QuickPlay from './components/QuickPlay';
import './App.css'
import MobileHeader from './components/MobileHeader';
import BottomNavBar from './components/BottomNavBar';

function App() {

  console.log('%cGo through index.css to remove unnecessary styling', 'color:tomato');

  const headerStyle: {} = {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    background: "#fff",
    borderBottom: "1px solid #ddd",
    zIndex: 1,
  };

  const footerStyle: {} = {
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
    background: "#fff",
    borderTop: "1px solid #ddd",
  };

  return (
    <MantineProvider>
      <header id="header" style={headerStyle}>
        <MobileHeader />
      </header>
      <main id="main" style={{ paddingTop: "5em", paddingBottom: "4em" }}>
        <QuickPlay />
      </main>
      <footer id="footer" style={footerStyle}>
        <BottomNavBar />
      </footer>
    </MantineProvider>
  )
}

export default App
