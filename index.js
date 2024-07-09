const WebSocket = require('ws');

// Crear un servidor WebSocket en el puerto 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Cliente conectado');

  // Manejar mensajes recibidos del cliente
  ws.on('message', (message) => {

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function displayRandomNumber() {
      let randomNumber = getRandomNumber(60, 100);
      ws.send(randomNumber);
    }


    console.log('Mensaje recibido del cliente:', message);

    if (message == "fc") {
      setInterval(displayRandomNumber, 2000);
    }

  });

  // Manejar la desconexión del cliente
  ws.on('close', () => {
    console.log('Cliente desconectado');
  });

  
});

console.log('Servidor WebSocket escuchando en el puerto 8080');



