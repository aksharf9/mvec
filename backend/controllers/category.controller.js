const db = require("../config/db.config");

// Create a new category
exports.createCategory = (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Category name is required" });
  }

  const category = { name, description };

  db.query("INSERT INTO categories SET ?", category, (err, result) => {
    if (err) {
      console.error("Error inserting category:", err);
      return res.status(500).json({ message: "Error creating category" });
    }

    res.status(201).json({ id: result.insertId, ...category });
  });
};

// Get all categories
exports.getCategories = (req, res) => {
  db.query("SELECT * FROM categories", (err, results) => {
    if (err) {
      console.error("Error fetching categories:", err);
      return res.status(500).json({ message: "Error retrieving categories" });
    }

    res.json(results);
  });
};

// Get a single category by ID
exports.getCategoryById = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM categories WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Error fetching category:", err);
      return res.status(500).json({ message: "Error retrieving category" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(results[0]);
  });
};

// Update a category
exports.updateCategory = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  db.query(
    "UPDATE categories SET name = ?, description = ? WHERE id = ?",
    [name, description, id],
    (err, result) => {
      if (err) {
        console.error("Error updating category:", err);
        return res.status(500).json({ message: "Error updating category" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Category not found" });
      }

      res.json({ message: "Category updated successfully" });
    }
  );
};

// Delete a category
exports.deleteCategory = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM categories WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Error deleting category:", err);
      return res.status(500).json({ message: "Error deleting category" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({ message: "Category deleted successfully" });
  });
};
