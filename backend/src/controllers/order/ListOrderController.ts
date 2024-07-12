import { Response, Request } from "express";
import { ListOrderService } from "../../services/order/ListOrderService";

class ListOrderController{
    async handle(req: Request, res:Response){
    
        const listorderService = new ListOrderService();

        const order = await  listorderService.execute();

        return res.json(order)
    }
    
}

export {ListOrderController}