import React, { useEffect, useState } from "react";
import { useLocation , useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar/Navbar";
import { getRequest } from "../../networkcall/requests";
import Dashboard from "../../components/dashboard/Dashboard";

function Analytics() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user_email,setEmail] = useState("");
  const [data,setData] = useState({});

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    let email = searchParams.get("email");
    if(email){
       localStorage.setItem("email", email);
    }else{
       email = localStorage.getItem("email");
    }

    if(!email) {
      navigate('/');
      return;
    }
    setEmail(email);
  
  }, [location.search]);

  const handleAnalytics = async () => {
    try {
      const json = await getRequest(`/account/analytics?email=${user_email}`);
      setData(json);
    } catch (error) {
      console.error("An error occurred while fetching analytics:", error);
    }
  };

  useEffect(() => {
    if(!user_email) return;
    handleAnalytics(); 
  }, [user_email]);



  return(
    <>
    <NavBar isAnalytics={true} />
     <Dashboard data={data} />
    </>

  )
}

export default Analytics;
