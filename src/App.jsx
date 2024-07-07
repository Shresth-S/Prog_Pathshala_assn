import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Header from './components/Header';

import { useEffect, useState } from 'react';
import { CgDarkMode } from 'react-icons/cg';
import Home2 from './pages/Home2';

export default function App() {
  let [isDark, setIsDark] = useState(localStorage.getItem("isDark") ? localStorage.getItem("isDark") : "light");

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
    const localtheme = localStorage.getItem("isDark");
    document.documentElement.setAttribute('data-theme', localtheme);
  }, [isDark]);

  const handleTheme = () => {
    console.log("clicked");
    if (isDark==="dark") {      
      setIsDark("light");
    } else {
      setIsDark("dark");
    }
  }

  return (
    <BrowserRouter>
      <div className='flex-row'>
        <Header />
        <button className='absolute top-6 right-36' onClick={handleTheme}>
          <CgDarkMode className='text-3xl pb-1 text-slatedark' />
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home2/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/about" element={<About/>} />
      </Routes>

    </BrowserRouter>
  );
};

