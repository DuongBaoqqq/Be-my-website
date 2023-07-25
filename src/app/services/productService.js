import db from '../../models/index.js'

const productService = {
    getAllProducts: async () => {
        return await db.Product.findAll({
            include: [{
                model: db.User,
                attributes: ['firstName', 'lastName']
            }]
        })
    },
    getProductById: async (id) => {
        return await db.Product.findOne({
            where: { id: id },
            include: [{
                model: db.User,
                attributes: ['firstName', 'lastName']
            }]
        })
    }
}



module.exports = productService