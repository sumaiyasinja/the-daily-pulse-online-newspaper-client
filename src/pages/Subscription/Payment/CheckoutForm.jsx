import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import './card.css'
import toast from "react-hot-toast";

const CheckoutForm = ({ subscriptionOption}) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

console.log("from checkout",subscriptionOption)
  useEffect(() => {
      axiosSecure
        .post("/create-payment-intent", { price: subscriptionOption?.price || 0 })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    
  }, [axiosSecure,subscriptionOption.price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user.email,
          option: subscriptionOption.label,
          duration: subscriptionOption.duration,
          price: subscriptionOption.price,          
          transactionId: paymentIntent.id,
          startDate: new Date(), // subscription start date
          expirationDate: new Date(Date.now() + subscriptionOption.duration * 1000), // subscription expiration date
          status: 'active', 
        };
console.log("date",Date.now() + subscriptionOption.duration * 1000)
        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
        if (res.data?.paymentResult?.insertedId) {
          toast.success("Thanks for subscribing")
         
          navigate("/paymentHistory");
        }
      }
    }
  };

  return (
    <div className="w-2/4 mx-auto">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
          className="custom-card-element"
        />

        <div className="flex justify-center items-center">
        <button
          className="btn bg-slate-900 hover:bg-teal-700 text-white my-4"
          type="submit"
        >
          Subscribe
        </button>
        </div>
        <p className="text-red-600">{error}</p>
        {transactionId && (
          <p className="text-green-600">
            Your transaction id: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
