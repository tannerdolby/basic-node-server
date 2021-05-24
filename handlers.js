const fs = require("fs");

const handlerObj = {
    "/": home,
    "/message": message
};

function home(res) {
    console.log("Executing 'home' handler");
    fs.readFile(__dirname + "/index.html", (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

function message(res, payload) {
    console.log("Executing 'message' handler");
    let msg = new URLSearchParams(payload);
    let data = {
        name: msg.get('name'),
        message: msg.get('message')
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}

module.exports = { 
    home, 
    message,
    handlerObj
};