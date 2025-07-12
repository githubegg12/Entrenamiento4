README - Training – Module 3 Week 4

Training 4

Project Description

This project is a web page built using JavaScript, HTML/CSS, and JSON Server to allows you to apply practical knowledge of DOM manipulation and browser storage. The web page provides a simple, user-friendly interface where:

- Captures the user's name and age through input fields.
- Validates users inputs (name and age).
- Stores and display data using `localStorage` and `sessionStorage`
- Persists data across page reloads.

The system validates inputs to ensure clean data: only letters are allowed in names and only numbers in age.
Upon successful validation, the user's name and age are saved in the browser’s localStorage under the key 'usuarios' as part of an array of user objects. This approach allows multiple entries to be stored during the same session. The saved data persists across page reloads and browser restarts, and it is dynamically displayed on the page whenever it loads. In addition to local storage, the application tracks user interactions using sessionStorage. Every time the "Save" button is clicked, a counter is incremented and displayed on the interface, showing the number of interactions during the current session. This counter is maintained as long as the browser tab remains open but resets automatically when the tab is closed. The interface also includes a "Clear" button that removes all stored user data from localStorage and updates the display accordingly. However, it does not reset the session counter unless the session is closed. Furthermore, user data is also sent to a JSON server using the Fetch API.


Requirements

- Node.js installed including Node Package Manager
- JSON server installed
- Any code editor (e.g., VS Code)
- Internet connection for installing packages

How to use it

1. Clone the project
git clone https://github.com/githubegg12/Entrenamiento4.git

2. Install dependencies
npm i
npm install json-server



3. Start the development servers

You will need two terminals:

Terminal 1 – Start frontend with Vite
npm run dev
Visit: http://localhost:5173

Terminal 2 – Start backend with JSON Server
npx run server public/Json/db.js
Visit: http://localhost:3000/usuarios

4. Enter a valid name and age in the form.

5. Click the "Save" button to store the information.
The data will be displayed on the page, and the interaction counter will increase.

6. Click the "Clear" button to remove all stored data and reset the counter.


Project structure


/Entrenamiento4
├── /public
|   └──/Json
│      └── db.json #JSON Server database
├── index.html #Main HTML UI
├── package.json
├── vite.config.js
├── /src
│   ├── /CSS
│   │   └── styles.css  #Styling for the application
│   └── /JavaScript
│       └── main.js #Main logic for web page



Coder information

Nombre: David Felipe Vargas Varela	

Clan: Sierra

Correo: davidvargas1224@gmail.com


 
