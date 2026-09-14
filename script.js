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

const downloadButton = document.getElementById('download-pdf');
const cv = document.querySelector('.main-flex-container');

downloadButton.addEventListener('click', () => {
  let filename = 'Anastasia_Vodchits_CV_EN.pdf';

  if (document.documentElement.lang === 'es') {
    filename = 'Anastasia_Vodchits_CV_ES.pdf';
  }

  if (document.documentElement.lang === 'ru') {
    filename = 'Anastasia_Vodchits_CV_RU.pdf';
  }

  const options = {
    margin: 0,
    filename: filename,
    image: {
      type: 'jpeg',
      quality: 0.98
    },
    html2canvas: {
      scale: 2,
      useCORS: true
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    }
  };

  html2pdf()
    .set(options)
    .from(cv)
    .save();
});