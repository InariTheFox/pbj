import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import PageContainer from './layouts/PageContainer';
import AboutPage from './pages/About';
import CommissionsPage from './pages/Commissions';
import NotFoundPage from './pages/NotFound';

const App: React.FC = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<PageContainer {...{ sidebarOpen: sidebarOpen, setSidebarOpen: setSidebarOpen }}><HomePage {...{ sidebarOpen: sidebarOpen }} /></PageContainer>} />
      {/* Add new routes below here only! */}
      <Route path="about" element={<PageContainer {...{ sidebarOpen: sidebarOpen, setSidebarOpen: setSidebarOpen }}><AboutPage /></PageContainer>} />
      <Route path="commissions" element={<PageContainer {...{ sidebarOpen: sidebarOpen, setSidebarOpen: setSidebarOpen }}><CommissionsPage /></PageContainer>} />
      {/* Add new routes above here only! */}
      <Route path="*" element={<PageContainer {...{ sidebarOpen: sidebarOpen, setSidebarOpen: setSidebarOpen }}><NotFoundPage /></PageContainer>} />
    </Routes>
  );
}

export default App;
