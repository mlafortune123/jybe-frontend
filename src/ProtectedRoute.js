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
            setAccountContext({user:res[0]})
            window.alert('You appear to already have an account, you will now be redirected to the MyAccount page.')
            //navigate("/approved")
        }
    })
    }
    getToken()
  },[getAccessTokenSilently])

    if (isLoading) {
        return <Loading />; // Render a loading indicator while authentication state is being determined
      }
      else {
    if (isAuthenticated) {
        return (
          <AccountContext.Provider value={{ accountContext, setAccountContext, user, accessToken, navigate }}>
            <Component/>
          </AccountContext.Provider>
        ); // User is authenticated, render the component
      }
    else loginWithRedirect()
    };
}