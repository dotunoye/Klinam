const stats = [
  { id: 'stat-1', target: 25, suffix: '+' },
  { id: 'stat-2', target: 100, suffix: '%' },
  { id: 'stat-3', target: 4, suffix: 'x' }
];

const animateValue = (element, target, suffix) => {
  let current = 0;
  const duration = 1200;
  const stepTime = 20;
  const steps = duration / stepTime;
  const increment = target / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = `${Math.round(current)}${suffix}`;
  }, stepTime);
};

window.addEventListener('DOMContentLoaded', () => {
  stats.forEach(({ id, target, suffix }) => {
    const element = document.getElementById(id);
    if (element) {
      animateValue(element, target, suffix);
    }
  });
});
