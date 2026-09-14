const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');

lightMode.addEventListener('click', () => {
  document.body.classList.remove('dark-theme');

  lightMode.classList.add('active');
  darkMode.classList.remove('active');
});

darkMode.addEventListener('click', () => {
  document.body.classList.add('dark-theme');

  darkMode.classList.add('active');
  lightMode.classList.remove('active');
});