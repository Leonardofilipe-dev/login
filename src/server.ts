import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './router/index'
import db from './dataBase/db';

db.on("error", console.log.bind(console, "Erro ao conectar ao Mongo"));
db.once("open", () => {
  console.log("Connected successfully!");
});

const port = 3000



const app = express();
app.use(express.json());
app.use(cors());
app.use("/", routes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})