import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Camera, Mail, Users, ChevronDown } from 'lucide-react';
import './CategoryPage.css';

interface Product {
  productId: string;
  title: string;
  brand: string;
  priceExc: string;
  priceInc: string;
  mainImage: string;
  url: string;
}

interface PriceRange {
  label: string;
  min: number;
  max: number | null;
}

const priceRanges: PriceRange[] = [
  { label: '£0.00 - £341.00', min: 0, max: 341 },
  { label: '£341.00 - £554.00', min: 341, max: 554 },
  { label: '£554.00 - £767.00', min: 554, max: 767 },
  { label: '£767.00 - £980.00', min: 767, max: 980 },
  { label: '£980.00 - £1,193.00', min: 980, max: 1193 },
  { label: '£1,193.00+', min: 1193, max: null }
];

const CategoryPage: React.FC = () => {
  const { parent, child } = useParams<{ parent: string; child: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/data/categories/${parent}/${child}_data.json`);
        if (!response.ok) throw new Error('Failed to load products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('No products found for this category yet.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
    window.scrollTo(0, 0);
  }, [parent, child]);

  const uniqueBrands = useMemo(() => {
    const brands = new Set(products.map(p => p.brand).filter(Boolean));
    return Array.from(brands).sort();
  }, [products]);

  const parsePrice = (priceStr: string): number => {
    if (!priceStr) return 0;
    return parseFloat(priceStr.replace(/[£,]/g, '')) || 0;
  };

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchBrand = !selectedBrand || p.brand === selectedBrand;
      
      let matchPrice = true;
      if (selectedPriceRange) {
        const price = parsePrice(p.priceExc);
        matchPrice = price >= selectedPriceRange.min && (selectedPriceRange.max === null || price <= selectedPriceRange.max);
      }
      
      return matchBrand && matchPrice;
    });
  }, [products, selectedBrand, selectedPriceRange]);

  const capitalize = (str: string | undefined) => {
    if (!str) return '';
    return str.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  };

  return (
    <div className="category-page-fluid">
      <div className="category-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link> / <span>{capitalize(parent)}</span> / <span className="current">{capitalize(child)}</span>
        </nav>

        {/* Hero Section */}
        <header className="category-header">
          <h1>{capitalize(child)}</h1>
        </header>

        {/* Let Us Help Section */}
        <section className="help-section">
          <h2>LET US HELP</h2>
          <p className="help-subtitle">If you're not sure what would be best for your space, then simply follow these 3 easy steps and we will help you out:</p>
          
          <div className="help-steps">
            <div className="step-card">
              <div className="step-icon-box">
                <Camera size={54} />
              </div>
              <h3>STEP 1</h3>
              <p>Take a picture or sketch of your space, with dimensions.</p>
            </div>
            <div className="step-card">
              <div className="step-icon-box">
                <Mail size={54} />
              </div>
              <h3>STEP 2</h3>
              <p>Send it to us along with your preferred style ideas to info@think-furniture.com.</p>
            </div>
            <div className="step-card">
              <div className="step-icon-box">
                <Users size={54} />
              </div>
              <h3>STEP 3</h3>
              <p>We'll be back in touch with a selection of tailor made solutions for you.</p>
            </div>
          </div>
          <button className="discuss-btn">DISCUSS OPTIONS NOW</button>
        </section>

        <div className="category-main-content">
          {/* Sidebar */}
          <aside className="category-sidebar">
            <div className="filter-group">
              <h4 className="filter-title">Price <ChevronDown size={14} /></h4>
              <ul className="filter-list">
                <li 
                  className={!selectedPriceRange ? 'active' : ''} 
                  onClick={() => setSelectedPriceRange(null)}
                >
                  All Prices
                </li>
                {priceRanges.map(range => (
                  <li 
                    key={range.label} 
                    className={selectedPriceRange?.label === range.label ? 'active' : ''}
                    onClick={() => setSelectedPriceRange(range)}
                  >
                    {range.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="filter-group">
              <h4 className="filter-title">Brand <ChevronDown size={14} /></h4>
              <ul className="filter-list brand-list">
                <li 
                  className={!selectedBrand ? 'active' : ''} 
                  onClick={() => setSelectedBrand(null)}
                >
                  All Brands
                </li>
                {uniqueBrands.map(brand => (
                  <li 
                    key={brand} 
                    className={selectedBrand === brand ? 'active' : ''}
                    onClick={() => setSelectedBrand(brand)}
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Listing Area */}
          <div className="product-listing-area">
            <div className="listing-controls">
              <p className="product-count">{filteredProducts.length} Products Found</p>
              <div className="sort-box">
                <span>Sort by:</span>
                <select>
                  <option>Newest</option>
                  <option>Price (Low to High)</option>
                  <option>Price (High to Low)</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="loading-state"><div className="loader"></div></div>
            ) : error ? (
              <div className="error-state">{error}</div>
            ) : (
              <div className="product-grid">
                {filteredProducts.map((product, index) => (
                  <Link to={`/categories/${parent}/${child}/${product.productId}`} key={index} className="product-card">
                    <div className="product-image">
                      <img src={product.mainImage?.replace(/160w|320w/g, 'original')} alt={product.title} />
                    </div>
                    <div className="product-info">
                      <span className="brand-label">{product.brand}</span>
                      <h3 className="product-title">{product.title}</h3>
                      <div className="price-container">
                        {product.priceExc && <span className="price-exc">{product.priceExc}</span>}
                        {product.priceInc && <span className="price-inc">{product.priceInc}</span>}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
