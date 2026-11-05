import 'dotenv/config';
import express from 'express';
import routerHello from './routes/hello.routes.js';
export const app = express();
app.use(express.json());
app.use('/', routerHello);
//# sourceMappingURL=app.js.map