const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const requestTypesRouter = require('../src/models/requestTypes.cjs');
const RequestType = require('../src/models/RequestType.cjs');

let mongoServer;

const app = express();
app.use(express.json());
app.use('/api/request-types', requestTypesRouter);

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, { dbName: 'testdb' });

  await RequestType.create({
    code: 'TECH_ISSUE',
    name: 'Problème technique',
    description: 'Un test',
    category: 'tech',
    priority: 'medium',
    estimatedResponseTime: 4,
  });
});

describe('Request Types API', () => {
  it('GET /api/request-types should return array', async () => {
    const res = await request(app).get('/api/request-types');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});
