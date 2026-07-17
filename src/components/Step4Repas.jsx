import { useState } from 'react'

const choixRepas = [
  { id: 'pizza', label: 'Pizza', emoji: '🍕' },
  { id: 'sushi', label: 'Sushi', emoji: '🍣' },
  { id: 'burgers', label: 'Burgers', emoji: '🍔' },
  { id: 'pates', label: 'Pâtes', emoji: '🍝' },
  { id: 'tacos', label: 'Tacos', emoji: '🌮' },
  { id: 'ramen', label: 'Ramen', emoji: '🍜' },
]

export default function Step4Repas({ onChoix }) {
  const [selection, setSelection] = useState(null)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 animate-fade-in-up">
      <div className="text-6xl mb-6 animate-float">🍽️</div>

      <h1 className="text-2xl md:text-4xl font-bold text-center mb-3"
          style={{ color: '#D81B60' }}>
        Qu'est-ce qui te ferait plaisir ?
      </h1>

      <p className="text-lg text-gray-500 text-center mb-10">
        Choisis ton ambiance 🍽️
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-md mb-8">
        {choixRepas.map((repas) => (
          <button
            key={repas.id}
            onClick={() => setSelection(repas.label)}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2
                        transition-all duration-200 cursor-pointer hover:scale-105
                        ${selection === repas.label
                          ? 'border-pink-400 bg-pink-50 shadow-lg scale-105'
                          : 'border-pink-100 bg-white/80 hover:border-pink-200'}`}
          >
            <span className="text-4xl mb-2">{repas.emoji}</span>
            <span className="text-sm font-medium text-gray-600">{repas.label}</span>
          </button>
        ))}
      </div>

      <button
        onClick={() => onChoix(selection)}
        disabled={!selection}
        className={`px-8 py-4 rounded-full text-lg font-bold text-white shadow-lg
                   transform transition-all duration-200 cursor-pointer
                   ${selection
                     ? 'hover:shadow-xl hover:scale-105'
                     : 'opacity-50 cursor-not-allowed'}`}
        style={{ background: 'linear-gradient(135deg, #FF69B4, #D81B60)' }}
      >
        Valider mon choix ! ♥
      </button>
    </div>
  )
}
