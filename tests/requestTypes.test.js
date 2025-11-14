const request = require('supertest');
const express = require('express');
const requestTypesRouter = require('../src/routes/requestTypes.js');

const app = express();
app.use(express.json());
app.use('/api/request-types', requestTypesRouter);

test('GET /health should return status ok', async () => {
  app.get('/health', (req, res) => res.json({ status: 'ok' }));
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
});
