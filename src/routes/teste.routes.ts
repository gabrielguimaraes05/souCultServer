import {Router} from 'express';

const testeRouter = Router();

testeRouter.get('/', async (_request, response) => {
  return response.json('SUCESSO');
});

export default testeRouter;
