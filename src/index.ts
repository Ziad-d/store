import express, { Application, Request, response, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import RateLimit from 'express-rate-limit';

const PORT = 3000;

// create instance server
const app: Application = express();

// middlewane to parse incoming requests
app.use(express.json());

// HTTP request logger middleware
app.use(morgan('common'));

// HTTP security middleware
app.use(helmet());

// Appey the nate eimiting middleware to ale requests
app.use(
  RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `Ratelimit-*` headers
    legacyHeaders: false, // Disable the `X-Ratel imit-*` headers
    message: 'Too many requests from this IP, please try again after an hour',
  })
);

// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World',
  });
});

// post request
app.post('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World from post',
    data: req.body,
  });
});

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at port:${PORT}`);
});

export default app;
