const fs = require('fs');

fs.readFile('./read.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;  // Exit the function if there’s an error
    }
    console.log(data);

    // Corrected writeFile call
    fs.writeFile('./new.txt', data, 'utf-8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;  // Exit the function if there’s an error
        }
        console.log('File written successfully.');
    });
});

console.log('testing');
