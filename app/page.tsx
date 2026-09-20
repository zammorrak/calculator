'use client';

import {useState} from 'react';
import Calculator from './components/Calculator';
import Converter from './components/Converter';



export default function ResponsiveCalculator() {

    const [activeTab, setActiveTab] = useState<'calc' | 'converter'>('calc');

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-900 p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-xs sm:max-w-md md:max-w-lg rounded-2xl bg-gray-800 p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-700 transition-all duration-300">
                <div className="flex bg-gray-950 p-1 rounded-xl mb-6">
                    <button
                        onClick={() => setActiveTab('calc')}
                        className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition ${activeTab === 'calc' ? 'bg-gray-800 text-white shadow' : 'text-gray-400 hover:text-white'}`}
                    >
                        Calculatrice
                    </button>
                    <button
                        onClick={() => setActiveTab('converter')}
                        className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition ${activeTab === 'converter' ? 'bg-gray-800 text-white shadow' : 'text-gray-400 hover:text-white'}`}
                    >
                        Convertisseur
                    </button>
                </div>
                {activeTab === 'converter' ? (
                    <Converter />
                ) : (
                    <Calculator />
                    )}
            </div>
        </main>
    );
}
