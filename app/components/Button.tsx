import React from 'react';

interface CalculatorButtonProps {
    onClick: () => void;
    className?: string;
    children: React.ReactNode;
}

export default function Button({ onClick, children, className = "" }: CalculatorButtonProps) {
    const baseButtonClass = "rounded-xl p-3 sm:p-5 md:p-6 text-sm sm:text-lg md:text-xl font-semibold transition active:scale-95";
    return (
        <button onClick={onClick} className={`${baseButtonClass} ${className}`}>
            {children}
        </button>
    );
}