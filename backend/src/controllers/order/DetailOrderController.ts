import { Request, Response } from "express";

import { DetailOderService } from "../../services/order/DetailOrderService";

class DetailOrderController{
    async handle(req: Request, res:Response){
        const order_id = req.query.order_id as string

        const detailorderService = new DetailOderService();

        const order = await detailorderService.execute({
            order_id
        })

        return res.json(order);

    } 

}

export {DetailOrderController}