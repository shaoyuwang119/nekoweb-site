const header = document.querySelector('.header');
header.innerHTML = header.textContent.split('').map(letter => {
  const angle = (Math.random() * 20 - 10).toFixed(2); // random -5° to +5°
  return `<span style="display:inline-block; transform:rotate(${angle}deg)">${letter}</span>`;
}).join('');

