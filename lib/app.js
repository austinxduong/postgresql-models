import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';

import dogController from './controllers/dogs.js';
import pizzaController from './controllers/pizza';
import pastaController from './controllers/pasta';

const app = express();

app.use(express.json());

if (app) {
  console.log('hi');
}

app.use(dogController);
app.use(pizzaController);
app.use(pastaController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
