import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";


class AddItemController{
    async handle(req:Request, res: Response){
        const {order_id, product_id, amount} = req.body

        const addItemsv = new AddItemService();

        const order = await addItemsv.execute({order_id, product_id, amount})
        

        return res.json(order)
    }
}

export {AddItemController}