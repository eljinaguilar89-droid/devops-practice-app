const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.status(200).send('OK'));
app.get('/health', (req, res) => res.json({ status: 'healthy', uptime: process.uptime() }));

test('GET / returns 200', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
});

test('GET /health returns healthy status', async () => {
  const res = await request(app).get('/health');
  expect(res.body.status).toBe('healthy');
});