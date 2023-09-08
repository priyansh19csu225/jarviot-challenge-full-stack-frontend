import React from 'react';
import './Navbar.css';
import { getRequest } from '../../networkcall/requests';
import { useNavigate } from "react-router-dom";

function NavBar({isAnalytics}) {


  const navigate = useNavigate();
  const handleRevokeButton = async () => {
    try{
     const email = localStorage.getItem('email');
     const res = await getRequest(`/account/revoke?email=${email}`);
     console.log(res);
     localStorage.removeItem('email');
     navigate('/', { replace: true });
    }catch(e){
      console.log(e);
    }
  };

  
  return (
    <div className="navbar">
     
        {
          isAnalytics ?  
          (<div className="navbar-title">

          <button className="revoke-button" onClick={handleRevokeButton}>Revoke Access</button>
          Drive Scan
        </div>): (

      <div className="navbar-title">
        Drive Scan
      </div>
        )
        }
       
    </div>
  );
}

export default NavBar;
