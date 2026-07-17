import { useState, useRef, useCallback } from 'react'

export default function Step1Demande({ onOui }) {
  const [nonPos, setNonPos] = useState({ top: null, left: null })
  const [moved, setMoved] = useState(false)

  const fuyardHandler = useCallback(() => {
    const maxTop = window.innerHeight - 70
    const maxLeft = window.innerWidth - 130
    setNonPos({
      top: Math.random() * maxTop,
      left: Math.random() * maxLeft,
    })
    setMoved(true)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 animate-fade-in-up">
      <div className="animate-float mb-6">
        <span className="text-7xl">🌸</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4"
          style={{ color: '#D81B60' }}>
        Veux-tu sortir avec moi ? 🌸
      </h1>

      <div className="mt-10 flex flex-col items-center gap-4 relative w-full max-w-md min-h-[160px]">
        <button
          onClick={onOui}
          className="px-10 py-4 rounded-full text-xl font-bold text-white shadow-lg hover:shadow-xl
                     transform hover:scale-105 transition-all duration-200 cursor-pointer animate-pulse-heart z-10"
          style={{ background: 'linear-gradient(135deg, #FF69B4, #D81B60)' }}
        >
          OUI ♥
        </button>

        <button
          onMouseEnter={fuyardHandler}
          onTouchStart={fuyardHandler}
          className={`px-8 py-3 rounded-full text-lg font-medium border-2 border-gray-300 text-gray-400
                     hover:text-gray-500 hover:border-gray-400 bg-white/80 backdrop-blur cursor-pointer
                     transition-colors duration-200 select-none
                     ${moved ? 'absolute' : 'relative'}`}
          style={moved ? { top: nonPos.top + 'px', left: nonPos.left + 'px', transition: 'top 0.2s ease-out, left 0.2s ease-out' } : {}}
        >
          Non...
        </button>
      </div>
    </div>
  )
}
