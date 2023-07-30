import productService from '../services/productService'


const productCtrl = {
    getAllProducts: async (req, res) => {
        const data = await productService.getAllProducts()
        res.status(200).json(data)
    },
    getProductById: async (req, res) => {
        const data = await productService.getProductById(req.body.id)
        res.status(200).json(data)
    },
    addProduct: async (req, res) => {
        const authorization = req.headers.authorization;
        const product = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
        }
        const auth = await productService.addProduct(product, authorization)
        res.status(200).json(auth)
    },
    updateProduct: async (req, res) => {
        const authorization = req.headers.authorization;
        const product = {
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
        }
        const auth = await productService.updateProduct(product, authorization)
        res.status(200).json(auth)
    },
    deleteProduct: async (req, res) => {
        const authorization = req.headers.authorization;
        const id = req.body.id;
        const message = await productService.deleteProduct(id, authorization)
        res.status(200).json(message)
    }
} 


module.exports = productCtrl