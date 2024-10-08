const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Products',
        path:'/admin/add-product', 
        editing: false 
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, price, imageUrl, description)
        .save()
        .then( result => {
            // console.log(result);
            res.redirect('/admin/products');
        })
        .catch( err => {
            console.log(err);
        });
};

// exports.getEditProduct = (req, res, next) => {
//     const editMode = req.query.edit;
//     if(!editMode){
//      res.redirect('/');
//     }
//     const prodId = req.params.productId;
//     req.user.getProducts({ where: {id: prodId}})
//         .then( products => {
//             if(!products){
//                 return res.redirect('/');
//             }
//             res.render('admin/edit-product', {
//                 pageTitle: 'Edit Product',
//                 path:'/admin/edit-product',
//                 editing: editMode,
//                 product: products[0]
//             });
//         })
//         .catch( err => {
//             console.log(err);
//         })
// };

// exports.postEditProduct = (req, res, next) => {
//     const prodId = req.body.productId;
//     const updatedTitle = req.body.title;
//     const updatedImageUrl = req.body.imageUrl;
//     const updatedPrice = req.body.price;
//     const updatedDescription = req.body.description;
//     Product.findByPk(prodId)
//         .then( product => {
//             product.title = updatedPrice;
//             product.imageUrl = updatedImageUrl;
//             product.price = updatedPrice;
//             product.description  = updatedDescription;
//             return product.save();
//         })
//         .then( result => {
//             console.log("Updated product");
//             res.redirect('/admin/products');
//         })
//         .catch( err => {
//             console.log(err);
//         });
// };

// exports.getProducts = (req, res, next) =>  {
//     req.user.getProducts()
//         .then( products => {
//             res.render('admin/products',{
//                 prods: products,
//                 path: '/admin/products',
//                 pageTitle: 'Admin Products'
//             })
//         })
//         .catch( err => {
//             console.log(err);
//         });
// };

// exports.postDeleteProduct = (req, res, next) => {
//     const prodId = req.body.productId;
//     Product.findByPk(prodId)
//         .then( product => {
//             return product.destroy();
//         })
//         .then ( () => {
//             res.redirect('/admin/products');
//         })
//         .catch( err => {
//             console.log(err);
//         });
// };