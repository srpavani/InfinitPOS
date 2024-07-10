import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController{
    async handle(req: Request, res:Response){
        const {name, price, description, category} = req.body;
        let banner = ''
        const createProductservice = new CreateProductService();
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

export { CreateProductController }