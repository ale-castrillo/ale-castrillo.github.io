document.getElementById('mostrarContr').addEventListener('change', function () {
    const passwordField = document.getElementById('contrasena');
    passwordField.type = this.checked ? 'text' : 'password';
});

const yearDropdown = document.getElementById('nacimiento');
const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= currentYear - 100; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearDropdown.appendChild(option);
}

// Function to update character count
function updateCharCount(input, counter, max) {
    const count = input.value.length;
    counter.textContent = `${count}/${max}`;
}

// Add event listeners to inputs
const tituloInput = document.getElementById('titulo');
const tituloCounter = document.getElementById('titulo-count');
const descripcionInput = document.getElementById('descripcion');
const descripcionCounter = document.getElementById('descripcion-count');

tituloInput.addEventListener('input', () => updateCharCount(tituloInput, tituloCounter, 50));
descripcionInput.addEventListener('input', () => updateCharCount(descripcionInput, descripcionCounter, 200));
