const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});