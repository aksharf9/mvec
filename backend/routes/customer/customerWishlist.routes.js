const express = require('express');
const router = express.Router();
const customerWishlistController = require('../../controllers/customer/customerWishlist.controller');

// Wishlist
router.get('/', customerWishlistController.getWishlist);
router.post('/', customerWishlistController.addToWishlist);
router.delete('/:productId', customerWishlistController.removeFromWishlist);

module.exports = router;
