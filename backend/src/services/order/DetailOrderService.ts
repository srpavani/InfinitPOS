import prismaClient from "../../prisma";

interface DetailRequest{
    order_id: string;
}

class DetailOderService{
    async execute({order_id}: DetailRequest){
        const orders = await prismaClient.item.findMany({
            where:{
                order_id: order_id
            },
            include:{
                product: true,
                order: true
            }

        })
        return orders;
    }

}

export {DetailOderService}