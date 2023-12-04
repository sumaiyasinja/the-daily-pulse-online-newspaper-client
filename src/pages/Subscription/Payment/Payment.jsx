import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useState, useEffect } from "react";

const stripePromise = loadStripe(process.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [clientSecret, setClientSecret] = useState('');

    const subscriptionOptions = [
        {
            label: '1 Minute Trial',
            duration: 60,
            price: 0.00,
        },
        {
            label: '5 Days',
            duration: 5 * 24 * 60 * 60,
            price: 9.99,
        },
        {
            label: '10 Days',
            duration: 10 * 24 * 60 * 60,
            price: 19.99,
        },
    ];

    useEffect(() => {
        if (selectedOption) {
       
            fetch('/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ price: selectedOption.price }),
            })
                .then(response => response.json())
                .then(data => {
                    setClientSecret(data.clientSecret);
                })
                .catch(error => console.error('Error fetching client secret:', error));
        }
    }, [selectedOption]);

    const handleOptionChange = (event) => {
        setSelectedOption(subscriptionOptions.find(option => option.label === event.target.value));
    };

    return (
        <div>
            <SectionTitle heading="Payment" />
            <h1 className="text-3xl font-bold text-center my-8">Select Your Subscription Plan</h1>
            <select value={selectedOption ? selectedOption.label : ''} onChange={handleOptionChange}>
                {subscriptionOptions.map((option) => (
                    <option key={option.label} value={option.label}>
                        {option.label} - ${option.price}
                    </option>
                ))}
            </select>
            <div>
                {selectedOption && (
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            subscriptionOption={selectedOption}
                            clientSecret={clientSecret}
                        />
                    </Elements>
                )}
            </div>
        </div>
    );
};

export default Payment;
