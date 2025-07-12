
// To reference the elements
const form = document.getElementById('userForm');
const output = document.getElementById('output');
const counter = document.getElementById('counter');
const saveBtn = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');
const serverOutput = document.getElementById('serverOutput');

// To load the page with the information 
window.addEventListener('load', () => {
  displayData();
  showCounter();
  loadFromServer();
});
// Save data from the form
saveBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name').value.trim();
  const ageInput = document.getElementById('age').value.trim();


  try {
    // Validate users to fulfill the form
    if (nameInput === '' || ageInput === '') {
      alert('Faltan campos por llenar');
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(nameInput)) {
      throw new Error("El nombre debe contener solo letras.");
    }
    //Validate if ages is a valid number
    if (isNaN(ageInput) || ageInput <= 0 || ageInput >= 150) {
      throw new Error("La edad debe ser un numero valido entre 1 y 150");
    }

    const data = { nameInput, ageInput };
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; 
    usuarios.push(data); // To add user information on the list
    localStorage.setItem('usuarios', JSON.stringify(usuarios));// To update the list of users added in a single session
    displayData();

    const response = await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: nameInput, age: ageInput })
    });

    if (!response.ok) throw new Error('No se pudo guardar en el servidor.');
    loadFromServer();


  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});

// To show users saved during one session

function displayData() {
  const savedData = localStorage.getItem('usuarios');

  if (savedData) {
    const usuarios = JSON.parse(savedData);
    output.innerHTML = usuarios
      .map(data => `Nombre: ${data.nameInput} | Edad: ${data.ageInput}`)
      .join('<br>');
  } else {
    output.textContent = 'No hay datos almacenados, ingresa datos.';
  }
}

// Show users from Json server
async function loadFromServer() {
  try {
    const server = await fetch('http://localhost:3000/usuarios');
    if (!server.ok) throw new Error('No se pudo obtener datos del servidor');

    const data = await server.json();

    if (data.length === 0) {
      serverOutput.textContent = 'No hay usuarios en el servidor.';
      return;
    }
    serverOutput.innerHTML = data.map(user => `${user.name} (${user.age} años)`).join('<br>');
  } catch (error) {
    console.error(error.message);
    serverOutput.textContent = 'Error al cargar datos desde el servidor.';
  }
}

// Counter to know the amount of interactions
function updateCounter() {
  let interactions = sessionStorage.getItem('contador');

  if (!interactions) {
    interactions = 1;
  } else {
    interactions = parseInt(interactions) + 1;
  }
  sessionStorage.setItem('contador', interactions);
  counter.textContent = `Interacciones en esta sesión: ${interactions}`;
}
saveBtn.addEventListener('click', updateCounter);

//To display the number of interactions
function showCounter() {
  let interactions = sessionStorage.getItem('contador') || 0;
  counter.textContent = `Interacciones en esta sesión: ${interactions}`;
}


// Clean data button
clearBtn.addEventListener('click', () => {
  localStorage.clear();
  displayData();
});
