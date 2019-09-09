(function() {
  const toggleElement = document.getElementById('toggle-stylesheet');

  const stylesArray = [
    { name: 'Base', stylesheet: '/styles.css' },
    { name: 'Default', stylesheet: '' },
  ];

  let currentStylesIndex = 0;

  function setStylesheet(active) {
    const linkElement = document.getElementById('stylesheet');

    if (linkElement) {
      linkElement.href = active.stylesheet;
    }
  }

  function setButtonText(active) {
    toggleElement.textContent = active.name;
  }

  function handleClick() {
    currentStylesIndex = (currentStylesIndex + 1) % stylesArray.length;

    const active = stylesArray[currentStylesIndex];

    setStylesheet(active);
    setButtonText(active);
  }

  if (toggleElement) {
    toggleElement.addEventListener('click', handleClick);
  }
})();
