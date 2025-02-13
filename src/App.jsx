import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './Home';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import About from './About';
import Menu from './Menu';
import MenuItem from './MenuItem'; // Import the new component
import OrderPage from './OrderPage';

const App = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setAnimationComplete(true);
      document.body.style.overflow = 'auto';
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="relative h-screen">
      {!animationComplete && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white">
          <DotLottieReact
            src="https://lottie.host/4601a464-5f18-43f0-a072-719d1cc458fa/Fllj5baWvB.lottie"
            loop
            autoplay
            className="w-auto h-auto max-w-[80%] max-h-[80%]"
          />
        </div>
      )}

      <div
        className={`transition-opacity duration-1000 ${animationComplete ? 'opacity-100' : 'opacity-0'}`}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/process" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/menu/:menu_item" element={<MenuItem />} /> 
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
