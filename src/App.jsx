import { useState } from 'react'
import Step1Demande from './components/Step1Demande'
import Step2Surprise from './components/Step2Surprise'
import Step3DateHeure from './components/Step3DateHeure'
import Step4Repas from './components/Step4Repas'
import Step5Confirmation from './components/Step5Confirmation'

export default function App() {
  const [etape, setEtape] = useState(1)
  const [donnees, setDonnees] = useState({})

  switch (etape) {
    case 1:
      return <Step1Demande onOui={() => setEtape(2)} />
    case 2:
      return <Step2Surprise onSuite={() => setEtape(3)} />
    case 3:
      return (
        <Step3DateHeure
          onValider={(d) => {
            setDonnees((prev) => ({ ...prev, ...d }))
            setEtape(4)
          }}
        />
      )
    case 4:
      return (
        <Step4Repas
          onChoix={(repasChoisi) => {
            setDonnees((prev) => ({ ...prev, repasChoisi }))
            setEtape(5)
          }}
        />
      )
    case 5:
      return <Step5Confirmation donnees={donnees} />
    default:
      return null
  }
}
