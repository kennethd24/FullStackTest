/* eslint-disable no-console */
import express, { Express, Request, Response } from 'express';

// const app: Express = express();
// eslint-disable-next-line import/prefer-default-export
export const app = express();
const port = 3000;

app.post('/warehouse', async (req: Request, res: Response) => {
  try {
    // insert to database
    res.status(200).send('Received new warehouse');
  } catch (err) {
    console.log('Error creating new warehouse: ', err);
    res.status(400).send(err);
  }
});

app.get('/api/test', (_, res) => res.json({ greeting: 'Hello' }));

app.listen(port, () => {
  console.log('listening on port: ', port);
});

if (!process.env.VITE) {
  const frontendFiles = `${process.cwd()}/dist`;
  app.use(express.static(frontendFiles));
  app.get('/*', (_, res) => {
    res.send(`${frontendFiles}/index.html`);
  });
  app.listen(process.env.PORT);
}
