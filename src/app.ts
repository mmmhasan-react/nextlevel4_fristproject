import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  let a = 10;
  res.send('kkkk');
});

console.log(process.cwd());

export default app;
