'use client';

import { useState } from 'react';

export default function Converter() {
    const [converterType, setConverterType] = useState<'temp' | 'currency'>('temp');

    const [celsius, setCelsius] = useState<string>('');
    const [fahrenheit, setFahrenheit] = useState<string>('');

    const [cad, setCad] = useState<string>('');
    const [usd, setUsd] = useState<string>('');
    const [eur, setEur] = useState<string>('');

    const EXCHANGE_RATE_USD = 0.71;
    const EXCHANGE_RATE_EUR = 0.61;

    const handleCelsiusChange = (val: string) => {
        setCelsius(val);
        const num = parseFloat(val);
        if (isNaN(num)) {
            setFahrenheit('');
        } else {
            setFahrenheit(((num * 9) / 5 + 32).toFixed(2));
        }
    };

    const handleFahrenheitChange = (val: string) => {
        setFahrenheit(val);
        const num = parseFloat(val);
        if (isNaN(num)) {
            setCelsius('');
        } else {
            setCelsius((((num - 32) * 5) / 9).toFixed(2));
        }
    };

    const handleCadChange = (val: string) => {
        setCad(val);
        const num = parseFloat(val);
        if (isNaN(num)) {
            setUsd('');
            setEur('');
        } else {
            setUsd((num * EXCHANGE_RATE_USD).toFixed(2));
            setEur((num * EXCHANGE_RATE_EUR).toFixed(2));
        }
    };

    const handleUsdChange = (val: string) => {
        setUsd(val);
        const num = parseFloat(val);
        if (isNaN(num)) {
            setCad('');
            setEur('');
        } else {
            const cadValue = num / EXCHANGE_RATE_USD;
            setCad(cadValue.toFixed(2));
            setEur((cadValue * EXCHANGE_RATE_EUR).toFixed(2));
        }
    };

    const handleEurChange = (val: string) => {
        setEur(val);
        const num = parseFloat(val);
        if (isNaN(num)) {
            setCad('');
            setUsd('');
        } else {
            const cadValue = num / EXCHANGE_RATE_EUR;
            setCad(cadValue.toFixed(2));
            setUsd((cadValue * EXCHANGE_RATE_USD).toFixed(2));
        }
    };

    return (
        <div className="w-full text-left text-white">
            <div className="flex gap-2 mb-6">
                <button
                    onClick={() => setConverterType('temp')}
                    className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                        converterType === 'temp' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                >
                    Température
                </button>
                <button
                    onClick={() => setConverterType('currency')}
                    className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                        converterType === 'currency' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                >
                    Devises (CAD / USD / EUR)
                </button>
            </div>

            {converterType === 'temp' && (
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs text-gray-400 mb-1">Celsius (°C)</label>
                        <input
                            type="number"
                            value={celsius}
                            onChange={(e) => handleCelsiusChange(e.target.value)}
                            placeholder="0"
                            className="w-full bg-gray-950 border border-gray-700 rounded-xl p-3 text-white text-lg focus:outline-none focus:border-orange-500 transition"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-400 mb-1">Fahrenheit (°F)</label>
                        <input
                            type="number"
                            value={fahrenheit}
                            onChange={(e) => handleFahrenheitChange(e.target.value)}
                            placeholder="32"
                            className="w-full bg-gray-950 border border-gray-700 rounded-xl p-3 text-white text-lg focus:outline-none focus:border-orange-500 transition"
                        />
                    </div>
                </div>
            )}

            {converterType === 'currency' && (
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs text-gray-400 mb-1">Dollars Canadiens (CAD)</label>
                        <input
                            type="number"
                            value={cad}
                            onChange={(e) => handleCadChange(e.target.value)}
                            placeholder="0"
                            className="w-full bg-gray-950 border border-gray-700 rounded-xl p-3 text-white text-lg focus:outline-none focus:border-orange-500 transition"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-400 mb-1">Dollars Américains (USD)</label>
                        <input
                            type="number"
                            value={usd}
                            onChange={(e) => handleUsdChange(e.target.value)}
                            placeholder="0"
                            className="w-full bg-gray-950 border border-gray-700 rounded-xl p-3 text-white text-lg focus:outline-none focus:border-orange-500 transition"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-400 mb-1">Euros (EUR)</label>
                        <input
                            type="number"
                            value={eur}
                            onChange={(e) => handleEurChange(e.target.value)}
                            placeholder="0"
                            className="w-full bg-gray-950 border border-gray-700 rounded-xl p-3 text-white text-lg focus:outline-none focus:border-orange-500 transition"
                        />
                    </div>
                    <div className="text-[10px] text-gray-500 italic text-center mt-2 space-y-1">
                        <p>* Taux de change approximatif (1 CAD ≈ {EXCHANGE_RATE_USD} USD)</p>
                        <p>* Taux de change approximatif (1 CAD ≈ {EXCHANGE_RATE_EUR} EUR)</p>
                    </div>
                </div>
            )}
        </div>
    );
}