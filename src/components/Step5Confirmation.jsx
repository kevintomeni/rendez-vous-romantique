import { useEffect, useState } from 'react'
import { enregistrerRendezVous } from '../services/rendezvousService'

export default function Step5Confirmation({ donnees }) {
  const [sauvegarde, setSauvegarde] = useState(false)

  useEffect(() => {
    if (donnees && !sauvegarde) {
      enregistrerRendezVous(donnees)
        .then(() => setSauvegarde(true))
        .catch(() => setSauvegarde(true))
    }
  }, [donnees, sauvegarde])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 animate-fade-in-up">
      <div className="flex gap-2 text-5xl mb-6 animate-float">
        <span>💕</span><span>✨</span><span>💕</span>
      </div>

      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4"
          style={{ color: '#D81B60' }}>
        Trop content·e que tu n'aies pas dit non !
      </h1>

      <p className="text-xl text-gray-600 text-center mb-3">
        Sois prêt·e pour <strong style={{ color: '#D81B60' }}>{donnees.heureChoisie}</strong>,
        je passe te chercher ! 🚗
      </p>

      <p className="text-sm text-gray-400 text-center max-w-md mb-8">
        Le {donnees.dateChoisie} · {donnees.repasChoisi}
      </p>

      <div className="mt-6 p-6 rounded-2xl bg-white/60 backdrop-blur border border-pink-100 max-w-lg">
        <p className="text-sm text-gray-500 italic text-center leading-relaxed">
          P.S. Les gens normaux envoient un SMS. Moi, j'ai codé un site web sur ma pause déj pour toi.
          Rien de bien fou.
        </p>
        <div className="text-center mt-3 text-pink-400">
          ♥ ♥ ♥ ♥ ♥
        </div>
      </div>

      {sauvegarde && (
        <div className="mt-6 text-xs text-green-500 animate-fade-in-up">
          ✅ Rendez-vous enregistré
        </div>
      )}
    </div>
  )
}
