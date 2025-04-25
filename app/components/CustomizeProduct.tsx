// components/ProductCustomization.tsx
'use client'

import React, { useState } from 'react';
import { Customization, KickflipApiResponse } from '../types/kickflip';

type ProductCustomizationProps = {
    productId: string;
};

const CustomizeProduct: React.FC<ProductCustomizationProps> = ({ productId }) => {
    const [customizations, setCustomizations] = useState<Customization>({
        text: '',
        color: '#000000', // Default color
        imageUrl: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCustomizations((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/kickflip', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId,
                    customizations,
                }),
            });

            const data: KickflipApiResponse = await res.json();
            setIsSubmitting(false);

            if (data.success) {
                setResponseMessage('Customization successful!');
            } else {
                setResponseMessage(data.message || 'Something went wrong');
            }
        } catch (error) {
            setIsSubmitting(false);
            setResponseMessage('Error occurred while customizing the product.');
        }
    };

    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Customize Your Product</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Text Customization:</label>
                    <textarea
                        name="text"
                        value={customizations.text}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Add text (e.g., engraving text)"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Choose Color:</label>
                    <input
                        type="color"
                        name="color"
                        value={customizations.color}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Image URL (optional):</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={customizations.imageUrl}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Enter image URL"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 disabled:bg-gray-300"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Customization'}
                </button>
            </form>

            {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>}
        </div>
    );
};

export default CustomizeProduct;
