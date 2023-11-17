import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import OurCoffee from "./pages/OurCoffee";
import Pleasure from "./pages/Pleasure";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error";

import  {data} from './assets/data'
import {dataBuy} from './assets/data'

import "./styles/index.scss"


function App() {
  const [ourCoffee] = useState(data);
  const [buyCoffee] = useState(dataBuy);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home coffeeData={ourCoffee}/>}/>
        <Route path="/ourcoffee" element={<OurCoffee coffeeBuy={buyCoffee}/>}/>
        <Route path="/pleasure" element={<Pleasure coffeeBuy={buyCoffee}/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
