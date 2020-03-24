/*
    pi-digit main entry point
 */

const restify = require("restify");
const piAPI = require("./api/pi");
const port = process.env.PORT || 3141;

const server = restify.createServer();

server.get('/pi/:n', piAPI.piHandler);

server.listen(port, () => {
    console.log('server listening at port %s', port);
})