import { errors } from 'celebrate';
import * as cors from 'cors';
import express from 'express';
import routes from './routes';

const app = express();

app.use(cors.default());
app.use(express.json());
app.use(routes);
app.use(errors());

export default app;
