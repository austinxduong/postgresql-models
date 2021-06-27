import { Router } from 'express';
import Burger from '../models/Burger.js';

export default Router()

  .post('/api/v1/burger', async (req, res) => {
    try {
      const burger = await Burger.insert(req.body);
      res.send(burger);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
