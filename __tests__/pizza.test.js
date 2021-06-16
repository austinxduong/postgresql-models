
import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Pizza from '../lib/models/Pizza';

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



  it('finds all pizza via GET', async () => {

    const Mykonos = await Pizza.insert({
      name: 'Mykonos',
      topping: 'feta',
      style: 'greek'
    });

    const Newyork = await Pizza.insert({
      name: 'Newyork',
      topping: 'saucy',
      style: 'italian'
    });

    const Spicy = await Pizza.insert({
      name: 'Spicy',
      topping: 'pepper',
      style: '4 lbs'
    });

    const res = await request(app)
      .get('/api/v1/pizza');
    // console.log(res.body);
    expect(res.body).toEqual([Mykonos, Newyork, Spicy]);
  });

  
  it('finds a pizza by id via GET', async () => {
    const pizza = await Pizza.insert({
      name: 'Mykonos',
      topping: 'feta',
      style: 'greek'
    });

    const res = await request(app).get(`/api/v1/pizza/${pizza.id}`);

    expect(res.body).toEqual(pizza);
  });

//.put will circle back to this..... start with .delete next



  it('delete a pizza by id via DELETE', async () => {
    const pizza = await Pizza.insert({
      name: 'Mykonos',
      topping: 'feta',
      style: 'greek'
    });
    
    const res = await request(app).delete(`/api/v1/pizza/${pizza.id}`);

    expect(res.body).toEqual(pizza);
    

  });

});
