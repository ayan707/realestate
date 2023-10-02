import { useEffect, useState } from "react";
import "./App.css";

import {BsHouseHeart} from 'react-icons/bs'
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailCard from "./pages/DetailCard/DetailCard";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <>
      {isLoading ? (
        <>
          <div className="loading__screen">
            <div>
            <BsHouseHeart className="house__logo"/>
            </div>
            <h1 className="house__name">Housely</h1>
            <p>Housely is reimagining real estate to make it easier to unlock life next chapter.</p>
          </div>
        </>
      ) : (
        <>

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route index element={<Home/>}/>
              <Route path="detail/:id" element={<DetailCard/>}/>
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
