const cluster = require('cluster');
const os = require('os');
const express = require('express');

const app = express();

if (cluster.isMaster) {
  // Master process creates worker processes
  const numCPUs = os.cpus().length;

  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    // Replace the dead worker
    cluster.fork();
  });
} else {
  // Worker processes handle requests using the Express app
  const port = 3000 + cluster.worker.id; // Each worker listens on a different port

  app.get('/', (req, res) => {
    res.send(`Hello from Worker ${cluster.worker.id} on Port ${port}`);
  });

  app.listen(port, () => {
    console.log(`Worker ${cluster.worker.id} is listening on port ${port}`);
  });
}
