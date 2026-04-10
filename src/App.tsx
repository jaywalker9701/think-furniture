import { Routes, Route } from 'react-router-dom';
import { siteRoutes } from './routes';
import PlaceholderPage from './pages/PlaceholderPage';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import InspirationPage from './pages/InspirationPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import PolicyPage from './pages/PolicyPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="app-container">
          <CookieBanner />
          {/* Dual Navbar Section */}
          <Navbar />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/shipping" element={<PolicyPage title="Shipping Policy" type="shipping" />} />
          <Route path="/returns" element={<PolicyPage title="Returns & Refunds" type="returns" />} />
          <Route path="/terms" element={<PolicyPage title="Terms & Conditions" type="terms" />} />
          <Route path="/privacy" element={<PolicyPage title="Privacy Policy" type="privacy" />} />
          <Route path="/faq" element={<PolicyPage title="FAQ" type="faq" />} />

          <Route path="/categories/:parent/:child" element={<CategoryPage />} />
          <Route path="/categories/:parent/:child/:productId" element={<ProductDetailPage />} />
          
          {siteRoutes
            .filter(r => r.path !== '/' && !r.path.startsWith('/categories/'))
            .map((route) => {
              const isInspiration = [
                "/meeting-room", "/reception", "/breakout-space", "/canteen", 
                "/traditional-work", "/focused-work", "/hybrid-work", 
                "/collaborative-space", "/training-room"
              ].includes(route.path) || route.path.startsWith('/inspiration-by-sector');

              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={isInspiration ? <InspirationPage title={route.name} /> : <PlaceholderPage title={route.name} />}
                />
              );
            })}
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
