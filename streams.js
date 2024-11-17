// console.time('writeMany');
// let a = 2 + 2;
// let b = a* 1000
// console.timeEnd('writeMany'); // performance check

const fs = require('fs/promises'); // Importing the promises API from the 'fs' module

// IIFE (Immediately Invoked Function Expression) to perform asynchronous file operations
(async () => {

    console.time('writeMany'); // Start measuring the time taken for writing to the file

    // Open a new file in write mode and get the file handle
    const fileHandle = await fs.open("./texts/new.txt", "w");

    // Write numbers from 0 to 1000000 into the file using a loop
    for (let i = 0; i < 1000000; i++) {
        fileHandle.write(` ${i} `); // Write each number as a string to the file
    }

    await fileHandle.close(); // Always close the file handle after writing to avoid resource leaks
    console.timeEnd('writeMany'); // End and display the time taken for the write operation

})();
