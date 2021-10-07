import { Request, response, Response } from 'express'
import shortid from 'shortid'
import { config } from '../config/Constants'

export class  URLController{
    public async shorten(req: Request, response: Response): Promise<void> {
        //ver se URL ja nao existe
        //Criar a hash para essa URL para essa URL
        const {originURL} = req.body
        const hash = shortid.generate()
        const shortURL =`${config.API_URL}/${hash}`


        //Salvar a URL no banco
        //Retornar a URL que a gente salvou
        response.json({originURL, hash, shortURL})
    }

    public async redirect(req: Request, response: Response): Promise<void>{
        //pegar o hash da URL
        const {hash} =req.params
        //Encontrar a URL original pelo hash original
        const url = {
            originalURL:"https://cloud.mongodb.com/v2/615df1ca63292a7590f3233a#clusters/connect?clusterId=Cluster0",
            hash: "2xfxaNaH1",
            shortURL: "http://localhost:5000/2xfxaNaH1"
        }
        //Redirecionar a URL Original a partir do que encontramos no DB

        response.redirect(url.originalURL)
 
    }

}
   


