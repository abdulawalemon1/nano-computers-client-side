import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/purchase' element={<Purchase />}></Route>
        <Route path='/dashboard' element={<Purchase />}></Route>
        <Route path='/blogs' element={<Purchase />}></Route>
        <Route path='/portfolio' element={<Purchase />}></Route>
        <Route path='/login' element={<Purchase />}></Route>
        <Route path='*' element={<Purchase />}></Route>
      </Routes>

    </div>
  );
}

export default App;
