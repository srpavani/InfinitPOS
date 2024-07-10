import {Router} from 'express'
import {CreateUserController} from './controllers/user/CreateUserController'
import {AuthUserController} from './controllers/user/AuthUserController'
import { DetailuserController } from './controllers/user/DetailUserController';
import { isAutenticated } from './middlewares/isAutenticated';

import {CreateCategoryController } from './controllers/category/CreateCategoryController'



const router = Router();

// rotas user
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me',isAutenticated,  new DetailuserController().handle)

//rotas categoria

router.post('/category', isAutenticated, new CreateCategoryController().handle )






export { router };
