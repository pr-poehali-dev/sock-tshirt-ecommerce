
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BestSellers from "@/components/BestSellers";
import Categories from "@/components/Categories";
import Benefits from "@/components/Benefits";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      {/* Hero секция */}
      <div className="relative w-full h-[500px] bg-gradient-to-r from-purple-100 to-indigo-100">
        <div className="container mx-auto px-4 py-20 flex flex-col items-start justify-center h-full">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 max-w-lg">Комфорт начинается с мелочей</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">Стильные носки и футболки для тех, кто ценит качество и индивидуальность</p>
          <div className="flex space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">Каталог</Button>
            <Button variant="outline" size="lg">О нас</Button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-full h-full flex justify-end items-center opacity-80 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
            alt="Коллекция носков и футболок" 
            className="h-full object-cover object-right-bottom"
          />
        </div>
      </div>

      {/* Секция "Хиты продаж" */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Хиты продаж</h2>
          <BestSellers />
        </div>
      </section>

      <Separator />

      {/* Секция "Категории" */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Наши категории</h2>
          <Categories />
        </div>
      </section>

      {/* Секция "Преимущества" */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Почему выбирают нас</h2>
          <Benefits />
        </div>
      </section>

      {/* Секция "Подписка" */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Подпишитесь на новости</h2>
          <p className="text-gray-600 mb-8">Будьте в курсе новых поступлений и специальных предложений</p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="flex-grow px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="rounded-l-none">Подписаться</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
