const fs = require('fs');

// Asynchronous file read operation
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

console.log('This code is executed immediately, before the file read operation completes');



// In the example above, we use the Node.js fs module to perform an asynchronous file read 
//operation using fs.readFile(). This function takes the file path ('example.txt')
// and the encoding ('utf8') as parameters. It also takes a callback function that will be 
//executed once the file read operation is complete.

// Inside the callback function, we handle any potential error that may occur during the file 
//read operation. If an error occurs, it is logged to the console. Otherwise, we log the content
// of the file.

// After initiating the file read operation, we immediately execute the console.log statement 
//to demonstrate that it is not blocked by the asynchronous I/O operation. 
//This showcases the non-blocking nature of Node.js, as other code can continue executing 
//while the I/O operation is being processed.

// When you run this code, it will read the content of the 'example.txt' file asynchronously. 
//The file content will be logged to the console once the read operation is complete. 
//The immediately executed console.log statement will also be displayed before the file
// read operation finishes.

// This example demonstrates how Node.js offloads the file read operation to the underlying 
//system kernel, allowing other code to execute without being blocked. Once the file read 
//operation is finished, the provided callback is executed, and the code picks up where it 
//left off.
