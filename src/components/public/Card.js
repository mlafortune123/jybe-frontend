import React, {useState} from "react";
import card from '../card.webp'

const Card = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center' }} >
            <h2>Here is your card!</h2>
            <p>You may now go use this to purchase your annual subscription, you will be billed monthly via stripe</p>
            <img src={card} style={{height:'300px'}} />
            <p>Expiry: 03/24 <br/>CCV: 03/24 <br/></p>
        </div>


    )
}

export default Card