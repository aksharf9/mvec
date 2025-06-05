const express = require("express");
const router = express.Router();
const {
  getPages, createPage, updatePage, deletePage,
  getBlogs, createBlog, updateBlog, deleteBlog
} = require("../controllers/cms.controller");

// Pages
router.get("/pages", getPages);
router.post("/pages", createPage);
router.put("/pages/:id", updatePage);
router.delete("/pages/:id", deletePage);

// Blog
router.get("/blog", getBlogs);
router.post("/blog", createBlog);
router.put("/blog/:id", updateBlog);
router.delete("/blog/:id", deleteBlog);

module.exports = router;




const express = require('express');
const cmsController = require('../controllers/cms.controller');

// Pages
router.get('/pages', cmsController.getAllPages);
router.post('/pages', cmsController.createPage);
router.put('/pages/:id', cmsController.updatePage);
router.delete('/pages/:id', cmsController.deletePage);

// Blog
router.get('/blogs', cmsController.getAllBlogs);
router.post('/blogs', cmsController.createBlog);
router.put('/blogs/:id', cmsController.updateBlog);
router.delete('/blogs/:id', cmsController.deleteBlog);

module.exports = router;
