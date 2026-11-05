import 'dotenv/config';
import express from 'express';
import routerHello from './routes/hello.routes.js';

export const app = express();

app.use(express.json());

// Configurar EJS
app.set("view engine", "ejs");

// Localização dos templates
app.set("views", "./src/views");

app.use('/', routerHello);
