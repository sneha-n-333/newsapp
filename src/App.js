import React from 'react';
import Navbar from './components/Navbar';
import Carousal from './components/Carousal'
import Weather from './components/Weather';
import News from './components/News';
import { useState,useRef,useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';


const App = () => {
  const [category, setCategory] = useState('');
  const [language, setLanguage] = useState('en');
  const newsRef = useRef(null);

    const handleSearch = (newCategory, newLanguage) => {
        setCategory(newCategory);
        setLanguage(newLanguage);
        
    };

    useEffect(() => {
        if (category && newsRef.current) {
            const yOffset = -50; 
            const y = newsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, [category]);
  return (
    <div className="App">
      <Navbar onSearch={handleSearch}/>
      <Carousal/>
      <Weather />
      <div ref={newsRef}>
        <News category={category} language={language} />
      </div>
      <Footer/>
    </div>
  );
};

export default App;




