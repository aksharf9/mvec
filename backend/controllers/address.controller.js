const db = require("../config/db.config.js");

// Create a new address
exports.createAddress = (req, res) => {
  const { user_id, street, city, state, country, postal_code } = req.body;

  if (!user_id || !street || !city || !state || !country || !postal_code) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newAddress = {
    user_id,
    street,
    city,
    state,
    country,
    postal_code
  };

  db.query("INSERT INTO addresses SET ?", newAddress, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error saving address", error: err });
    }
    res.status(201).json({ message: "Address added successfully", address_id: result.insertId });
  });
};

// Get all addresses of a user
exports.getUserAddresses = (req, res) => {
  const user_id = req.params.user_id;

  db.query("SELECT * FROM addresses WHERE user_id = ?", [user_id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching addresses", error: err });
    }
    res.status(200).json(results);
  });
};

// Update an address
exports.updateAddress = (req, res) => {
  const address_id = req.params.address_id;
  const { street, city, state, country, postal_code } = req.body;

  const updatedAddress = {
    street,
    city,
    state,
    country,
    postal_code
  };

  db.query("UPDATE addresses SET ? WHERE id = ?", [updatedAddress, address_id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error updating address", error: err });
    }
    res.status(200).json({ message: "Address updated successfully" });
  });
};

// Delete an address
exports.deleteAddress = (req, res) => {
  const address_id = req.params.address_id;

  db.query("DELETE FROM addresses WHERE id = ?", [address_id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error deleting address", error: err });
    }
    res.status(200).json({ message: "Address deleted successfully" });
  });
};
