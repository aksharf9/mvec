const db = require("../config/db.config");

// Get all settings under a category
exports.getSettingsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const [results] = await db.execute(
      "SELECT setting_key, setting_value FROM settings WHERE category = ?",
      [category]
    );

    const settings = {};
    results.forEach(({ setting_key, setting_value }) => {
      settings[setting_key] = setting_value;
    });

    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update or insert a setting
exports.updateSetting = async (req, res) => {
  const { category, key } = req.params;
  const { value } = req.body;

  try {
    const [existing] = await db.execute(
      "SELECT id FROM settings WHERE category = ? AND setting_key = ?",
      [category, key]
    );

    if (existing.length > 0) {
      await db.execute(
        "UPDATE settings SET setting_value = ? WHERE category = ? AND setting_key = ?",
        [value, category, key]
      );
    } else {
      await db.execute(
        "INSERT INTO settings (category, setting_key, setting_value) VALUES (?, ?, ?)",
        [category, key, value]
      );
    }

    res.status(200).json({ message: "Setting updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};









const db = require('../config/db.config');

// Helper to wrap queries
const query = (sql, values = []) =>
  new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });

// GENERAL
exports.getGeneralSettings = async (req, res) => {
  try {
    const [data] = await query("SELECT * FROM settings_general LIMIT 1");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateGeneralSettings = async (req, res) => {
  const { site_name, site_logo, contact_email } = req.body;
  try {
    await query(
      "UPDATE settings_general SET site_name=?, site_logo=?, contact_email=?",
      [site_name, site_logo, contact_email]
    );
    res.json({ message: "General settings updated" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Repeat structure for below modules:
exports.getPaymentSettings = async (req, res) => {
  try {
    const [data] = await query("SELECT * FROM settings_payment LIMIT 1");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updatePaymentSettings = async (req, res) => {
  const { stripe_key, cod_enabled } = req.body;
  try {
    await query(
      "UPDATE settings_payment SET stripe_key=?, cod_enabled=?",
      [stripe_key, cod_enabled]
    );
    res.json({ message: "Payment settings updated" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Repeat the same pattern for:
// - getShippingSettings / updateShippingSettings
// - getTaxSettings / updateTaxSettings
// - getEmailSettings / updateEmailSettings
// - getCurrencySettings / updateCurrencySettings
// - getLanguageSettings / updateLanguageSettings
