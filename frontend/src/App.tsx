import { Routes, Route, Navigate } from 'react-router-dom'
import HomeView from './views/HomeView'
import InfoBar from './components/InfoBar';

function App() {
  return (
    <>
      <InfoBar/>
      <Routes>
        <Route path="/" element= {<HomeView/>}/>
        <Route path="/Si" element={<h1>Si</h1>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </>
  )
}

export default App
