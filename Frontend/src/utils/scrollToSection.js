const scrollToSection = (id, offset = 64, duration = 700) => {
  const target = document.getElementById(id);
  if (!target) return;

  const startY = window.scrollY;
  const targetY =
    target.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  const distance = targetY - startY;
  let startTime = null;

  const easeInOut = (t) =>
    t < 0.5
      ? 2 * t * t
      : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const animateScroll = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(
      0,
      startY + distance * easeInOut(progress)
    );

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

export default scrollToSection;
