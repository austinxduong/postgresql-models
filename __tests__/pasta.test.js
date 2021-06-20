
import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
// import Pasta from '../lib/models/Pasta.js';

describe('pasta', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  it('creates a pasta via POST', async () => {
    const res = await request(app)
      .post('/api/v1/pasta')
      .send({ 
        name: 'test', 
        sauce: 'marinara', 
        noodle: 'shell' 
      });
  
    expect(res.body).toEqual({
      id: '1',
      name: 'test',
      sauce: 'marinara',
      noodle: 'shell'
    });
  });

});





