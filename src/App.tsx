import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import StoryPage from '@/pages/StoryPage';
import ProductsPage from '@/pages/ProductsPage';
import BenefitsPage from '@/pages/BenefitsPage';
import FaqPage from '@/pages/FaqPage';
import type { PageId } from '@/content';

export default function App() {
  const [page, setPage] = useState<PageId>('home');

  const navigate = (next: PageId) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'story':
        return <StoryPage onNavigate={navigate} />;
      case 'products':
        return <ProductsPage onNavigate={navigate} />;
      case 'benefits':
        return <BenefitsPage onNavigate={navigate} />;
      case 'faq':
        return <FaqPage onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar currentPage={page} onNavigate={navigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
