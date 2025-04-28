
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";

// Данные о товарах-бестселлерах
const bestSellersData = [
  {
    id: 1,
    name: "Носки 'Классика'",
    price: 350,
    discount: 0,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "socks",
    isNew: false,
  },
  {
    id: 2,
    name: "Футболка 'Базовая'",
    price: 1290,
    discount: 15,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "tshirts",
    isNew: false,
  },
  {
    id: 3,
    name: "Носки 'Геометрия'",
    price: 450,
    discount: 0,
    image: "https://images.unsplash.com/photo-1580491203467-1b18bd84f39e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "socks",
    isNew: true,
  },
  {
    id: 4,
    name: "Футболка 'Лето'",
    price: 1490,
    discount: 20,
    image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "tshirts",
    isNew: true,
  },
];

const BestSellers = () => {
  // Функция для отображения цены с учетом скидки
  const displayPrice = (price: number, discount: number) => {
    if (discount === 0) {
      return <span className="font-bold">{price} ₽</span>;
    }
    
    const discountedPrice = price - (price * discount / 100);
    return (
      <div className="flex items-center gap-2">
        <span className="font-bold">{discountedPrice} ₽</span>
        <span className="text-gray-500 line-through text-sm">{price} ₽</span>
        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">-{discount}%</span>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {bestSellersData.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <div className="relative overflow-hidden h-72">
            {product.isNew && (
              <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded z-10">
                Новинка
              </div>
            )}
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <button className="absolute top-2 right-2 bg-white p-2 rounded-full text-gray-600 hover:text-red-500 transition-colors">
              <Heart size={18} />
            </button>
          </div>
          <CardContent className="p-4">
            <h3 className="font-medium text-lg mb-1 truncate">{product.name}</h3>
            <div className="mt-2">
              {displayPrice(product.price, product.discount)}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full flex items-center justify-center gap-2">
              <ShoppingCart size={18} />
              В корзину
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BestSellers;
