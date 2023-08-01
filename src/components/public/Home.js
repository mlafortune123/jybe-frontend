import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import TopBar from "../TopBar";


const Home = () => {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isAuthenticated || isLoading) {

  }

  return (
    <div>
      <TopBar />
      <div class="intro-header">
        <div class="intro-content cc-homepage flex-center-wrap">
          <div class="intro-text">
            <div class="heading-jumbo">Unlock Your Digital World With Jybe</div>
            <div class="paragraph-bigger cc-bigger-white-light">BNPL (buy now, pay later) for digital subscriptions
              <br /></div></div><a href="/about" class="button cc-jumbo-button cc-jumbo-white w-inline-block">
            <div>Start jybing</div>
          </a></div></div>
    </div>
  )
};

export default Home;
