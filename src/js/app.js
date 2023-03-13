const handleResize = () => {
  const w = window.innerWidth;
  console.log(w);

  if (w <= 1460) {
  }
};

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
