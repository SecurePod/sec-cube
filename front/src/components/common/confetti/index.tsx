'use client'

// eslint-disable-next-line
// @ts-ignore
import Confetti from 'canvas-confetti'

export function Cheer() {
  Confetti({
    particleCount: 200,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    zIndex: 99999,
  })
  // right
  Confetti({
    particleCount: 200,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    zIndex: 99999,
  })
}
