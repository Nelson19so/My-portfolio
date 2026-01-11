import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { LandingPage } from './components/landing/LandingPage';
import { BlogList } from './components/blog/BlogList';
import { BlogDetail } from './components/blog/BlogDetail';
import { ProjectList } from './components/projects/ProjectList';
import { ProjectDetail } from './components/projects/ProjectDetail';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AdminLogin } from './components/admin/AdminLogin';
import { ContactPage } from './components/contact/ContactPage';
import { ServicesPage } from './components/services/ServicesPage';
import { AboutPage } from './components/about/AboutPage';
import { ProtectedRoute } from './components/admin/ProtectedRoute';
import { initializeSampleData } from './utils/sampleData';

export default function App() {
  useEffect(() => {
    initializeSampleData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}