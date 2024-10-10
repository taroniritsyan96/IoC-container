import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

import { getConfig } from './getConfig';
import { getUsers } from './getUsers';

const config = getConfig() || {} as any;
const PORT = process.env.PORT || config.server?.port;

const app = express();

app.use(express.static('dist/client'));
app.use(express.static('static'));

app.get('/api/users', (req: Request, res: Response) => {
  const users = getUsers();

  res.json(users);
});

app.get('/', (req: Request, res: Response) => {
  fs.readFile(path.join(process.cwd(), 'index.html'), 'utf8', (error, data) => {
    if (error) {
      console.log('Reading html file', error);
    }

    const clientConfigStr = JSON.stringify(config.common);
    const document = data.replace(/window.__CONFIG__/, `window.__CONFIG__ = ${clientConfigStr}`);

    res.send(document);
  });
});

app.listen(PORT, () => console.log('App is running on port:', PORT));
