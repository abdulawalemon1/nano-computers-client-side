import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import SignUp from './Pages/SignUp/SignUp';

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
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={<Purchase />}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
