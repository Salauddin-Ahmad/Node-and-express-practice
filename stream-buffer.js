const { readFile } = require('fs');

const  fs = require('fs');


const http = require('http');

// creating a server with node
const server = http.createServer();

// Listener
server.on('request', (req, res) => {
    console.log(req.url === '/readFile' && req.method === 'GET');

    // streaming file reading
    // const s = fs.createReadStream(__dirname + './texts/read.txt') //use from one

    const filePath = process.cwd() + '/texts/read.txt'; // Correctly use process.cwd()

    // Streaming file reading
    const readableStream = fs.createReadStream(filePath);


    readableStream.on('data', (buffer) => {
        res.write(buffer)
    })
    readableStream.on('end', (buffer) => {
        res.end('hello from world !')
    })

    readableStream.on('error', (err) => {
        console.error('Error reading file:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
    });

})

server.listen(3000, () => {
    console.log(`listening on 3000`)
})






















