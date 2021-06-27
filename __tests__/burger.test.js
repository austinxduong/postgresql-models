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


  it('finds all burger via .GET findAll', async () => {
    
    const burger1 = await Burger.insert ({
      name: 'juicy',
      meat: 'beef',
      origin: 'southern'
    });
    const burger2 = await Burger.insert ({
      name: 'savory',
      meat: 'chicken',
      origin: 'northern'
    });
    const burger3 = await Burger.insert ({
      name: 'crispy',
      meat: 'bbq',
      origin: 'western'
    });

    const res = await request(app)
      .get('/api/v1/burger');
    expect(res.body).toEqual([burger1, burger2, burger3]);

  });
});

it('finds a specific/single burger via .GET findById', async () => {
  const burger2 = await Burger.insert({
    name: 'savory',
    meat: 'chicken',
    origin: 'northern'
  });

  const res = await request(app).get(`/api/v1/burger/${burger2.id}`);

  expect(res.body).toEqual(burger2);
});



