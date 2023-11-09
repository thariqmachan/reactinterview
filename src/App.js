
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Landing from './pages/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Canteen from './pages/Canteen';

function App() {
  return (
    <div className="App">
     
    <Header></Header>

      <Routes>
          <Route path='/' element={<Landing></Landing>} ></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/details' element={<Details></Details>}></Route>
          <Route path='/carts' element={<Cart></Cart>}></Route>
          <Route path='/canteen' element={<Canteen></Canteen>}></Route>

      </Routes>

    <Footer></Footer>

    </div>
  );
}

export default App;
