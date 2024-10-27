const dateInput = document.getElementById('dateInput');

dateInput.addEventListener('focus', function() {
  this.type = 'date';
});

dateInput.addEventListener('blur', function() {
  if (this.value === '') {
    this.type = 'text';
    this.placeholder = 'DD/MM/AAAA, --:--';
  }
});

dateInput.addEventListener('input', function() {
  this.placeholder = '';
});



// Toggle text between "Escuro" and "Claro"
const darkModeToggle = document.getElementById('darkModeToggle');
const toggleLabel = document.getElementById('toggleLabel');
    
darkModeToggle.addEventListener('change', () => {
  toggleLabel.textContent = darkModeToggle.checked ? 'Claro' : 'Escuro';
});

// Display selected file name
const fileInput = document.getElementById('fileUpload');
const fileNameDisplay = document.querySelector('.file-name');
    
  fileInput.addEventListener('change', () => {
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'Nenhum arquivo selecionado';
      fileNameDisplay.textContent = fileName;
    });

