import '../public/modules/Middle.css'

export default function Middle() {
  return (
    <div>
    <div className='top'>
        <h1 className='heading'>Fueling Your Wallet with Instant Refunds</h1>
        <h4>Get Instant Refunds Now and Return Later. Only by Refundberry.</h4>
        <br></br>
        <button className='get-started-button'>Get Started Now</button>
    </div>
    <div className='image-container'>
      <img height="600px" src="../public/assets/palceholder.png" alt=""/>
    </div>
    <div className='steps'>
      <h2>How it Works</h2>
      <div className='steps-section'>
        <div>
          <img src="../public/assets/icons8-1-64.png" alt=""/>
          <h4>Select Refundberry</h4>
          <p>Upload your reciept and total amount to our online platform</p>
        </div>
        <div>
          <img src="../public/assets/icons8-2-64.png" alt=""/>
          <h4>Get Your Instant Refund</h4>
          <p>Your refund will reach your nominated bank in one day tops</p>
        </div>
        <div>
          <img src="../public/assets/icons8-3-64.png" alt=""/>
          <h4>Return/Ship Later</h4>
          <p>Ship or return your items at your convenience</p>
        </div>
      </div>
    </div>
    </div>
  );
}