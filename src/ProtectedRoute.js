import React, { createContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './Loading';
import { useNavigate } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL
export const AccountContext = createContext();

export const ProtectedRoute = ({ component: Component, ...props }) => {
  const [accountContext, setAccountContext] = useState({});
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, user } = useAuth0();
  const [accessToken, setAccessToken] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.search.includes('?error=access_denied&error_description=Please%20verify%20your%20email%20before%20continuing.')) {
      navigate("/IntermediateScreen")
    }
  })

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently();
      setAccessToken(token)
      token && fetch(`${API_URL}/users/get`, {
        method : "GET",
        headers:{
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(res => {
        if (res[0]) {
          console.log('context res',res[0])
          // if (res[0].customer_id == null) navigate("/approved")
            setAccountContext((prevContext) => ({user: res[0], prevContext}))
            // toast.error('You appear to already have an account, please click the testing reset button.')
            //navigate("/approved")
        }
    })
    }
    getToken()
  },[])

    if (window.location.search.includes('?error=access_denied&error_description=Please%20verify%20your%20email%20before%20continuing.')) {
      navigate("/IntermediateScreen?noerror")
    }  
    else if (isLoading) {
          return <Loading />; // Render a loading indicator while authentication state is being determined
        }
    else if (isAuthenticated) {
          return (
            <AccountContext.Provider value={{ accountContext, setAccountContext, user, accessToken, navigate }}>
              <Component/>
            </AccountContext.Provider>
          ); // User is authenticated, render the component
        }
    else loginWithRedirect()
}