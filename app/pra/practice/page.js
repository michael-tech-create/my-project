"use client"

import { useState } from "react";

export default function PraticePage() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    if (value === "C") {
      // clear everything
      setDisplay("");
      setResult(null);
    } else if (value === "=") {
      try {
        // safer evaluation than eval()
        const evalResult = Function(`'use strict'; return (${display})`)();
        setResult(evalResult);
        setDisplay(String(evalResult));
      } catch {
        setDisplay("Error");
        setResult(null);
      }
    } else {
      // append value to display
      if (display === "Error") {
        setDisplay(value);
      } else {
        setDisplay(display + value);
        if (result !== null) {
          setResult(null);
        }
      }
    }
  };

  return (
    <main className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white/80 shadow-lg backdrop-blur-sm p-6 rounded-xl w-80">
        {/* Display */}
        <div className="bg-black/10 text-black text-2xl text-right px-3 mb-4 py-4 rounded break-all">
          {display || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {["9","8","7","/","6","5","4","*","3","2","1","-","0",".","=","+"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={`${
                ["+","-","*","/"].includes(btn)
                  ? "text-white bg-red-500 hover:bg-red-600/40"
                  : btn === "="
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "text-black bg-black/10 hover:bg-yellow-500"
              } rounded-md shadow-lg py-2`}
            >
              {btn}
            </button>
          ))}

          {/* Clear button */}
          <button
            onClick={() => handleClick("C")}
            className="bg-blue-500 text-white py-3 rounded col-span-4 hover:bg-blue-600"
          >
            C
          </button>
        </div>
      </div>
    </main>
  );
}
