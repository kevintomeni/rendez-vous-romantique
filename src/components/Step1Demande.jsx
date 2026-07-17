import { useState, useRef } from 'react'

export default function Step1Demande({ onOui }) {
  const [nonStyle, setNonStyle] = useState({})
  const nonRef = useRef(null)

  const fuyardHandler = () => {
    const maxTop = window.innerHeight - 60
    const maxLeft = window.innerWidth - 120
    setNonStyle({
      position: 'absolute',
      top: Math.random() * maxTop + 'px',
      left: Math.random() * maxLeft + 'px',
      transition: 'all 0.15s ease-out',
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 animate-fade-in-up">
      <div className="animate-float mb-6">
        <span className="text-7xl">🌸</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4"
          style={{ color: '#D81B60' }}>
        Veux-tu sortir avec moi ? 🌸
      </h1>

      <div className="mt-10 flex flex-col items-center gap-4 relative w-full max-w-md">
        <button
          onClick={onOui}
          className="px-10 py-4 rounded-full text-xl font-bold text-white shadow-lg hover:shadow-xl
                     transform hover:scale-105 transition-all duration-200 cursor-pointer animate-pulse-heart"
          style={{ background: 'linear-gradient(135deg, #FF69B4, #D81B60)' }}
        >
          OUI ♥
        </button>

        <button
          ref={nonRef}
          onMouseEnter={fuyardHandler}
          onTouchStart={fuyardHandler}
          style={nonStyle}
          className="px-8 py-3 rounded-full text-lg font-medium border-2 border-gray-300 text-gray-400
                     hover:text-gray-500 hover:border-gray-400 bg-white/80 backdrop-blur cursor-pointer
                     transition-colors duration-200"
        >
          Non...
        </button>
      </div>
    </div>
  )
}
