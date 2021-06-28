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
  })

  .get('/api/v1/burger', async (req, res) => {
    try {
      const burger = await Burger.findAll();
      res.send(burger);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .get('/api/v1/burger/:id', async (req, res) => {
  
    try {
      const burger = await Burger.findById(req.params.id);
      res.send(burger);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .put('/api/v1/burger/:id', async (req, res) => {
    // console.log(req.body);
    try {
      const burger = await Burger.update(req.body, req.params.id);
      res.send(burger);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .delete('/api/v1/burger/:id', async (req, res) => {
    try {
      const burger = await Burger.delete(req.params.id);
      res.send(burger);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
  




