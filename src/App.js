
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login/Login';
import Homepage from './components/Home/Homepage';
import Signup from './components/login/Signup';
import Home from './components/Components/Home';
import UserRegister from './components/Components/UserRegister';
import UserLogin from './components/Components/UserLogin';

import AdminLoginForm from './components/Components/AdminLoginForm';

import About from './components/Components/About';
import Footer from './components/Components/Footer';
import Navbar from './components/Components/UserNav';
import AdminNav from './components/Components/AdminNav';
import Works from './components/Components/Works';
import Places from './components/Components/Places';
import Search from './components/psearch/Search';

function App() {
  return (
    <div className="App">
{/* <View/> */}
<BrowserRouter>
<Routes>
<Route path='/' element={<Homepage/>}></Route>
  <Route path='/Login' element={<Login/>}></Route>
  <Route path='/Signup' element={<Signup/>}></Route>
  <Route path="/Home" element={<Home />} />
      <Route path="/userRegister" element={<UserRegister />} />
      <Route path="/userLogin" element={<UserLogin/>} />
      
      <Route path="/adminLogin" element={<AdminLoginForm/>} />

      <Route path="/about" element={<About/>} />
      <Route path="/footer" element={<Footer/>} />
      <Route path="/Nav" element={<Navbar/>} />
      <Route path="/AdminNav" element={<AdminNav/>} />
      <Route path="/work" element={<Works/>} />
      <Route path="/Places" element={<Places/>} />
      <Route path="/Search" element={<Search/>} />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
