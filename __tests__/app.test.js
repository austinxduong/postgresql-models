import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Dog from '../lib/models/Dogs.js';

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
      weight: '2 lbs',
    });
  });
});



// it('finds all dogs via GET', async () => {

//   const cliffy = await Dog.insert({
//     name: 'cliffy',
//     age: 2,
//     weight: '2 lbs'
//   });

//   const riley = await Dog.insert({
//     name: 'riley',
//     age: 3,
//     weight: '3 lbs'
//   });

//   const bugs = await Dog.insert({
//     name: 'bugs',
//     age: 4,
//     weight: '4 lbs'
//   });

//   const res = await request(app).get('/api/v1/dogs');
//   expect(res.body).toEqual([cliffy, riley, bugs]);
// });


// it('finds a dog by id via GET', async () => {
//   const dog = await Dog.insert({
//     name: 'bugs',
//     age: 4,
//     weight: '4 lbs'
//   });

//   const res = await request(app).get(`/api/v1/dogs/${dog.id}`);

//   expect(res.body).toEqual(dog);
// });

it('finds a dog by id via GET', async () => {
  const dog = await Dog.insert({
    name: 'rover',
    age: 10,
    weight: '50 lbs',
  });

  const res = await request(app).get(`/api/v1/dogs/${dog.id}`);

  expect(res.body).toEqual(dog);
});

it('finds all dogs via GET', async () => {
  const spot = await Dog.insert({
    name: 'spot',
    age: 5,
    weight: '20 lbs',
  });

  const rover = await Dog.insert({
    name: 'rover',
    age: 10,
    weight: '20 lbs',
  });

  const bingo = await Dog.insert({
    name: 'bingo',
    age: 2,
    weight: '5 lbs',
  });

  const res = await request(app).get('/api/v1/dogs');

  expect(res.body).toEqual([spot, rover, bingo]);
});



