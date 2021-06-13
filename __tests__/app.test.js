import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
// import Dog from '../lib/models/Dogs.js';

describe('dog routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  // CRUD
  // C - create POST      INSERT
  // R - read   GET       SELECT
  // U - update PUT       UPDATE
  // D - delete DELETE    DELETE

  it('creates a dog via POST', async () => {
    const res = await request(app)
      .post('/api/v1/dogs')
      .send({ 
        name: 'cliffy', 
        age: 2, 
        weight: '2 lbs' 
      });

    expect(res.body).toEqual({
      id: '1',
      name: 'cliffy',
      age: 2,
      weight: '2 lbs'
    });
  });
});


