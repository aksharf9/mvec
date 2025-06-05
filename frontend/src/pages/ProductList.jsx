import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Spinner, Form, Row, Col, Button, Card, Pagination } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products
    .filter(p =>
      (categoryFilter === '' || p.category === categoryFilter) &&
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="container my-4">
      <h2 className="mb-4">All Products</h2>

      {/* Filter + Search */}
      <Row className="mb-4">
        <Col md={3}>
          <Form.Select
            onChange={e => setCategoryFilter(e.target.value)}
            value={categoryFilter}
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
          </Form.Select>
        </Col>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Button variant="secondary" onClick={() => { setCategoryFilter(''); setSearchTerm(''); }}>
            Clear Filters
          </Button>
        </Col>
      </Row>

      {/* Loading Spinner */}
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row>
          {paginatedProducts.map(product => (
            <Col key={product.id} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.image} height="180px" />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>AED {product.price}</Card.Text>
                  <Link to={`/ProductDetails/${product.id}`} className="btn btn-primary btn-sm">
                    View Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="justify-content-center mt-4">
          {[...Array(totalPages)].map((_, idx) => (
            <Pagination.Item
              key={idx + 1}
              active={idx + 1 === currentPage}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </div>
  );
};

export default ProductList;
