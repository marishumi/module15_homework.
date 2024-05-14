
const socket = new WebSocket('wss://echo-ws-service.herokuapp.com');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatWindow = document.getElementById('chatWindow');
const locationButton = document.getElementById('locationButton');


sendButton.addEventListener('click', function () {
  const message = messageInput.value;
  socket.send(message); 
  chatWindow.innerHTML += 'Вы: ' + message + '<br>';
});


socket.onmessage = function (event) {
  chatWindow.innerHTML += 'Сервер: ' + event.data + '<br>'; 
};


locationButton.addEventListener('click', function () {
  if (!navigator.geolocation) {
    return alert('Геолокация не поддерживается вашим браузером.');
  }

  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    socket.send(url);
    chatWindow.innerHTML += 'Вы: ' + url + '<br>';
  });
});
