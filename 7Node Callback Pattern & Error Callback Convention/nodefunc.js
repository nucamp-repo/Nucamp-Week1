function performAsyncOperation(input, callback) {
    // Simulating an asynchronous operation
    const result = input + 10;
  
    if (result % 2 === 0) {
      // Success case: No error, pass the result to the callback
      callback(null, result);
    } else {
      // Error case: Pass an error to the callback
      const error = new Error('Odd result is not allowed');
      callback(error);
    }
  }
  
  // Usage
  performAsyncOperation(5, (error, result) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Result:', result);
    }
  });
  