import * as express from 'express';
import * as cors from 'cors';

import './database';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('__Server started__');
});
