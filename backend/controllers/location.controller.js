exports.saveLocation = (req, res) => {
    const { lat, lng } = req.body;
    // Could save to user/vendor table if needed
    res.json({ message: 'Location saved', lat, lng });
  };
  
  exports.getNearbyVendors = async (req, res) => {
    const { lat, lng } = req.query;
    try {
      // Simple placeholder: You would implement distance calculation using Haversine formula
      const [vendors] = await db.execute('SELECT id, name, lat, lng FROM users WHERE role = "vendor"');
      res.json(vendors); // Later: filter based on distance
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  