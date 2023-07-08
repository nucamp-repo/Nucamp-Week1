console.log('Starting the event loop example');

// Registering a timer that will execute after 2 seconds
setTimeout(() => {
  console.log('Timer 1: Executed after 2 seconds');
}, 2000);

// Registering a timer that will execute after 0 seconds
setTimeout(() => {
  console.log('Timer 2: Executed after 0 seconds');
}, 0);

// Simulating a long-running operation
console.log('Long-running operation: Started');
let counter = 0;
while (counter < 10000) {
  counter++;
}
console.log('Long-running operation: Finished');

console.log('Exiting the event loop example');
