import { modifier } from 'ember-modifier';

export default modifier(function positionTooltip(element) {
  const positionTooltip = () => {
    let tooltip = element;
    let rect = tooltip.getBoundingClientRect();
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;

    // Reset styles to default
    tooltip.style.top = 'auto';
    tooltip.style.bottom = '125%';
    tooltip.style.left = '50%';
    tooltip.style.transform = 'translateX(-50%)';
    tooltip.removeAttribute('data-position');

    // Determine vertical position
    if (rect.top - tooltip.offsetHeight < 0) {
      tooltip.style.top = '125%';
      tooltip.style.bottom = 'auto';
      tooltip.setAttribute('data-position', 'bottom'); // Add data attribute for bottom position
    } else {
      tooltip.style.top = 'auto';
      tooltip.style.bottom = '125%';
      tooltip.setAttribute('data-position', 'top'); // Add data attribute for top position
    }
  };

  // Initial call and setup event listener for window resize
  positionTooltip();
  window.addEventListener('resize', positionTooltip);

  // Cleanup on removal
  return () => {
    window.removeEventListener('resize', positionTooltip);
  };
});
