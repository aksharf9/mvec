
// controllers/vendor.controller.js
const db = require("../config/db.config");

// Function to get all vendors
exports.getAllVendors = (req, res) => {
  db.query("SELECT * FROM vendors", (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(results);
  });
};

// Function to get vendor by ID
exports.getVendorById = (req, res) => {
  const vendorId = req.params.id;
  db.query("SELECT * FROM vendors WHERE id = ?", [vendorId], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length === 0) return res.status(404).json({ message: "Vendor not found" });
    res.json(results[0]);
  });
};



// Function to update a vendor
exports.updateVendor = (req, res) => {
  const vendorId = req.params.id;
  const { name, email } = req.body;
  db.query("UPDATE vendors SET name = ?, email = ? WHERE id = ?", [name, email, vendorId], (err, results) => {
    if (err) return res.status(500).json({ message: "Error updating vendor" });
    res.json({ message: "Vendor updated successfully" });
  });
};

// Function to delete a vendor
exports.deleteVendor = (req, res) => {
  const vendorId = req.params.id;
  db.query("DELETE FROM vendors WHERE id = ?", [vendorId], (err, results) => {
    if (err) return res.status(500).json({ message: "Error deleting vendor" });
    res.json({ message: "Vendor deleted successfully" });
  });
};


//NewUpDate
// Update Vendor Settings
exports.updateVendorSettings = (req, res) => {
  const vendorId = req.params.id;
  const { commissionRate, monthlyFee } = req.body;

  db.query(
    'UPDATE vendors SET commissionRate = ?, monthlyFee = ? WHERE id = ?',
    [commissionRate, monthlyFee, vendorId],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'Update failed', err });
      res.json({ message: 'Vendor settings updated' });
    }
  );
};
