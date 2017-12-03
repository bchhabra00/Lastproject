
const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
    port: process.env.PORT,
    host: process.env.IP,
    routes: {
        cors: true
    }
})


server.route(require('./routes'))

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});