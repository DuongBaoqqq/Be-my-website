import express from "express";

import productCtrl from "../controller/productController"

let router = express.Router();

const productRoute = (app) => {
    router.get("/products", productCtrl.getAllProducts)
    router.get("/product", productCtrl.getProductById)
    router.post("/createProduct", productCtrl.addProduct)
    router.post("/updateProduct", productCtrl.updateProduct)
    router.post("/deleteProduct", productCtrl.deleteProduct)

    return app.use('/api/',router)
}


module.exports = productRoute