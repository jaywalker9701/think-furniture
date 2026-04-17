import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import { useSEO } from '../hooks/useSEO';
import './ProductDetailPage.css';

interface Product {
  productId: string;
  title: string;
  brand: string;
  priceExc: string;
  priceInc: string;
  mainImage: string;
  url: string;
}

const ProductDetailPage: React.FC = () => {
  const { parent, child, productId } = useParams<{ parent: string; child: string; productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!product) return;
    addToCart({
      productId: product.productId,
      title: product.title,
      price: parseFloat(product.priceExc.replace(/[£,]/g, '')) || 0,
      priceExcStr: product.priceExc,
      image: product.mainImage?.replace(/160w|320w/g, 'original') || '',
      quantity: quantity
    });
    navigate('/cart');
  };

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/data/categories/${parent}/${child}_data.json`);
        if (!response.ok) throw new Error('Failed to load category data');
        const data: Product[] = await response.json();
        
        const foundProduct = data.find(p => p.productId === productId);
        if (!foundProduct) throw new Error('Product not found');
        
        setProduct(foundProduct);
        setCategoryProducts(data.filter(p => p.productId !== productId));
      } catch (err) {
        setError('Product details could not be loaded.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
    window.scrollTo(0, 0);
  }, [parent, child, productId]);

  useSEO({
    title: product ? product.title : 'Loading Product...',
    description: product ? `Buy ${product.title} by ${product.brand}. Premium office furniture from Think Furniture.` : '',
    canonicalUrl: product ? `https://thinkfurniture.co.uk${window.location.pathname}` : '',
    jsonLdSchema: product ? {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": product.title,
      "image": [
        product.mainImage?.replace(/160w|320w/g, 'original') || ''
      ],
      "description": `Premium ${product.title} manufactured by ${product.brand}.`,
      "sku": product.productId,
      "brand": {
        "@type": "Brand",
        "name": product.brand
      },
      "offers": {
        "@type": "Offer",
        "url": `https://thinkfurniture.co.uk${window.location.pathname}`,
        "priceCurrency": "GBP",
        "price": parseFloat(product.priceExc.replace(/[£,]/g, '')) || 0,
        "availability": "https://schema.org/InStock"
      }
    } : undefined
  });

  if (loading) return <div className="detail-loading"><div className="loader"></div><p>Gathering Details...</p></div>;
  if (error || !product) return <div className="detail-error container">{error || 'Product not found'}</div>;

  // Get 4 random related products
  const relatedProducts = [...categoryProducts]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div className="product-detail-page">
      <div className="container">
        {/* Breadcrumb - Clean & Small */}
        <nav className="detail-breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to={`/categories/${parent}/${child}`} className="capitalize">{child?.replace(/-/g, ' ')}</Link> / 
          <span className="current">{product.title}</span>
        </nav>

        <div className="product-main-layout">
          {/* Left: Huge Main Image */}
          <div className="product-visuals">
            <div className="main-stage">
              <img src={product.mainImage?.replace(/160w|320w/g, 'original')} alt={product.title} />
            </div>
            {/* Small Thumbnails (Placeholder for now) */}
            <div className="thumbnails">
              <img src={product.mainImage?.replace(/160w|320w/g, 'original')} alt="thumb" className="active" />
            </div>
          </div>

          {/* Right: Info Panel */}
          <div className="product-actions-panel">
            <span className="product-brand-tag">{product.brand}</span>
            <h1 className="product-main-title">{product.title}</h1>
            
            <div className="price-display-group">
              <span className="price-exc">{product.priceExc} (Exc Tax)</span>
              {product.priceInc && <span className="price-inc">{product.priceInc} (Inc Tax)</span>}
            </div>

            <p className="delivery-status">Delivered in 10-14 days. Custom colours?</p>
            <div className="config-options">
               <label><input type="radio" name="fabric" defaultChecked /> Standard Choice Fabric</label>
               <label><input type="radio" name="fabric" /> Fabric Groups Option </label>
            </div>

            <div className="cart-row">
              <div className="qty-box">
                <label>Quantity</label>
                <div style={{ display: 'flex', border: '1px solid #ddd', width: '100px', height: '42px', overflow: 'hidden' }}>
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{ flex: 1, border: 'none', backgroundColor: '#eaeaea', color: '#000', cursor: 'pointer', fontSize: '20px', fontWeight: 700, padding: 0 }}>-</button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    min="1"
                    style={{ width: '40px', textAlign: 'center', border: 'none', backgroundColor: '#fff', color: '#000', fontSize: '15px', fontWeight: 600, padding: 0, MozAppearance: 'textfield' }}
                  />
                  <button onClick={() => setQuantity(q => q + 1)} style={{ flex: 1, border: 'none', backgroundColor: '#eaeaea', color: '#000', cursor: 'pointer', fontSize: '20px', fontWeight: 700, padding: 0 }}>+</button>
                </div>
              </div>
              <button 
                className="add-to-cart-primary" 
                onClick={handleAddToCart}
              >
                Add To Basket
              </button>
              <button className="wishlist-btn-detail"><Heart size={20} /> Add to wishlist</button>
            </div>
          </div>
        </div>

        {/* Info Tabs Section */}
        <div className="detail-tabs-section">
          <div className="tabs-header">
            <button 
              className={activeTab === 'description' ? 'active' : ''}
              onClick={() => setActiveTab('description')}
            >
              PRODUCT DESCRIPTION
            </button>
            <button 
              className={activeTab === 'reviews' ? 'active' : ''}
              onClick={() => setActiveTab('reviews')}
            >
              PRODUCT REVIEWS (0)
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="description-layout">
                <div className="desc-text-area">
                  <h2>{product.title}</h2>
                  <p><strong>TOTAL COMFORT. TOTAL CONTROL.</strong></p>
                  <p>
                    The {product.title} is engineered for ultimate ergonomic support. 
                    Featuring a spacious backrest and an intuitive design that adapts to every user's needs. 
                    With a sleek finish and adjustable features, this chair ensures comfort in every position.
                  </p>
                  <p>Whether for home or office, it is designed to support you through every task.</p>
                  
                  <h4>Product Specifications:</h4>
                  <ul>
                    <li>Select Black Fabric - SC60999</li>
                    <li>{product.brand} Build Quality</li>
                    <li>Designed for long working hours</li>
                  </ul>
                </div>
                <div className="desc-visual-area">
                  <img src={product.mainImage?.replace(/160w|320w/g, 'original')} alt="Desc visual" />
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="reviews-placeholder">
                <p>No reviews yet. Be the first to review this product!</p>
              </div>
            )}
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="related-products-section">
          <h2 className="section-title">You May Also Like</h2>
          <div className="related-grid">
            {relatedProducts.map(item => (
              <Link 
                to={`/categories/${parent}/${child}/product/${item.productId}`} 
                key={item.productId}
                className="related-item"
              >
                <div className="related-img">
                  <img src={item.mainImage?.replace(/160w|320w/g, 'original')} alt={item.title} />
                </div>
                <div className="related-info">
                  <span className="rel-brand">{item.brand}</span>
                  <p className="rel-title">{item.title}</p>
                  <p className="rel-price">{item.priceExc}</p>
                  <p className="rel-price-inc">{item.priceInc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
