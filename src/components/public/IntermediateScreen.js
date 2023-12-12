// IntermediateScreen.js
import React from 'react';
import { Button } from "../elements/Button";
import { Footer } from "../elements/Footer.js"
import { Navbar } from "../elements/Navbar.js";
import { useAuth0 } from '@auth0/auth0-react';
import "./denied.css"

const IntermediateScreen = () => {
    const { loginWithRedirect } = useAuth0();

    const handleContinue = () => {
            loginWithRedirect({
                openUrl: () => window.location.replace(`/select_subscription`)
            })
    };

    return (
        <div className="container">
            <div className="section">
                <div className="form-wrapper">
                    <div className="form">
                        <img
                            className="no-internet"
                            alt="No internet"
                            src="/sadelephant.png"
                        />
                        <p className="oh-no-sorry-you-do">
                            <span className="text-wrapper">Please check your inbox for a verification email then click continue</span>
                        </p>
                        <div className="button-wrapper">
                            <Button
                                className="button-instance"
                                icon="right"
                                size="lg"
                                state="default"
                                text="Continue"
                                type="primary"
                                onClick={handleContinue}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Navbar />
        </div>
    );
};

export default IntermediateScreen;