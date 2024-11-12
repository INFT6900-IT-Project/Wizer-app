import React, { useState } from 'react';
import './RegisterCourse.css';
import visaLogo from './image/visa.png';
import mastercardLogo from './image/mastercard.png';
import paypalLogo from './image/paypal.png';

const RegisterCourse = ({ course }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handlePaymentClick = (paymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
  };

  return (
    <div className="registration-form">
      <h2>Enroll in {course?.courseName}</h2>
      <form>
        <label>
          Full Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" required />
        </label>

        <div className="sale-course-price">
          <div className="sale-price-form">
            <span className="original-price">{course?.price}</span>
            <span className="discount-price">{course?.sale}</span>
          </div>
          <div className="total-price">
            Total Price: <del>{course?.sale}</del>
          </div>
        </div>

        <label>Payment Method:</label>
        <div className="payment-logo">
          <span onClick={() => handlePaymentClick('Visa')} aria-label="Visa Payment">
            <img src={visaLogo} alt="Visa Logo" />
          </span>
          <span onClick={() => handlePaymentClick('MasterCard')} aria-label="MasterCard Payment">
            <img src={mastercardLogo} alt="MasterCard Logo" />
          </span>
          <span onClick={() => handlePaymentClick('PayPal')} aria-label="PayPal Payment">
            <img src={paypalLogo} alt="PayPal Logo" />
          </span>
        </div>

        {selectedPaymentMethod && (
          <div className="selected-method">
            <h3>Selected Payment Method: {selectedPaymentMethod}</h3>
          </div>
        )}

        <button type="submit" className="submit-btn">
          Prceddddddddddddd to Payment
        </button>
      </form>
    </div>
  );
};

export default RegisterCourse;

