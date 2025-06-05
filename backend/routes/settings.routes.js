const express = require("express");
const router = express.Router();
const {
  getSettingsByCategory,
  updateSetting
} = require("../controllers/settings.controller");

// Get all settings for a category
router.get("/:category", getSettingsByCategory);

// Update a specific setting
router.put("/:category/:key", updateSetting);

module.exports = router;





const settingsController = require('../controllers/settings.controller');

// GENERAL SETTINGS
router.get('/general', settingsController.getGeneralSettings);
router.put('/general', settingsController.updateGeneralSettings);

// PAYMENT SETTINGS
router.get('/payment', settingsController.getPaymentSettings);
router.put('/payment', settingsController.updatePaymentSettings);

// SHIPPING SETTINGS
router.get('/shipping', settingsController.getShippingSettings);
router.put('/shipping', settingsController.updateShippingSettings);

// TAX SETTINGS
router.get('/taxes', settingsController.getTaxSettings);
router.put('/taxes', settingsController.updateTaxSettings);

// EMAIL SETTINGS
router.get('/emails', settingsController.getEmailSettings);
router.put('/emails', settingsController.updateEmailSettings);

// CURRENCY SETTINGS
router.get('/currencies', settingsController.getCurrencySettings);
router.put('/currencies', settingsController.updateCurrencySettings);

// LANGUAGE SETTINGS
router.get('/languages', settingsController.getLanguageSettings);
router.put('/languages', settingsController.updateLanguageSettings);

module.exports = router;
