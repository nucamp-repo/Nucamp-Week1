function fetchDataFromServer(callback) {
    // Simulating an asynchronous operation   
    setTimeout(() => {
      const data = 'Data received from the server';
      callback(data);
    }, 2000);
  }


  
  function processServerData(data) {
    console.log('Processing data:', data);
    // Perform additional operations on the data
  }
  
  // Call the fetchDataFromServer function with the processServerData callback
  fetchDataFromServer(processServerData);



  //callback hell
  function callbackHellExample(callback) {
    setTimeout(() => {
      console.log('First operation');
      callback(() => {
        setTimeout(() => {
          console.log('Second operation');
          callback(() => {
            setTimeout(() => {
              console.log('Third operation');
              callback(() => {
                console.log('Final operation');
              });
            }, 1000);
          });
        }, 1000);
      });
    }, 1000);
  }
  
  // Usage
  // callbackHellExample(() => {});



  //async await
  function fetchDataFromServer(callback) {
    // Simulated asynchronous operation
    const data = 'Data received from the server';
    callback(data);
  }
  
  async function processServerData(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Processing data:', data);
        // Perform additional operations on the data
        resolve();
      }, 1000);
    });
  }
  
  async function main() {
    try {
      const data = await new Promise((resolve) => {
        fetchDataFromServer(resolve);
      });
    
      await processServerData(data);
    
      console.log('Final operation');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  // Usage
  // main();
  
  
  

  