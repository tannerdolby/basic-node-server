const http = require("http");
const port = process.env.PORT || 8000;

function start(route, handlerObj) {
    function handleReq(req, res) {
        const path = req.url;
        console.log(`Request received for '${req.url}'`);

        // Listen for data sent to the server with the 'data' event
        let data = "";
        req.on("data", (payload) => {
            data += payload;
        });

        // When the data has been consumed, route the request
        req.on("end", () => {
            route(path, res, handlerObj, data);
        });
    }
    http.createServer(handleReq).listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}

module.exports = start;