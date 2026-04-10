import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewProducts.css';

interface Product {
  productId: string;
  title: string;
  brand: string;
  priceExc: string;
  priceInc: string;
  mainImage: string;
  url: string;
}

const NewProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/categories/seating/task-seating_data.json');
        if (response.ok) {
          const data = await response.json();
          setProducts(data.slice(0, 4));
        }
      } catch (error) {
        console.error('Failed to fetch new products:', error);
      }
    };
    fetchProducts();
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="new-products-section">
      <div className="container">
        <h2 className="section-title">New Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div 
              key={product.productId} 
              className="product-card" 
              onClick={() => navigate(`/categories/seating/task-seating/${product.productId}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="product-img-box">
                <img src={product.mainImage} alt={product.title} className="product-img" />
              </div>
              <div className="product-details">
                <span className="product-brand">{product.brand}</span>
                <h3 className="product-name">{product.title}</h3>
                <div className="product-price">
                  <span className="price-reg">£{product.priceExc}</span>
                  <span className="price-vat">£{product.priceInc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
