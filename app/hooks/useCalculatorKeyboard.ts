'use client';

import { useEffect } from 'react';

interface KeyboardActions {
    handleNumber: (num: string) => void;
    handleOperator: (op: string) => void;
    handleBackspace: () => void;
    handleClear: () => void;
    handleCalculate: () => void;
    handleDecimal: () => void;
    handlePercent: () => void;
}

export function useCalculatorKeyboard({handleNumber, handleOperator, handleClear, handleCalculate, handleDecimal, handlePercent, handleBackspace}: KeyboardActions) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const { key } = event;

            if (/[0-9]/.test(key)) {
                event.preventDefault();
                handleNumber(key);
            } else if (key === '+') {
                event.preventDefault();
                handleOperator('+');
            } else if (key === '-') {
                event.preventDefault();
                handleOperator('-');
            } else if (key === '*') {
                event.preventDefault();
                handleOperator('×');
            } else if (key === '/') {
                event.preventDefault();
                handleOperator('÷');
            } else if (key === 'Enter' || key === '=') {
                event.preventDefault();
                handleCalculate();
            } else if (key === 'Escape') {
                event.preventDefault();
                handleClear();
            } else if (key === '.' || key === ',') {
                event.preventDefault();
                handleDecimal();
            } else if (key === '%') {
                event.preventDefault();
                handlePercent();
            } else if (key === 'c') {
                event.preventDefault();
                handleClear();
            } else if (key === 'Backspace') {
                event.preventDefault();
                handleBackspace();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNumber, handleOperator, handleCalculate, handleClear, handleDecimal, handlePercent, handleBackspace]);
}