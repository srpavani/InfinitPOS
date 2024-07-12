import { Response, Request } from "express";

import { FinishOrderService } from "../../services/order/FinishOrderService";

class FinishOrderController{
    async handle(req: Request, res: Response){
        const {order_id} = req.body

        const finishorder = new FinishOrderService();

        const order = await finishorder.execute({
            order_id
        })
        return res.json(order)
    }

}

export {FinishOrderController}