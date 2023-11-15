import { Route, Routes } from "react-router-dom";


import Header from "./components/Header/Header";
import Home from "./pages/Home";
import OurCoffee from "./pages/OurCoffee";
import Pleasure from "./pages/Pleasure";
import Footer from "./components/Footer/Footer";

import "./styles/index.scss"

function App() {
  return (
    <>
       <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ourcoffee" element={<OurCoffee/>}/>
        <Route path="/pleasure" element={<Pleasure/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
