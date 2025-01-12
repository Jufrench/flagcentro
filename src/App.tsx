import '@mantine/core/styles.css';
import { Route, Routes } from 'react-router';

import './App.css'
import PageLayout from './components/PageLayout';
import Search from './components/Search';
import MultiPlayer from './components/MultiPlayer';
import Profile from './components/Profile';
import Home from './components/Home';

function App() {
  console.log('%cGo through index.css to remove unnecessary styling', 'color:tomato');

  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="multi" element={<MultiPlayer />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App
