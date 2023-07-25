import express from "express";

import productCtrl from "../controller/productController"

let router = express.Router();

const productRoute = (app) => {
    router.get("/products", productCtrl.getAllProducts)
    router.get("/product", productCtrl.getProductById)

    return app.use('/',router)
}


module.exports = productRoute