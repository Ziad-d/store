import express, { Application, Request, response, Response } from 'express';

const PORT = 3000;

// create instance server
const app: Application = express();

// add routing for / path
app.get('/api', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World',
  });
});

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at port:${PORT}`);
});

export default app;
