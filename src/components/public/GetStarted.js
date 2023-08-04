import React, {useState} from "react";
import TopBar from "../TopBar";

const GetStarted = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (event) => {
    const value = parseInt(event.target.value);

    if (value > 20) {
      const calculatedResult = ((value / 12) * 1.15).toFixed(2);
      setResult(calculatedResult);
    } else {
      setResult('');
    }

    setInputValue(event.target.value);
  };


    return (
    <div>
        <TopBar/>
        <h1 style={{textAlign:'center'}} >How It Works</h1>
        <div class="how-it-works">
          <div class="step">
            {/* <h2 class="step-title">Step 1</h2> */}
            <p class="step-description">Enter the annual subscription price</p>
          </div>
          <div class="step">
            {/* <h2 class="step-title">Step 2</h2> */}
            <p class="step-description">Jybe will issue you a virtual credit card to pay the upfront cost</p>
          </div>
          <div class="step">
            {/* <h2 class="step-title">Step 3: Proceed to Checkout</h2> */}
            <p class="step-description">You use the card to purchase the annual subscription option</p>
          </div>
          <div class="step">
            {/* <h2 class="step-title">Step 4: Complete Order</h2> */}
            <p class="step-description">Jybe will bill you monthly at a discount from the subscription's monthly price</p>
          </div>
        </div>
        <h1 style={{textAlign:'center'}} >See how much you'd save</h1>
        <div class="savings" >
          <input class="step" type="number" value={inputValue} onChange={handleChange} placeholder="Insert $$$ here" style={{ color: 'white', border:'none' }}/>
          <span class="step" >Your monthly cost would be ${result || '...'}</span>
          <a class="step step-description" href="/signup">Continue</a>
        </div>
        <div style={{display:'flex', justifyContent: 'center'}} >
          
        </div>
  </div>
    )
}

export default GetStarted