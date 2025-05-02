'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface LineItem {
    variantId: string;
    quantity: number;
}

const CheckoutPage = () => {
    const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
    const [email, setEmail] = useState<string>('');
    const [lineItems, setLineItems] = useState<LineItem[]>([
        { variantId: 'variant-id', quantity: 1 }, // Replace with actual variant ID and quantity
    ]);
    const router = useRouter();

    useEffect(() => {
        const createCheckout = async () => {
            try {
                const response = await fetch('/api/create-checkout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ lineItems, email }),
                });

                const data = await response.json();
                if (data.webUrl) {
                    setCheckoutUrl(data.webUrl); // Store the checkout URL returned from Shopify
                } else {
                    console.error('Error creating checkout:', data.error);
                }
            } catch (error) {
                console.error('Checkout creation failed:', error);
            }
        };

        createCheckout();
    }, [lineItems, email]);

    const handleCheckout = () => {
        if (checkoutUrl) {
            window.location.href = checkoutUrl; // Redirect to Shopify's hosted checkout page
        } else {
            alert('Checkout URL not available. Please try again.');
        }
    };

    return (
        <div>
            <h1>Your Checkout</h1>
            <div>
                <label>Email: </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
            </div>

            <div>
                <h2>Cart Items:</h2>
                {lineItems.map((item, index) => (
                    <div key={index}>
                        <p>Variant ID: {item.variantId}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))}
            </div>

            <button onClick={handleCheckout} disabled={!checkoutUrl}>
                Proceed to Checkout
            </button>
        </div>
    );
};

export default CheckoutPage;
