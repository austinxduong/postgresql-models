import { Router } from 'express';
import Pizza from '../models/Pizza';

export default Router()
  .post('/api/v1/pizzas', async (req, res) => {
    try {
      const pizza = await Pizza.insert(req.body);
      res.send(pizza);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });



