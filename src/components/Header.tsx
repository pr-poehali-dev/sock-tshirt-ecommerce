
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Heart, 
  User, 
  Search, 
  Menu, 
  X 
} from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <Link to="/" className="font-bold text-2xl text-primary">СоксСтайл</Link>
          
          {/* Навигация (десктоп) */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Главная</Link>
            <Link to="/socks" className="text-gray-700 hover:text-primary font-medium">Носки</Link>
            <Link to="/tshirts" className="text-gray-700 hover:text-primary font-medium">Футболки</Link>
            <Link to="/sales" className="text-gray-700 hover:text-primary font-medium">Акции</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">О нас</Link>
          </nav>
          
          {/* Действия */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary">
              <Search size={20} />
            </button>
            <Link to="/favorites" className="text-gray-700 hover:text-primary relative">
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-primary relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </Link>
            <Link to="/account" className="text-gray-700 hover:text-primary hidden md:block">
              <User size={20} />
            </Link>
            
            {/* Мобильное меню */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Мобильная навигация */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-primary font-medium">Главная</Link>
              <Link to="/socks" className="text-gray-700 hover:text-primary font-medium">Носки</Link>
              <Link to="/tshirts" className="text-gray-700 hover:text-primary font-medium">Футболки</Link>
              <Link to="/sales" className="text-gray-700 hover:text-primary font-medium">Акции</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary font-medium">О нас</Link>
              <Link to="/account" className="text-gray-700 hover:text-primary font-medium">Личный кабинет</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
