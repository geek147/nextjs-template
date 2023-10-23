
import fs from 'fs';
import https from 'https';
import express from 'express';
import { config } from 'process';

const app = express();
const port = config.port()

const httpsOptions = {
  key: fs.readFileSync('../../key.pem'),
  cert: fs.readFileSync('../../server.crt'),
};

app.get('/api/secure-data', (req, res) => {
  res.json({ message: 'This data is secure via SSL.' });
});

https
  .createServer(httpsOptions, app)
  .listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
  });