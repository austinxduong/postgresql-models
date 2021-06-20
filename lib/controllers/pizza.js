import { Router } from 'express';
import Pizza from '../models/Pizza';

export default Router()

  .post('/api/v1/pizza', async (req, res) => {

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
  })

  .get('/api/v1/pizza/:id', async (req, res) => {
    try {
      const pizza = await Pizza.findById(req.params.id);
      res.send(pizza);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .put('/api/v1/pizza/:id', async (req, res) => {
    try {
      const pizza = await Pizza.update(req.body, req.params.id);
      res.send(pizza);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .delete('/api/v1/pizza/:id', async (req, res) => {
    try {
      const pizza = await Pizza.delete(req.params.id);
      res.send(pizza);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }

  });
