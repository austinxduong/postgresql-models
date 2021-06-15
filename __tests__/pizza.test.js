
import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Pizza from '../lib/models/Pizza.js';

describe('pizza', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a pizza via POST', async () => {
    const res = await request(app)
      .post('/api/v1/pizza')
      .send({ 
        name: 'Mykonos', 
        topping: 'feta', 
        style: 'greek' 
      });

    expect(res.body).toEqual({
      id: '1',
      name: 'Mykonos',
      topping: 'feta',
      style: 'greek'
    });
  });

});
