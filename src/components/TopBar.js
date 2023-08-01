import React from 'react';
import Grid from '@mui/material/Grid';
import '../css/button.css'

const TopBar = () => {
  return (
    <><Grid container alignItems="center">
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <img width="200" height="auto" src="https://uploads-ssl.webflow.com/6424ac30892aff6926961be1/6424bad5f9f3e680165958ab_Jybelogo23.JPG" alt="Logo" />
      </Grid>
      <Grid item xs={6} sm={8} md={9} lg={10} container justifyContent="flex-end">
        <Grid item xs={2}>
          <a href="/get_started" className="button" >Get Started</a>
        </Grid>
        <Grid item xs={2}>
          <a href="/faq" className="button" >FAQ</a>
        </Grid>
        <Grid item xs={2}>
          <a href="/about" className="button" >About</a>
        </Grid>
        <Grid item xs={2}>
          <a href="/login" className="button" >Login</a>
        </Grid>
      </Grid>
    </Grid>
    {/* <div style={{ marginLeft:'50px', marginRight:'50px',borderBottom: 'solid 2px black'}}/> */}
    </>
  );
};

export default TopBar;
