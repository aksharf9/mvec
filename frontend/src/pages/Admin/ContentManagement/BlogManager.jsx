import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import '../../../styles/CMS.css';

const BlogManager = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Why SnapBasket Is the Future of Shopping',
      content: 'SnapBasket brings together local vendors and fast delivery…',
      date: '2024-06-01',
      published: true,
    },
  ]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addBlog = () => {
    const newBlog = {
      id: Date.now(),
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      published: true,
    };
    setBlogs([newBlog, ...blogs]);
    setTitle('');
    setContent('');
  };

  const togglePublish = (id) => {
    setBlogs((prev) =>
      prev.map((blog) =>
        blog.id === id ? { ...blog, published: !blog.published } : blog
      )
    );
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  return (
    <div className="admin-page d-flex">
      <AdminSidebar />
      <div className="admin-content p-4">
        <h2>Blog Manager</h2>

        <div className="mt-4 mb-5">
          <h5>Create New Blog Post</h5>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="form-control mb-2"
            rows="5"
            placeholder="Blog Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addBlog}>
            Publish Post
          </button>
        </div>

        <h5>All Blog Posts</h5>
        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.title}</td>
                <td>{blog.date}</td>
                <td>
                  <span className={`badge bg-${blog.published ? 'success' : 'secondary'}`}>
                    {blog.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() => togglePublish(blog.id)}
                  >
                    {blog.published ? 'Unpublish' : 'Publish'}
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteBlog(blog.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogManager;
