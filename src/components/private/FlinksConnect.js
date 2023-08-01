import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
const API_URL = process.env.REACT_APP_API_URL

const FlinksConnect = () => {
const {getAccessTokenSilently} = useAuth0()

  useEffect(() => {
    console.log(API_URL, ' is api url')
    const handleMessage = async (e) => {
        console.log(API_URL, ' is api url')
      console.log(e.data);
      e.data.loginId && console.log(e.data.loginId)
      if (e.data.loginId) {
        const token = await getAccessTokenSilently();
        fetch(`${API_URL}/flinks/login`, {
            method:'POST',
            headers: {
                Authorization: `Bearer ${token}`,
              },
              body:JSON.stringify({login_id:e.data.loginId})
        })
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <iframe className="flinksconnect" height="760" src="https://toolbox-iframe.private.fin.ag/?demo=true&redirectUrl=https://flinks.com/contact/thank-you&innerRedirect=true"></iframe>
  );
};

export default FlinksConnect;