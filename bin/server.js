const http = require('http');
const app = require('../app');


require('dotenv').config();


const server = http.createServer(app);


let PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`servidor escuchando en puerto ${PORT}`);
});

