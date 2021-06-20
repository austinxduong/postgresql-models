
import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Pasta from '../lib/models/Pasta';

describe('pasta', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  it('creates a pasta via POST', async () => {
    const res = await request(app)
      .post('/api/v1/pasta')
      .send({ 
        name: 'Cupid',
        sauce: 'marinara', 
        noodle: 'angel hair' 
      });
  
    expect(res.body).toEqual({
      id: '1',
      name: 'Cupid',
      sauce: 'marinara',
      noodle: 'angel hair'
    });
  });
});
