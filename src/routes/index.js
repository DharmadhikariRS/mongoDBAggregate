import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import courcesRoute from './cources.route'
import covidRoute from './covidData'

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/cources', courcesRoute);
  router.use('/covid',covidRoute)

  return router;
};

export default routes;
