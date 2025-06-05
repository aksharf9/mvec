import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Connect with API and AuthContext
    console.log({ email, password });
    navigate('/stores-near-you'); // Temp redirect after login
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-4">Login to SnapBasket</h2>
        <form className="col-md-6 mx-auto border p-4 shadow-sm rounded" onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" required className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" required className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button className="btn btn-dark w-100" type="submit">Login</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
