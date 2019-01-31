const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {

    const product = await Product.find({})
    res.send(product)

});

router.get('/:id', async (req, res) =>{
    const product = await Product.findById(req.params.id);
    res.send(product);
});

router.post('/create', async (req, res) => {

    const newProduct = new Product ({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        slot: req.body.slot,
        description: req.body.description,
        period: req.body.period,
        returnValue: req.body.returnValue,
        sharePeriod: req.body.sharePeriod,
        picture: req.body.picture,
        province: req.body.province,
        regional: req.body.regional,
        subdistrict: req.body.subdistrict
    });

    const savedProduct = await newProduct.save()
    res.send({message: 'Product Saved', product: savedProduct})
});

router.put('/edit/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);

    product.name = req.body.name;
    product.type = req.body.type;
    product.price = req.body.price;
    product.slot = req.body.slot;
    product.description = req.body.description;
    product.period = req.body.period;
    product.returnValue = req.body.returnValue;
    product.sharePeriod = req.body.sharePeriod;
    product.picture = req.body.picture;
    product.province = req.body.province;
    product.regional = req.body.regional;
    product.subdistrict = req.body.subdistrict;

    const savedProduct = await product.save();
    res.send({message: 'Product Updated', product: savedProduct});
});

router.delete('/delete/:id', async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    res.send({message: 'product deleted', product: product})
});


module.exports = router;