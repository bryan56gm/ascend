import { useEffect } from 'react'
// Libs
import { Sakura } from '../components/sakura/Sakura'
import '../components/sakura/sakura.min.css'

export default function useSakura () {
  const sakuraOptions = {
    lifeTime: 8000,
    colors: [
      {
        gradientColorStart: 'red',
        gradientColorEnd: 'red',
        gradientColorDegree: 120
      }
    ]
  }

  useEffect(() => {
    let sakuraInstance

    const initializeSakura = async () => {
      await new Promise(resolve => setTimeout(resolve, 4000)) // Espera 4 segundos para continuar con la inicialización
      sakuraInstance = new Sakura('main', sakuraOptions)
    }

    initializeSakura()

    return () => {
      if (sakuraInstance) {
        sakuraInstance.stop(true) // Pasa 'true' para finalizar la animación de los pétalos suavemente
      }
    }
  }, [])
}
