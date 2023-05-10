import Client from "../node_modules/socket.io/dist/client.js";
function socketIo() {
    console.log(io);
    io = Client;
    const socket = io;
    socket.on('connect', () => {
        console.log('a user connected');
    });
    socket.on('disconnect', () => {
        console.log("user disconnected");
    });
}
export default socketIo;