import React, { useState } from 'react';

export default function CalculatorApp() {
  const [display, setDisplay] = useState('0');
  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

  const handleClick = (btn) => {
    if (btn === 'C') {
      setDisplay('0');
    } else if (btn === '=') {
      try {
        setDisplay(String(eval(display)));
      } catch {
        setDisplay('Error');
      }
    } else {
      setDisplay(display === '0' ? btn : display + btn);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <div className="bg-black/40 border border-white/10 rounded-xl p-6 mb-6">
          <div className="text-white text-right text-4xl font-bold break-all">{display}</div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => handleClick(btn)}
              className="bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-xl p-6 text-xl font-bold transition active:scale-95"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}