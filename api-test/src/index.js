const express = require('express');
const { randomUUID } = require('node:crypto');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const token = randomUUID();

app.get('/token', (req, res) => {
  console.info('Hit /token route');
  res.json({
    token
  });
});

app.get('/verify', (req, res) => {
  console.info('Hit /verity route');
  const tokenOnHeader = req.headers.authorization

  tokenOnHeader?.split(' ')[1] === token ? res.json({ message: 'OK' }) : res.status(401).json('Unauthorized! Missing or invalid token');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
