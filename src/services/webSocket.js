const io = require("socket.io-client");
const socket = io("ws://localhost:3000", {
  withCredentials: true
});

socket.on("connect", () => {
  socket.emit();
});
