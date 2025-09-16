import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logo from '../assets/logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Empreendimentos', href: '/empreendimentos' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Notícias', href: '/noticias' },
    { name: 'Contato', href: '/contato' }
  ]

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  return (
    <header className="bg-slate-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex items-center justify-center py-4 border-b border-slate-700">
          <Link to="/">
            <img src={logo} alt="De Castro Construtora" className="h-12 hover:scale-105 transition-transform duration-300" />
          </Link>
        </div>
        
        {/* Navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 mx-auto">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 ${
                    isActive(item.href) 
                      ? 'bg-blue-600 text-white font-semibold' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 border-t border-slate-700 pt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-600 ${
                    isActive(item.href) 
                      ? 'bg-blue-600 text-white font-semibold' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header

