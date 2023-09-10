const btnVerPDF = document.getElementById('view-resume');


btnVerPDF.addEventListener('click', function() {

  const pdfURL = '../assets/resume/CV Jan Solis Software.pdf';

  // Abre el archivo PDF en una nueva ventana o pestaña del navegador
  window.open(pdfURL, '_blank');
});