import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white text-ink dark:bg-slate-950 dark:text-slate-100">
      <ScrollToTop />
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
