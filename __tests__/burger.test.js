import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Burger from '../lib/models/Burger.js';


describe('Burger routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  it('creates a burger via. POST', async () => {
    const res = await request(app)
      .post('/api/v1/burger')
      .send({
        name: 'juicy',
        meat: 'beef',
        origin: 'southern'
      });

    expect(res.body).toEqual({
      id: '1',
      name: 'juicy',
      meat: 'beef',
      origin: 'southern'
    });
  });
});
