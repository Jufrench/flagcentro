import '@mantine/core/styles.css';
import { Route, Routes } from 'react-router';

import './App.css'
import PageLayout from './components/PageLayout';
import Search from './components/Search';
import MultiPlayer from './components/MultiPlayer';
import Profile from './components/Profile';
import Home from './components/Home';
// import DailyPlay from './components/dailyplay/DailyPlay';
import QuickPlayContent from './components/quickplay/QuickPlayContent';
import LandingPage from './routes/LandingPage';
import ProtectedRoute from './routes/ProtectedRoute';
import AuthProvider from './contexts/AuthContext';

function App() {
  console.log('%cGo through index.css to remove unnecessary styling', 'color:tomato');

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          element={
            <ProtectedRoute>
              <PageLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="search" element={<Search />} />
          {/* <Route path="dailyplay" element={<DailyPlay />} /> */}
          <Route path="quickplay" element={<QuickPlayContent quickPlayType="standard" />} />
          <Route path="multi" element={<MultiPlayer />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        {/* <Route path="/" element={<PageLayout />}> */}
          
        {/* </Route> */}
      </Routes>
    </AuthProvider>
  );
}

export default App
