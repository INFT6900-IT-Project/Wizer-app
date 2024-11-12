import React from 'react';
import './Payment.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Payment() {


    const [showModal, setShowModal] = useState(false); // controls the modal visibility
    const [userConfirmed, setUserConfirmed] = useState(false);
    const [purchaseSuccess, setPurchaseSuccess] = useState(false); 
    const [loading, setLoading] = useState(false);

    const handlePaymentSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        setShowModal(true); // Show the modal after form submission
    };

    // Handle user confirmation to proceed with payment
    const handleConfirmPayment = () => {
        setUserConfirmed(true); // User confirmed the payment
        setShowModal(false);
        setLoading(true); // Show the loading screen

      // Simulate a 3-second processing delay
        setTimeout(() => {
        setLoading(false); // Hide loading screen
        // Navigate to another page after the delay
        setPurchaseSuccess(true); // This is where you want to redirect after the loading screen
      }, 3000); // 3 seconds delay
         // Pop up the purchase completed
    };

    // Handle user cancellation of payment
    const handleCancelPayment = () => {
        setUserConfirmed(false); // User canceled the payment
        setShowModal(false); // Hide the modal
    };
     
    const history= useHistory()
    const handleFinishPurchase=()=>{
        history.push('/')
    }

    return (
        <div>
            <h1 className='ad-check-out'>Almost There! Finish Your Order</h1>
            <div className='ad-payment-wrap'>
                <div className='ad-payment-left'>
                    <div className='ad-payment-title'>
                        <h2><i class="fa-regular fa-credit-card"></i>Payment</h2>
                    </div>
                    <div className='ad-payment-method'>
                        <h3>Pay with</h3>
                        <h3>Card Number</h3>
                        <form>
                            <input className='ad-payment-card' id='card-number' name="card-number" type="text" placeholder='1234 5678 9012 3456' required />
                        </form>
                    </div>
                    <div className='ad-payment-name'>
                        <h3>Name</h3>
                        <form>
                            <input className='ad-payment-card' id='card-name' name="card-name" type="text" placeholder='Cardholder Name' required />
                        </form>
                    </div>
                    <div className='ad-expiry-cvv'>
                        <div>
                            <h3>Expiry Date</h3>
                            <form>
                                <input className='ad-payment-card' id='ad-expiry-date' name="ad-expiry-date" type="text" placeholder='MM/YY' required />
                            </form>
                        </div>
                        <div>
                            <h3>CVV</h3>
                            <form>
                                <input className='ad-payment-card' id='ad-cvv' name="ad-cvv" type="text" placeholder='123' required />
                            </form>
                        </div>
                    </div>
                    <div className="ad-save-card-checkbox">
                        <input type="checkbox" id="ad-save-card" name="ad-save-card" className="ad-checkbox-input" />
                        <label htmlFor="ad-save-card">Save card details for future purchases</label>
                    </div>
                    <form id="ad-payment-form" onSubmit={handlePaymentSubmit}>
                        <button type="submit" class="ad-pay-button">Pay AUD $120.00</button>
                    </form>

                </div>
                <div className='ad-payment-right'>
                    <div className='ad-order-title'>
                        <h2><i class="fa-solid fa-cart-shopping"></i>Order Summary</h2>
                    </div>
                    <div className='ad-order-details'>
                        <h3>Team Plan</h3>
                        <h3>$120.00</h3>
                    </div>
                    <div className='ad-discount-code'>
                    <form>
                        <input className='ad-discount' id='discount-code' name="discount-code" type="text" placeholder='Gift or discount code' required />
                    </form>
                    <button type="submit" class="ad-apply">Apply</button>
                    </div>
                    <div className='ad-subtotal'>
                        <div className='ad-subtotal-1'>
                        <h3>Subtotal</h3>
                        <h3>$120.00</h3>
                        </div>
                        <div className='ad-subtotal-2'>
                        <h3>Discount</h3>
                        <h3>$0.00</h3>
                        </div>
                    </div>
                    <div className='ad-total-cost'>
                    <div className='ad-total-cost-1'>
                        <h1>Total</h1>
                        <h1>$120.00</h1>
                    </div>  
                    </div>
                    <div className='ad-total-cost-2'>
                        <p>Including $4.00 GST </p>
                    </div>
                    
                    
                    

                </div>
                {showModal && (
                    <div className="ad-payment-confirm">
                        <div className="ad-confirm-content">
                            <h3>Proceed with payment?</h3>
                            <div className="ad-confirm-actions">
                                <button onClick={handleConfirmPayment}>Yes</button>
                                <button onClick={handleCancelPayment}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}

                {loading && (
                    <div className="ad-payment-confirm"> <div className="ad-success-content">
                    <i class="fa-solid fa-spinner fa-spin"></i>
                    <h3>Processing...</h3> </div></div>
                )}

                {purchaseSuccess && (
                    <div className="ad-purchase-success" onClick={handleFinishPurchase}>
                        <div className="ad-success-content">
                            <i class="fa-regular fa-circle-check"></i>
                            <h3>Thank you for your purchase</h3>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    )
}
