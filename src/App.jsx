import React, { useEffect } from 'react';
import ImageGallery from './components/imagegallery/ImageGallery'
import './App.css';
import { useNavigate } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Mainsection from './components/mainsection/Mainsection';

function App() {
 
  const navigate = useNavigate();

  useEffect(() => {
      
      const storedEmail = localStorage.getItem('email');
      
      if (storedEmail) {
       navigate('/analytics');
      }
    }, []);

  return (
    <div>
      <NavBar />
      <div className='main-section'>
      <div className="section-1">
      <Mainsection />
      </div>
      <div className="section-2">
        
    <ImageGallery />
        </div>
        </div>
  </div>
  )
}

export default App
