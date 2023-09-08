import React from 'react'
import './Mainsection.css';
import { getRequest } from '../../networkcall/requests';

function Mainsection() {

    const handleScanButton = async () => {
       const url = await getRequest('/auth/google'); 
       window.open(url.toString(), '_self');
    }
  return (
    <div>

    <div className="message">
      Check if your Google Drive is leaking sensitive data
    </div>
      <button className="get-started-button" onClick={handleScanButton}>Scan Google Drive For Free Now</button>
    </div>
  )
}

export default Mainsection;