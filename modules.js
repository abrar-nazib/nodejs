//----- Filesystem -------------------------------------------------------------------------------------------------
const fileSystem = require('fs');
//fs stands for filesystem

fs.readdirSync('filename');
// reads directory synchronously -> shows the contents of a directory

fs.readdir('filename', function (err, files) {
    /*handle the errors or handle the files array*/
});
//second parameter is a callback function




//------Operating system related module-----------------------------------------------------------------------------------
const os = require('os');
// os stands for Operating system

os.freemem();
// returns free memory space in memory

os.totalmem();
// returns total memoru space in memory




//-----Events----------------------------------------------------------------------------------------------------------
const EventEmitter = require("events");
//it is a class and class names should be written in this conversion(first capital)

const emitter = new EventEmitter();
//module we need

emitter.on("eventName", function (arg) {});
//event listener -> will be called while the event is emitted
//arg refers to the properties sent by the event

emitter.emit("eventName", {
    /* properties to be passed as object*/
});
//emits an event #emitter must be called after listener is defined -> asynschronous stuff



//-----HTTP module ------------------------------------------------------------------------------------------
const http = require('http');

const serve = (req, res) => {
    let url = req.url;
    // returns the url requested to

    res.write("Things to write in response to the request");

    res.end();
    // necessary to end the response
};

const server = http.createServer(serve) //creates a server and takes a function to handle request and response
server.listen(8080); //listens to the given port number. emits an event(connection) with socket parameter ->emitter

server.on("connection", (socket) => {
    //EVENT LISTENER FOR EMITTER FUNCTION
});