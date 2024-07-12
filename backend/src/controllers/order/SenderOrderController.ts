import {Request, Response} from 'express'
import { SendOrderService } from '../../services/order/SendOrderService'

class SenderOrderController{
    async handle(req: Request, res: Response){

        const { order_id }  = req.body
        const sendOrderService = new SendOrderService();

        const order = await sendOrderService.execute({
            order_id
        });

        return res.json(order);

    }
}

export {SenderOrderController}