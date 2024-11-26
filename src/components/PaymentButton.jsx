import { useEffect } from 'react';

const PaymentButton = () => {
  useEffect(() => {
    // index.js or App.js
window.alert = function () {};

    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_OYA34voqWAgLpY');
    script.async = true;
    document.getElementById('razorpay-container').appendChild(script);

    return () => {
      // Clean up script when component is unmounted
      document.getElementById('razorpay-container')?.removeChild(script);
    };
  }, []);

  return (
    <form>
      <div id="razorpay-container">
      <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_OYAoQGg5x7RXk4" async> </script> 
      </div>
    </form>
  );
};

export default PaymentButton;
