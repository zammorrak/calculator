import React from 'react';
import { Trash2 } from 'lucide-react';

interface HistoryItem {
    id: string;
    calculation: string;
    result: string;
}

interface HistoryProps {
    history: HistoryItem[];
    onClearHistory: () => void;
}

export default function History({ history, onClearHistory }: HistoryProps) {
    return (
        <div className="mt-6 border-t border-gray-700 pt-4 w-full text-left">
            <div className="flex items-center justify-between mb-3 text-gray-400 font-semibold text-sm">
                {history.length > 0 && (
                    <button onClick={onClearHistory} className="text-red-400 hover:text-red-300 transition flex items-center gap-1 text-xs">
                        <Trash2 className="w-3.5 h-3.5" />
                        Effacer
                    </button>
                )}
            </div>

            <div className="max-h-40 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {history.length === 0 ? (
                    <p className="text-xs text-gray-500 italic text-center py-2">Aucun calcul récent</p>
                ) : (
                    history.map((item) => (
                        <div key={item.id} className="bg-gray-900/50 rounded-lg p-2 border border-gray-800 text-xs sm:text-sm">
                            <div className="text-gray-500 text-right overflow-hidden text-ellipsis whitespace-nowrap">
                                {item.calculation} =
                            </div>
                            <div className="text-white font-bold text-right text-base mt-0.5 overflow-hidden text-ellipsis">
                                {item.result}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}