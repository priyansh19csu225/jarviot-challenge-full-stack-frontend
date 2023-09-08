import React  from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from '../../App';
import Analytics from '../analytics/analytics';


function RoutesComponent() {

  
 
  return (
   
      <BrowserRouter >
       
          <Routes>
            <Route path={'/'} element={<App />} />
            <Route path={'/analytics'} element={<Analytics />} />
            <Route path="*" element={<App />} />
          </Routes>
       
      </BrowserRouter>
   
  );
}

export default RoutesComponent;
