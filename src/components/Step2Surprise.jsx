export default function Step2Surprise({ onSuite }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 animate-fade-in-up">
      <div className="text-6xl mb-6 animate-float">🥹</div>

      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6"
          style={{ color: '#D81B60' }}>
        Attends, tu as vraiment dit OUI ?! 🥹
      </h1>

      <p className="text-lg text-gray-500 text-center mb-10 max-w-md">
        J'étais prêt·e à ce que tu dises non...
      </p>

      <button
        onClick={onSuite}
        className="px-8 py-4 rounded-full text-lg font-bold text-white shadow-lg hover:shadow-xl
                   transform hover:scale-105 transition-all duration-200 cursor-pointer"
        style={{ background: 'linear-gradient(135deg, #FF69B4, #D81B60)' }}
      >
        D'accord, on continue ! ✨
      </button>
    </div>
  )
}
