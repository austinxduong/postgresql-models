import { Router } from 'express';
import Pasta from '../models/Pasta';


export default Router()

  .post('/api/v1/pasta', async (req, res) => {
    console.log(req.body);
    try {
      const pasta = await Pasta.insert(req.body);
      res.send(pasta);
    //   console.log('hey this is pasta',pasta);
    } catch (err) {
      res.status(500).send({ error: err.message });

    }   
  })

  .get('/api/v1/pasta', async (req, res) => {
    try {
      const pasta = await Pasta.findAll();
      res.send(pasta);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
