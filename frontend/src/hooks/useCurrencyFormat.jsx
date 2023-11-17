import { useEffect, useState } from 'react';

function useCurrencyFormat(amount) {
    const [formattedAmount, setFormattedAmount] = useState('');

    useEffect(() => {
        const formatCurrency = (amount) => {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(amount);
        };

        setFormattedAmount(formatCurrency(amount));
    }, [amount]);

    return formattedAmount;
}

export default useCurrencyFormat;
