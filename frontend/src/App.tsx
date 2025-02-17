import { Routes, Route, Navigate } from 'react-router-dom'

// Views
import HomeView from './views/HomeView'
import ReservationView from './views/ReservationView';

// Components
import InfoBar from './components/InfoBar';
import NavBar from './components/NavBar';
import Background from './components/Background';


function App() {
  return (
    <>
      <InfoBar/>
      <NavBar/>
      <Background/>    
      <Routes>
        <Route path="/" element= {<HomeView/>}/>
        <Route path="/reservation" element={<ReservationView/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </>
  )
}

export default App
