const request = require('supertest');
const express = require('express');
const requestTypesRouter = require('../src/routes/requestTypes.cjs');

const app = express();
app.use(express.json());
app.use('/api/request-types', requestTypesRouter);

describe('Request Types API', () => {
  it('GET /api/request-types should return array', async () => {
    const res = await request(app).get('/api/request-types');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

