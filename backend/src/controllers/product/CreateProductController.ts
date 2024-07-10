import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController{
    async handle(req: Request, res:Response){
        const {name, price, description, category} = req.body;
        
        const createProductservice = new CreateProductService();

        if(!req.file){
            throw new Error("erro ao enviar imagem");
        }else{

            const { originalname, filename: banner } = req.file;
            

            const product = await createProductservice.execute({
                name,
                price,
                description,
                category,
                banner,
            });

            return res.json(product)

        }



        

        
    }
}

export { CreateProductController }