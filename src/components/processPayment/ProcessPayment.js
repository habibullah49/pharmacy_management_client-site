import React from 'react';
import {CardElement, Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51IfrQbLVLgrsCNX5LQ9ej3byM5VukBBKtuIdzWvGXHn8ha8syUIJVmqJAcMiPqDnrOKiEhPDiilEkCZxv1C4ht0M00EzFIm3yd');


const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      
    </Elements>
   );
};

export default ProcessPayment;