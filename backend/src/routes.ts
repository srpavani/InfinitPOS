import {Router} from 'express'
import {CreateUserController} from './controllers/user/CreateUserController'
import {AuthUserController} from './controllers/user/AuthUserController'
import { DetailuserController } from './controllers/user/DetailUserController';
import { isAutenticated } from './middlewares/isAutenticated';
import {CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
CreateProductController

const router = Router();

// rotas user
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me',isAutenticated,  new DetailuserController().handle)

//rotas category

router.post('/category', isAutenticated, new CreateCategoryController().handle )
router.get('/category', isAutenticated, new ListCategoryController().handle)

/// rotas produtos

router.post('/product', isAutenticated, new CreateProductController().handle )



export { router };
