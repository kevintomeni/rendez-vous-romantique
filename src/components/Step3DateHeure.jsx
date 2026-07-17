import { useState } from 'react'

function obtenirDateMinimale() {
  return '2026-08-17'
}

const heures = []
for (let h = 8; h <= 23; h++) {
  for (let m = 0; m < 60; m += 30) {
    heures.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`)
  }
}

export default function Step3DateHeure({ onValider }) {
  const [date, setDate] = useState('')
  const [heure, setHeure] = useState('')

  const valider = () => {
    if (date && heure) {
      onValider({ dateChoisie: date, heureChoisie: heure })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 animate-fade-in-up">
      <div className="text-6xl mb-6 animate-float">📅</div>

      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8"
          style={{ color: '#D81B60' }}>
        Alors... quand es-tu disponible ? 📅
      </h1>

      <div className="flex flex-col gap-5 w-full max-w-sm">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-500">Choisis une date</label>
          <input
            type="date"
            min={obtenirDateMinimale()}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 text-lg
                       focus:outline-none focus:border-pink-400 bg-white/80 backdrop-blur
                       transition-colors duration-200"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-500">Choisis une heure</label>
          <select
            value={heure}
            onChange={(e) => setHeure(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 text-lg
                       focus:outline-none focus:border-pink-400 bg-white/80 backdrop-blur
                       transition-colors duration-200 cursor-pointer"
          >
            <option value="">-- Sélectionne une heure --</option>
            {heures.map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>
        </div>

        <button
          onClick={valider}
          disabled={!date || !heure}
          className={`mt-4 px-8 py-4 rounded-full text-lg font-bold text-white shadow-lg
                     transform transition-all duration-200 cursor-pointer
                     ${date && heure
                       ? 'hover:shadow-xl hover:scale-105'
                       : 'opacity-50 cursor-not-allowed'}`}
          style={{ background: 'linear-gradient(135deg, #FF69B4, #D81B60)' }}
        >
          Valider la date ! ♥
        </button>
      </div>
    </div>
  )
}
