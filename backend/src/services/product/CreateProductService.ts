import prismaClient from "../../prisma";

interface ProductRequest{
    name: string;
    price: string;
    description: string;
    banner: string;
    category: string;
}




class CreateProductService{
    async execute({name, price, description, banner, category}: ProductRequest){

        return {ok: true}
    }

    

}

export {CreateProductService}


