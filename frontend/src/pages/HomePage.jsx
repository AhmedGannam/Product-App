import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ui/ProductCard';

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="home-container">
      <h1 className="home-title">Current Products 🚀</h1>
      {products && products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: 'bold' }}>
          No products found 😢 <Link to="/create" style={{ color: '#4299e1', textDecoration: 'underline' }}>Create a product</Link>
        </p>
      )}
    </div>
  );
};

export default HomePage;

