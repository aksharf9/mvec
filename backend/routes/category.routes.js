
// routes/category.routes.js
const express = require("express");
const router = express.Router();

// Import the functions from category.controller.js
const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} = require("../controllers/category.controller");

// Define routes with proper handler functions
router.get("/", getCategories);           // List all categories
router.get("/:id", getCategoryById);        // Get a single category by ID
router.post("/", createCategory);           // Create a new category
router.put("/:id", updateCategory);         // Update an existing category
router.delete("/:id", deleteCategory);      // Delete a category

module.exports = router;
