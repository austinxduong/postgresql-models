import { Router } from 'express';
import Pizza from '../models/Pizza';

export default Router()

  .post('/api/v1/pizza', async (req, res) => {
    console.log(req.body);
    try {
      const pizza = await Pizza.insert(req.body);
      res.send(pizza);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })
  

  .get('/api/v1/pizza', async (req, res) => {
    try {
      const pizza = await Pizza.findAll();
      res.send(pizza);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
