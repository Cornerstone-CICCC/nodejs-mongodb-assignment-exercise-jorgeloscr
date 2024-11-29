import { Request, Response } from "express";
import {Product} from '../models/product.model';



const getAllProducts= async (req:Request, res:Response)=>{
    try{
        const products = await Product.find()
        res.status(201).json(products)

    } catch(err){
        console.error(err)
        res.status(500).json({error:"Unable to get product"})
    }
}
const getProductById= async (req:Request, res:Response)=>{
    try{
        const products = await Product.findById(req.params.id)
        res.status(201).json(products)

    } catch(err){
        console.error(err)
        res.status(500).json({error:"Unable to get product"})
    }
}
const addProduct = async (req:Request, res:Response)=>{
    try{
        const newProduct = await Product.create(req.body)
        res.status(201).json(newProduct)

    } catch(err){
        console.error(err)
        res.status(500).json({error:"Unable to add product"})
    }

}
const updateProduct = async (req:Request <{id:string }>, res:Response)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!product){
            res.status(201).send('product does not exist')
        }
        res.status(201).json(product)

    } catch(err){
        console.error(err)
        res.status(500).json({error:"Unable to upate product"})
    }

}

const deleteProductById= async (req:Request, res:Response)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id)
        
        res.status(201).send("deleted successfully")

    } catch(err){
        
    }
}



export default{
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProductById
}