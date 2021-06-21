
import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Pasta from '../lib/models/Pasta.js';
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

  it('finds all pasta via GET', async () => {

    const test = await Pasta.insert({
      name: 'test',
      sauce: 'mmarinara',
      noodle: 'shell'
    });

    const Newyork = await Pasta.insert({
      name: 'Newyork',
      sauce: 'cheese',
      noodle: 'ravioli'
    });

    const Spicy = await Pasta.insert({
      name: 'Spicy',
      topping: 'pepper',
      style: 'padthai'
    });

    const res = await request(app)
      .get('/api/v1/pasta');
    // console.log(res.body);
    expect(res.body).toEqual([test, Newyork, Spicy]);
  });


  it('finds a pasta by id via GET', async () => {
    const pasta = await Pasta.insert({
      name: 'Spicy',
      topping: 'pepper',
      style: 'padthai'
    });

    const res = await request(app).get(`/api/v1/pasta/${pasta.id}`);

    expect(res.body).toEqual(pasta);
  });
});





