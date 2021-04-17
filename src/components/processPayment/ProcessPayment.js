import React from 'react';
import {CardElement, Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCartForm from './SimpleCartForm';

const stripePromise = loadStripe('pk_test_51IfrQbLVLgrsCNX5LQ9ej3byM5VukBBKtuIdzWvGXHn8ha8syUIJVmqJAcMiPqDnrOKiEhPDiilEkCZxv1C4ht0M00EzFIm3yd');


const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCartForm handlePayment={handlePayment}></SimpleCartForm>
         
    </Elements>
   );
};

export default ProcessPayment;