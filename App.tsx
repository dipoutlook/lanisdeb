import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './hooks/components/Header';
import Footer from './hooks/components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import ProfilePage from './pages/ProfilePage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';
import Toast from './hooks/components/Toast';
import { useAuth } from './context/AuthContext';
import AdminLoginPage from './pages/AdminLoginPage';

// FIX: Changed props to use React.PropsWithChildren to resolve issue with children prop type.
const AdminLayout = ({ children }: React.PropsWithChildren<{}>) => (
  <div className="bg-brand-bg-light">{children}</div>
);

// FIX: Changed props to use React.PropsWithChildren to resolve issue with children prop type.
const MainLayout = ({ children }: React.PropsWithChildren<{}>) => (
  <>
    <Header />
    <main className="min-h-screen">{children}</main>
    <Footer />
  </>
);

const PrivateRoute = ({ children }: React.PropsWithChildren<{}>) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
};

export default function App() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="bg-background text-brand-text-light font-sans">
      {isAdminRoute ? (
        <AdminLayout>
          <Routes>
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/*" element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            } />
          </Routes>
        </AdminLayout>
      ) : (
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/products/:productId" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderSuccessPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      )}
      <Toast />
    </div>
  );
}
