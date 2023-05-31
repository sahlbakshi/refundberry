import './modules/Middle.css'

export default function Middle() {
  return (
    <div>
    <div className='top-container'>
      <div className='top'>
          <h1 className='heading'>Fueling Your Wallet with Instant Refunds</h1>
          <h4 className='support'>Get Instant Refunds Now and Return Later. Only by Refundberry.</h4>
          <button className='get-started-button'>Get Started ↗</button>
      </div>
      <div>
      </div>
    </div>

    <div className='steps'>
      {/*<h2>How it Works</h2>*/}
      <div className='steps-section'>
        <div>
          <img src="./assets/icons8-click-94.png" alt=""/>
          <h2>01 Select Refundberry</h2>
          <p>Upload your reciept and total amount to our online platform</p>
        </div>
        <div>
          <img src="./assets/icons8-dollar-coin-94.png" alt=""/>
          <h2>02 Get Your Instant Refund</h2>
          <p>Your refund will reach your nominated bank in one day tops</p>
        </div>
        <div>
          <img src="./assets/icons8-package-94.png" alt=""/>
          <h2>03 Return/Ship Later</h2>
          <p>Ship or return your items at your convenience</p>
        </div>
      </div>
    </div>
    </div>
  );
}