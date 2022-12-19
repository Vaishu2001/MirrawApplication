import logo from './logo.svg';
import './App.css';
import Home from './Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductResult from './components/ProductResult';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts/sign_up" element={<SignUp />} />
        <Route path="/accounts/sign_in" element={<SignIn />} />
        <Route path="/store" element={<ProductResult />} />
  </Routes>
  </BrowserRouter>
  
    </div>
  );
}

export default App;
