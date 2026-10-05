import confetti from 'canvas-confetti';

export const triggerExecutiveCelebration = () => {
  if (typeof window === 'undefined') return;

  try {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#0284c7', '#38bdf8', '#fbbf24', '#0f172a'],
      disableForReducedMotion: true,
    });
  } catch (e) {
    // Graceful fallback if blocked
  }
};
