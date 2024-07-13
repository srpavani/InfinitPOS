import {NextFunction, Router} from 'express'
import multer from 'multer';
import { Request, Response } from 'express';
import {CreateUserController} from './controllers/user/CreateUserController'
import {AuthUserController} from './controllers/user/AuthUserController'
import { DetailuserController } from './controllers/user/DetailUserController';
import { isAutenticated } from './middlewares/isAutenticated';
import {CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import uploadConfig from './config/multer'
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SenderOrderController } from './controllers/order/SenderOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';





const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

//


router.use((req: Request, res: Response, next: NextFunction) => {
    const sendB = res.send.bind(res);
    res.send = (body) => {
        console.log(`rota chamada: ${req.path}, metodo: ${req.method}`);
        console.log(`status: ${res.statusCode} - ${res.statusCode < 400 ? 'bem-sucedido' : 'bad request'}`);
        return sendB(body);
    };
    next();
});



// rotas user
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me',isAutenticated,  new DetailuserController().handle)

//rotas category

router.post('/category', isAutenticated, new CreateCategoryController().handle )
router.get('/category', isAutenticated, new ListCategoryController().handle)

/// rotas produtos

router.post('/product', isAutenticated, upload.single('file'), new CreateProductController().handle)
router.get('/category/product', isAutenticated, new ListByCategoryController().handle)


//rotas order

router.post('/order', isAutenticated,new CreateOrderController().handle)
router.delete('/order', isAutenticated,new RemoveOrderController().handle)

router.post('/order/add', isAutenticated,new AddItemController().handle)
router.delete('/order/remove', isAutenticated,new RemoveItemController().handle)

router.put('/order/send', isAutenticated,new SenderOrderController().handle)

router.get('/order/list', isAutenticated,new ListOrderController().handle)

router.get('/order/detail', isAutenticated,new DetailOrderController().handle)

router.put('/order/finish', isAutenticated,new FinishOrderController().handle)

export { router };
