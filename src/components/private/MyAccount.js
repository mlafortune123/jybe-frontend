import React, { useState, useEffect, useContext } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import TopBar from "../TopBar";
import FlinksConnect from "../private/FlinksConnect";
import { AccountContext } from '../../ProtectedRoute';
const API_URL = process.env.REACT_APP_API_URL
const MyAccount = () => {
    const context = useContext(AccountContext);
    const {accountContext, setAccountContext, user, accessToken, navigate } = context
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        zip: '',
        phone: '',
        dob: '',
        country: '',
        city: '',
        cost: 99,
        merchant_url:'',
        merchant_name:'',
        email: user.email
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({...formData, 'email':user.email})
        fetch(`${API_URL}/users/create`, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({formData})
        })
        .then(response => response.json())
        .then(res => {
            if (res.error) {
                window.alert(res.error)
            }
            else {
                setAccountContext((prevContext) => ({...prevContext ,user_id: res.user_id, order_id : res.user_id, cost: formData.cost}))
                res.approved ? navigate("/approved") : navigate("/denied")
            }
        })
    }

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

        return (
            <Grid container justifyContent="center" alignItems="center" minHeight="100vh">
                <TopBar/>
                <Grid item xs={10} md={10} lg={10}>
                    Your new subscription is less than 5 minutes away! 
                </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <h2>Subscription info</h2>
                    <Grid item xs={12}>
                      <TextField
                        label="Subscription name"
                        fullWidth
                        name="merchant_name"
                        value={formData.merchant_name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Subscription website"
                        fullWidth
                        name="merchant_url"
                        value={formData.merchant_url}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Annual cost"
                        fullWidth
                        name="cost"
                        value={formData.cost}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <p>
                        By clicking below I consent to Jybe sharing my data with and obtaining my credit history
                        and credit score from TransUnion of Canada Inc. in order for Jybe tp assess if credit will be
                        granted. This will not affect my credit score. My consent is valid starting today and for as long
                        as I use Jybes services.
                      </p>
                      <Button type="submit" variant="contained" color="primary" fullWidth>
                        Create order
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          );
                    }
export default MyAccount;