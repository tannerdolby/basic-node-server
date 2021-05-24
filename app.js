const startServer = require("./server");
const router = require("./router");
const { handlerObj } = require("./handlers");

// start the server
startServer(router, handlerObj);