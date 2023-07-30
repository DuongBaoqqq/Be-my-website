import db from '../../models/index.js'
import  jwt  from 'jsonwebtoken'

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
    },
    addProduct: async (product,auth) => {
        try {
            let infor = jwt.verify(auth,'imrabbit')
            product.sellerId = infor.id
            // console.log(product);
            await db.Product.create(product)
            return 'add thanh cong'
        } catch (error) {
            return error            
        }
    },
    updateProduct: async (product,auth) => {
        try {
            let infor = jwt.verify(auth, 'imrabbit')
            console.log(infor);
            console.log(product.sellerId);
            if (infor.role === 'seller') {
                await db.Product.update({
                    name: product.name,
                    description: product.description,
                    price: product.price,
                }, {
                    where:{id: product.id}
                })
                return 'update thanh cong'
            }
            else
                return 'ban khong duoc quyen update'
        } catch (error) {
            return error.message
        }
    },
    deleteProduct: async (id,auth) => {
        try {
            let infor = jwt.verify(auth, 'imrabbit')
            console.log(infor);
            // console.log(product.sellerId);
            if (infor.role === 'seller') {
                await db.Product.destroy({
                    where: {id: id}
                })
                return 'da xoa'
            }
            else
                return 'khong co quyen xoa'
        } catch (error) {
            return error
        }
    }
}



module.exports = productService