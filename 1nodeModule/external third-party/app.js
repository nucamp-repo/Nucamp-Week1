const http = require('http');

http.createServer((req, res) => { 
   res.write('Hello, World! yes');
   res.end();
})
.listen(8000);