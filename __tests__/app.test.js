import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
});

it('test communicating to POST method in controller', async () => {
  const respond = await request(app)
    .post('/api/v1/dogs')
    .send({ name: 'cliffy', age: 2, weight: '2 lbs' });
  expect(respond.body).toEqual({
    id: '1',
    name: 'cliffy',
    age: '2',
    weight: '2 lbs'
  });
});
