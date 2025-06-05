const db = require("../config/db.config");

// 📄 CMS Pages
exports.getPages = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM cms_pages");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPage = async (req, res) => {
  const { title, slug, content, status } = req.body;
  try {
    await db.execute(
      "INSERT INTO cms_pages (title, slug, content, status) VALUES (?, ?, ?, ?)",
      [title, slug, content, status || 'draft']
    );
    res.status(201).json({ message: "Page created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePage = async (req, res) => {
  const { id } = req.params;
  const { title, slug, content, status } = req.body;
  try {
    await db.execute(
      "UPDATE cms_pages SET title = ?, slug = ?, content = ?, status = ? WHERE id = ?",
      [title, slug, content, status, id]
    );
    res.json({ message: "Page updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletePage = async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute("DELETE FROM cms_pages WHERE id = ?", [id]);
    res.json({ message: "Page deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📰 CMS Blog
exports.getBlogs = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM cms_blog");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBlog = async (req, res) => {
  const { title, slug, content, tags, status } = req.body;
  try {
    await db.execute(
      "INSERT INTO cms_blog (title, slug, content, tags, status) VALUES (?, ?, ?, ?, ?)",
      [title, slug, content, tags, status || 'draft']
    );
    res.status(201).json({ message: "Blog created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, slug, content, tags, status } = req.body;
  try {
    await db.execute(
      "UPDATE cms_blog SET title = ?, slug = ?, content = ?, tags = ?, status = ? WHERE id = ?",
      [title, slug, content, tags, status, id]
    );
    res.json({ message: "Blog updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute("DELETE FROM cms_blog WHERE id = ?", [id]);
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};





const db = require('../config/db.config');

const query = (sql, values = []) =>
  new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });

// ----- Pages -----
exports.getAllPages = async (req, res) => {
  try {
    const data = await query("SELECT * FROM cms_pages");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createPage = async (req, res) => {
  const { title, slug, content, status } = req.body;
  try {
    await query(
      "INSERT INTO cms_pages (title, slug, content, status) VALUES (?, ?, ?, ?)",
      [title, slug, content, status]
    );
    res.status(201).json({ message: "Page created" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updatePage = async (req, res) => {
  const { id } = req.params;
  const { title, slug, content, status } = req.body;
  try {
    await query(
      "UPDATE cms_pages SET title=?, slug=?, content=?, status=? WHERE id=?",
      [title, slug, content, status, id]
    );
    res.json({ message: "Page updated" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deletePage = async (req, res) => {
  const { id } = req.params;
  try {
    await query("DELETE FROM cms_pages WHERE id=?", [id]);
    res.json({ message: "Page deleted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// ----- Blogs -----
exports.getAllBlogs = async (req, res) => {
  try {
    const data = await query("SELECT * FROM cms_blogs");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createBlog = async (req, res) => {
  const { title, slug, content, author, published_at } = req.body;
  try {
    await query(
      "INSERT INTO cms_blogs (title, slug, content, author, published_at) VALUES (?, ?, ?, ?, ?)",
      [title, slug, content, author, published_at]
    );
    res.status(201).json({ message: "Blog created" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, slug, content, author, published_at } = req.body;
  try {
    await query(
      "UPDATE cms_blogs SET title=?, slug=?, content=?, author=?, published_at=? WHERE id=?",
      [title, slug, content, author, published_at, id]
    );
    res.json({ message: "Blog updated" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    await query("DELETE FROM cms_blogs WHERE id=?", [id]);
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
