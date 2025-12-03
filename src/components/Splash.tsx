import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = { onComplete: () => void }

const steps = [
  'Chargement du site web…',
  'Initialisation du thème…',
  'Initialisation des animations…',
  'Vérification des ressources…',
  'Chargement de la page Présentation…',
  'Chargement des expériences…',
  'Chargement des créations…',
  'Préparation du header…',
  'Démarrage du router…',
  'Prêt.',
]

export default function Splash({ onComplete }: Props) {
  const [showSpinner, setShowSpinner] = useState(true)
  const [showBox, setShowBox] = useState(false)

  useEffect(() => {
    const spinnerDuration = 2500
    const boxIntro = 600
    const stepDelay = 700
    const endPadding = 900
    const total = spinnerDuration + boxIntro + steps.length * stepDelay + endPadding
    const tEnd = setTimeout(onComplete, total)
    const tSpinner = setTimeout(() => {
      setShowSpinner(false)
      setShowBox(true)
    }, spinnerDuration)
    return () => {
      clearTimeout(tEnd)
      clearTimeout(tSpinner)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="splash"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          {showSpinner && (
            <motion.div
              key="spinner"
              className="splash-spinner"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
        </AnimatePresence>
        {showBox && (
          <motion.div
            className="splash-box"
            initial={{ opacity: 0, y: 18, scale: 0.98, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ type: 'spring', stiffness: 520, damping: 34 }}
          >
            <div className="splash-title">Portofolio Atoshi</div>
            <div className="splash-lines">
              {steps.map((text, i) => (
                <motion.div
                  key={text}
                  className="splash-line"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.7, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="prefix">{'>'}</span> {text}
                  {i === steps.length - 1 && <span className="cursor" />}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

