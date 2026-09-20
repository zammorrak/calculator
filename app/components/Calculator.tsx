'use client';
import { useCalculatorKeyboard } from '../hooks/useCalculatorKeyboard';
import {useState} from "react";
import { Delete } from 'lucide-react';
import Button from '../components/Button';
import History from '../components/History';
interface HistoryItem {
    id: string;
    calculation: string;
    result: string;
}
export default function Calculator() {
    const [display, setDisplay] = useState('0');
    const [equation, setEquation] = useState('');
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [showHistory, setShowHistory] = useState(false);

    const handleNumber = (num: string) => {
        setDisplay((prev) => (prev === '0' ? num : prev + num));
    };

    const handleOperator = (op: string) => {
        setEquation(display + ' ' + op + ' ');
        setDisplay('0');
    };

    const handleClear = () => {
        setDisplay('0');
        setEquation('');
    };

    const handleCalculate = () => {
        try {
            const fullExpression = equation + display;
            const result = eval(fullExpression.replace(/×/g, '*').replace(/÷/g, '/'));
            const finalResult = String(result);

            if (equation !== '') {
                const newItem: HistoryItem = {
                    id: crypto.randomUUID(),
                    calculation: fullExpression,
                    result: finalResult
                };
                setHistory((prev) => [newItem, ...prev]);
            }

            setDisplay(finalResult);
            setEquation('');
        } catch {
            setDisplay('Erreur');
        }
    };

    const handleDecimal = () => {
        if (!display.includes('.')) {
            setDisplay((prev) => prev + '.');
        }
    };

    const handlePercent = () => {
        const value = parseFloat(display) / 100;
        setDisplay(String(value));
    };

    const handleToggleSign = () => {
        setDisplay((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev));
    };

    const handleBackspace = () => {
        setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    }

    const handleClearHistory = () => {
        setHistory([]);
    };

    useCalculatorKeyboard({
        handleNumber,
        handleOperator,
        handleClear,
        handleCalculate,
        handleDecimal,
        handlePercent,
        handleBackspace
    });

    const btnGray = "bg-gray-700 text-white hover:bg-gray-600";
    const btnFunction = "bg-gray-700 text-gray-200 hover:bg-gray-600";
    const btnOrange = "bg-orange-500 text-white hover:bg-orange-600";

    return (
        <>
            <div className="mb-4 sm:mb-6 rounded-xl bg-gray-950 p-4 sm:p-6 text-right">
                <div className="h-6 text-xs sm:text-sm text-gray-500 overflow-hidden">{equation}</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wider overflow-hidden truncate">
                    {display}
                </div>
            </div>
            <div className="mb-4 flex justify-between items-center">
                <button
                    onClick={() => setShowHistory((prev) => !prev)}
                    className="text-gray-400 hover:text-gray-300 transition text-sm sm:text-base font-semibold"
                >
                    {showHistory ? 'Masquer l\'historique' : 'Afficher l\'historique'}
                </button>
            </div>
            {showHistory && (
                <div className="mb-4">
                    <History history={history} onClearHistory={handleClearHistory} />
                </div>
            )}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                <Button onClick={handleClear} className="bg-gray-700 text-red-400 hover:bg-gray-600">AC</Button>
                <Button onClick={handleToggleSign} className={btnFunction}>+/-</Button>
                <Button onClick={handlePercent} className={btnFunction}>%</Button>
                <Button onClick={() => handleOperator('÷')} className={btnOrange}>÷</Button>

                <Button onClick={() => handleNumber('7')} className={btnGray}>7</Button>
                <Button onClick={() => handleNumber('8')} className={btnGray}>8</Button>
                <Button onClick={() => handleNumber('9')} className={btnGray}>9</Button>
                <Button onClick={() => handleOperator('×')} className={btnOrange}>×</Button>

                <Button onClick={() => handleNumber('4')} className={btnGray}>4</Button>
                <Button onClick={() => handleNumber('5')} className={btnGray}>5</Button>
                <Button onClick={() => handleNumber('6')} className={btnGray}>6</Button>
                <Button onClick={() => handleOperator('-')} className={btnOrange}>-</Button>

                <Button onClick={() => handleNumber('1')} className={btnGray}>1</Button>
                <Button onClick={() => handleNumber('2')} className={btnGray}>2</Button>
                <Button onClick={() => handleNumber('3')} className={btnGray}>3</Button>
                <Button onClick={() => handleOperator('+')} className={btnOrange}>+</Button>

                <Button onClick={() => handleNumber('0')} className={`${btnGray}`}>0</Button>
                <Button onClick={handleDecimal} className={btnGray}>.</Button>
                <Button onClick={handleBackspace} className={btnGray}><Delete className="w-[2.5em] h-[1em]" /></Button>
                <Button onClick={handleCalculate} className="bg-green-600 text-white hover:bg-green-700">=</Button>
            </div>
        </>
    );
}