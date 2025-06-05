import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: Connect to backend API
    console.log(form);
    navigate('/login');
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-4">Create Your SnapBasket Account</h2>
        <form className="col-md-6 mx-auto border p-4 shadow-sm rounded" onSubmit={handleRegister}>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" name="name" required className="form-control" value={form.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" name="email" required className="form-control" value={form.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" name="password" required className="form-control" value={form.password} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Role</label>
            <select name="role" className="form-select" onChange={handleChange}>
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>
          <button className="btn btn-dark w-100" type="submit">Register</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
