// Toggle certificate preview
const certBtn = document.querySelector('.btn.view-cert');
const certPreview = document.querySelector('.certificate-preview');

certBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if(certPreview.style.display === 'block'){
    certPreview.style.display = 'none';
  } else {
    certPreview.style.display = 'block';
    certPreview.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// Optional: click on certificate image to open in new tab
document.querySelectorAll('.certificate-preview img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    window.open(img.src, '_blank');
  });
});
