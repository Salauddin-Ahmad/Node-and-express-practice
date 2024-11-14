
const fs = require('fs');

//  reading a file and text

const readText = fs.readFileSync('./read.txt', 'utf-8');

console.log(readText);

// writing a text

const writtenText = fs.writeFileSync('./write.txt', readText + 'This is my written text',
)

console.log(writtenText)



