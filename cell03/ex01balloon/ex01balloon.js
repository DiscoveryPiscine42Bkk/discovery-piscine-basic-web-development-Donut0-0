const balloon = document.getElementById('balloon');

balloon.addEventListener('click', () => {
  balloon.classList.add('exploded');

  setTimeout(() => {
    balloon.style.display = 'none';
  }, 300);
});