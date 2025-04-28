
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Telegram, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-xl font-bold mb-4">СоксСтайл</h3>
            <p className="text-gray-400 mb-4">
              Мы предлагаем стильные носки и футболки высокого качества для тех, 
              кто ценит комфорт и индивидуальность.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Telegram size={20} />
              </a>
            </div>
          </div>
          
          {/* Категории */}
          <div>
            <h3 className="text-xl font-bold mb-4">Категории</h3>
            <ul className="space-y-2">
              <li><Link to="/socks" className="text-gray-400 hover:text-white">Носки</Link></li>
              <li><Link to="/tshirts" className="text-gray-400 hover:text-white">Футболки</Link></li>
              <li><Link to="/sales" className="text-gray-400 hover:text-white">Акции</Link></li>
              <li><Link to="/new" className="text-gray-400 hover:text-white">Новинки</Link></li>
            </ul>
          </div>
          
          {/* Информация */}
          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">О нас</Link></li>
              <li><Link to="/delivery" className="text-gray-400 hover:text-white">Доставка и оплата</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white">Возврат товара</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">Вопросы и ответы</Link></li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-400" />
                <a href="tel:+74951234567" className="text-gray-400 hover:text-white">+7 (495) 123-45-67</a>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <a href="mailto:info@socksstyle.ru" className="text-gray-400 hover:text-white">info@socksstyle.ru</a>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-gray-400" />
                <span className="text-gray-400">г. Москва, ул. Примерная, 123</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 СоксСтайл. Все права защищены.</p>
          <div className="mt-4 md:mt-0">
            <img src="https://via.placeholder.com/240x30/333333/FFFFFF?text=Payment+Methods" alt="Способы оплаты" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
