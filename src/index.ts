import { URLController } from './controller/URLController';
import express from "express";
import { MongoConnection } from './database/MongoConnection'
const port = 5000;
const api = express();
api.use(express.json())


const database = new MongoConnection()
database.connect

const urlController = new URLController();
api.post("/shorten", urlController.shorten)
api.get("/:hash", urlController.redirect)

// api.get('/test', (req: Request, res: Response) =>{
//     res.json ({sucesso:true)})
// })

api.listen(port, () => console.log(`Express escutando na porta ${port}`));

