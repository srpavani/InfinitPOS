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
        const product = await prismaClient.product.create({
            data:{
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category,
            }

        })
        return product;
    }

    

}

export {CreateProductService}


