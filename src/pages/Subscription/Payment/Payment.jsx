import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = ({ subscriptionOption }) => {


    return (
        <div>
        <SectionTitle heading="" />
        <h2>Payment</h2>
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm
              subscriptionOption={subscriptionOption}
            />
          </Elements>
        </div>
      </div>
    );
};

export default Payment;