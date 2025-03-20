import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import { BanquetHalls } from './pages/BanquetHalls';
import { TravelServices } from './pages/TravelServices';
import { RoomDetails } from './pages/RoomDetails';
import { BanquetDetails } from './pages/BanquetDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:id" element={<RoomDetails />} />
          <Route path="banquet-halls" element={<BanquetHalls />} />
          <Route path="banquet-halls/:id" element={<BanquetDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;