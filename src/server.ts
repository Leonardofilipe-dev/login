import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './router/index'
const port = 3000

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", routes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})