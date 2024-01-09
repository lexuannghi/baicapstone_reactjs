export function SmoothHorizontalScrolling(e, time, amount, start) {
  const eAmt = amount / 15;
  const startTime = performance.now();
  const y = window.scrollY;

  function step() {
    const elapsed = performance.now() - startTime;
    const progress = elapsed / time;

    if (progress < 1) {
      const scrollPosition = eAmt * progress * time + start;
      e.scrollLeft = scrollPosition;
      window.requestAnimationFrame(step);
    } else {
      e.scrollLeft = start + amount;
    }
  }

  window.requestAnimationFrame(step);
  window.scrollTo(0, y);
}

//ramdom color menu icon
export function randomRgbaColor(opacity) {
  const R = Math.round(Math.random() * 256);
  const G = Math.round(Math.random() * 256);
  const B = Math.round(Math.random() * 256);
  let color = `rgba(${R},${G},${B},${opacity})`;
  return color;
}
