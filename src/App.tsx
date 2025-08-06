import { Route, Routes } from 'react-router';

import PageLayout from './components/PageLayout';
import Search from './components/Search';
import MultiPlayer from './components/MultiPlayer';
import QuickPlayContent from './components/quickplay/QuickPlayContent';
import LandingPage from './routes/LandingPage';
import ProtectedRoute from './routes/ProtectedRoute';
import AuthProvider from './contexts/AuthContext';
import ProfilePage from './routes/ProfilePage';
import HomePage from './routes/HomePage';

import './App.css'

function App() {
  console.log('%cGo through index.css to remove unnecessary styling', 'color:tomato');

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<LandingPage />} />
        <Route
          element={
            <ProtectedRoute>
              <PageLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<HomePage />} />
          <Route path="search" element={<Search />} />
          {/* <Route path="dailyplay" element={<DailyPlay />} /> */}
          <Route path="quickplay" element={<QuickPlayContent quickPlayType="standard" />} />
          <Route path="multi" element={<MultiPlayer />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        {/* <Route path="/" element={<PageLayout />}> */}
          
        {/* </Route> */}
      </Routes>
    </AuthProvider>
  );
}

export default App
