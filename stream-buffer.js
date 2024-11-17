const fs = require('fs'); // Import file system module
const http = require('http'); // Import HTTP module

// Creating a server using Node.js
const server = http.createServer();

// Listener for incoming HTTP requests
server.on('request', (req, res) => {
    // Check if the request URL is '/readFile' and the method is 'GET'
    console.log(req.url === '/readFile' && req.method === 'GET');

    // Define the path to the file using the current working directory
    const filePath = process.cwd() + '/texts/read.txt'; // Correctly use process.cwd()

    // Create a readable stream to read the file
    const readableStream = fs.createReadStream(filePath);

    // Handle 'data' event to write chunks of the file to the response
    readableStream.on('data', (buffer) => {
        res.statusCode = 200;
        res.write(buffer);
    });
    
    // Handle 'end' event to signal the end of the response
    readableStream.on('end', () => {
        res.statusCode = 200;
        res.end('hello from world!');
    });

    // Handle 'error' event in case the file can't be read
    readableStream.on('error', (err) => {
        res.statusCode = 500; // Internal Server Error
        console.error('Error reading file:', err);
        res.end('Internal Server Error');
    });
});

// Start the server and listen on port 3000
server.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
});
