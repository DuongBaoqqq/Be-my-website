import productService from '../services/productService'


const productCtrl = {
    getAllProducts: async (req, res) => {
        const data = await productService.getAllProducts()
        res.status(200).json(data)
    },
    getProductById: async (req, res) => {
        const data = await productService.getProductById(req.body.id)
        res.status(200).json(data)
    }
    
} 


module.exports = productCtrl