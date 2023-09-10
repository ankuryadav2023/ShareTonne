const socket = io('https://sharetonne-nodejs-server.onrender.com/');

socket.emit('need-code');
socket.on('recieve-code', code => {
    document.getElementById('codeinp').value = code;
});
socket.on('recieve-data', data => {
    document.getElementById('datainp').value = data;
});

function savedata() {
    let code = document.getElementById('codeinp').value;
    let data = document.getElementById('datainp').value;
    socket.emit('save-data', [code, data]);
}
function fetchdata() {
    let code = document.getElementById('codeinp').value;
    socket.emit('fetch-data', code);
}

document.getElementById('savebtn').onclick = function () { savedata() };
document.getElementById('fetchbtn').onclick = function () { fetchdata() };