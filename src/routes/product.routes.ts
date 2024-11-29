import {Router} from 'express'
import productController from "../controllers/product.controller"
import { Product } from '../models/product.model'

const productRouter = Router()



productRouter.get('/',productController.getAllProducts)
productRouter.post('/',productController.addProduct)
productRouter.post('/:id',productController.updateProduct)
productRouter.get('/:id',productController.getProductById)
productRouter.delete('/:id',productController.deleteProductById)

export default productRouter