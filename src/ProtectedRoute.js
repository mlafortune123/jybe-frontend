import React, { createContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './Loading';
import { useNavigate } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL
export const AccountContext = createContext();

export const ProtectedRoute = ({ component: Component, ...props }) => {
  const [accountContext, setAccountContext] = useState();
  // const [activeOrders, setActiveOrders] = useState()
  // const [inactiveOrders, setInactiveOrders] = useState()
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, user } = useAuth0();
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
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
          //let inactiveOrder
          let inactiveOrder = res.filter(item => (item.status == "inactive" || (item.status == "abandoned")))[0]
          let activeOrders = res.filter(item => (item.status == "active"))
          let expiredOrders = res.filter(item => (item.status == "expired"))
          console.log(res)
            setAccountContext((prevContext) => ({user: res[0], prevContext, inactiveOrder, activeOrders, expiredOrders}))
            // toast.error('You appear to already have an account, please click the testing reset button.')
            if (inactiveOrder) navigate("/approved")
        }
    })
    }
    getToken()
  },[getAccessTokenSilently])

  const refreshTheClock = () => {
    setRefreshToken(token => !token)
  }

    if (window.location.search.includes('?error=access_denied&error_description=Please%20verify%20your%20email%20before%20continuing.')) {
      navigate("/IntermediateScreen?noerror")
    }  
    else if (isLoading) {
          return <Loading />; // Render a loading indicator while authentication state is being determined
        }
    else if (isAuthenticated) {
          return (
            <AccountContext.Provider value={{ accountContext, setAccountContext, user, accessToken, navigate, refreshTheClock, refreshToken }}>
              <Component/>
            </AccountContext.Provider>
          ); // User is authenticated, render the component
        }
    else loginWithRedirect({
      authorizationParams : {
        prompt: 'select_account'
      }
    })
}