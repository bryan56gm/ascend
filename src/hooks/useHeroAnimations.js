import { useEffect } from 'react'
// GSAP animations
import { gsap } from 'gsap'

export default function useHeroAnimations () {
  useEffect(() => {
    // Animación básica con GSAP
    gsap.fromTo('.sakura-1',
      { opacity: 0, x: 400 }, // Estado inicial
      { opacity: 1, x: 0, duration: 1.5 } // Estado final con animación
    )

    gsap.fromTo('.sakura-6',
      { opacity: 0, y: 200 }, // Estado inicial
      { opacity: 1, y: 0, duration: 1.5, delay: 0.1, ease: 'back.out(1)' } // Estado final con animación
    )

    gsap.fromTo('.sakura-3',
      { opacity: 0, y: 400 }, // Estado inicial
      { opacity: 1, y: 0, duration: 1.5, delay: 0.3, ease: 'back.out(1)' } // Estado final con animación
    )

    gsap.fromTo('.sakura-5',
      { opacity: 0, y: 400 }, // Estado inicial
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: 'back.out(1)' } // Estado final con animación
    )

    gsap.fromTo('.sakura-2',
      { opacity: 0, y: 400 }, // Estado inicial
      { opacity: 1, y: 0, duration: 1.5, delay: 0.8, ease: 'back.out(1)' } // Estado final con animación
    )

    gsap.fromTo('.sakura-4',
      { opacity: 0, y: 200 }, // Estado inicial
      { opacity: 1, y: 0, duration: 1.5, delay: 1.8, ease: 'back.out(1)' } // Estado final con animación
    )

    gsap.fromTo('.hero-data',
      { opacity: 0, y: -100 }, // Estado inicial
      { opacity: 1, y: 0, duration: 1.5, delay: 2.5, ease: 'back.out(1)' } // Estado final con animación
    )

    gsap.fromTo('.lantern-1',
      { opacity: 0, x: 70 }, // Estado inicial
      { opacity: 1, x: 0, duration: 1.5, delay: 3, ease: 'back.out(1)' } // Estado final con animación
    )

    gsap.fromTo('.lantern-2',
      { opacity: 0, x: 70 }, // Estado inicial
      { opacity: 1, x: 0, duration: 1.5, delay: 3, ease: 'back.out(1)' } // Estado final con animación
    )
  }, [])
}
