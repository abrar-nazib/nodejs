//All modules are listed here


//----- Filesystem ------------------------------------------
const fileSystem = require('fs');  //fs stands for filesystem
fs.readdirSync('filename'); // reads directory synchronously -> shows the contents of a directory
fs.readdir('filename', function(err, files){  /*handle the errors or handle the files array*/ }); //second parameter is a callback function

//------Operating system related module--------------------
const os = require('os');  // os stands for Operating system

