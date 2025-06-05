const express = require('express');
const router = express.Router();
const vendorProductController = require('../controllers/vendorProduct.controller');

// CRUD for vendor's products
router.get('/', vendorProductController.getVendorProducts);
router.post('/', vendorProductController.createProduct);
router.put('/:id', vendorProductController.updateProduct);
router.delete('/:id', vendorProductController.deleteProduct);

module.exports = router;
