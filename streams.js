// // console.time('writeMany');
// // let a = 2 + 2;
// // let b = a* 1000
// // console.timeEnd('writeMany'); // performance check

// const fs = require('fs/promises'); // Importing the promises API from the 'fs' module

// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------

// IIFE (Immediately Invoked Function Expression) to perform asynchronous file operations
// (async () => {
//     // it takes 15 seconds and 83% of cpu single core and 
//     // Memory usge : around 3gbs

//     // Log initial memory usage
//    console.log("Initial Memory Usage:", process.memoryUsage());



//     console.time('writeMany'); // Start measuring the time taken for writing to the file

//     const fileHandle = await fs.open("./texts/new.txt", "w");

//     for (let i = 0; i < 1000000; i++) {
//         fileHandle.write(` ${i} `); 

//         // Log memory usage periodically (e.g., every 100,000 iterations)
//         // if (i % 100000 === 0) {
//             // console.log(`Memory Usage at iteration ${i}:`, process.memoryUsage());
//         // }
//     }

//     await fileHandle.close(); // Always close the file handle after writing to avoid resource leaks
//     console.timeEnd('writeMany'); 


//     console.log("Final Memory Usage:", process.memoryUsage());
// })();

// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------



// const fs = require('node:fs'); // Importing the promises API from the 'fs' module



// (async () => {

//     console.time('writeMany'); // Start measuring the time taken for writing to the file
//     fs.open("./texts/new.txt", "w", (err, data) => {
//         for (let i = 0; i < 1000000; i++) {
//             const buff = Buffer.from(`${i}`, 'utf-8')
//             fs.writeSync(data, buff);
//         }
//     });


//     console.timeEnd('writeMany');

//     // console.log("Final Memory Usage:", process.memoryUsage());
// })();



// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------


// another version with streams
// fastest one with 570 ms times to complete writing

const fs = require('node:fs/promises'); // Importing the promises API from the 'fs' module



(async () => {

    console.time('writeMany'); // Start measuring the time taken for writing to the file

    const fileHandle = await fs.open("./texts/new.txt", "w",)

    const stream = fileHandle.createWriteStream()

    for (let i = 0; i < 1000000; i++) {
        const buff = Buffer.from(`${i}`, 'utf-8')
        stream.write(buff);
    }

    console.timeEnd('writeMany');

    // console.log("Final Memory Usage:", process.memoryUsage());
})();


// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------

