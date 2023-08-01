import React, { createContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './Loading';
import { useNavigate } from "react-router-dom";

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