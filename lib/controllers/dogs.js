
import { Router } from 'express';
import Dog from '../models/Dogs';

export default Router()
  .post('/api/v1/dogs', (req, res) => {
      try {
          const dog = await Dog.insert(req.body);
          res.send(dog);
      }   catch (err) {
          res.status(400).send(err);
      }

  });