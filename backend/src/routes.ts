import {Router} from 'express'
import multer from 'multer';
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


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

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




export { router };
