
import { Link } from "react-router-dom";

// Данные о категориях
const categoriesData = [
  {
    id: 1,
    name: "Носки",
    description: "Стильные и удобные носки для любого случая",
    image: "https://images.unsplash.com/photo-1589526261866-ab0ef44af04f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    link: "/socks",
  },
  {
    id: 2,
    name: "Футболки",
    description: "Качественные футболки различных стилей и расцветок",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    link: "/tshirts",
  },
  {
    id: 3,
    name: "Новинки",
    description: "Ознакомьтесь с нашими последними поступлениями",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    link: "/new",
  }
];

const Categories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {categoriesData.map((category) => (
        <Link 
          to={category.link} 
          key={category.id} 
          className="group relative overflow-hidden rounded-lg shadow-md h-80"
        >
          <div className="absolute inset-0 bg-black opacity-30 transition-opacity group-hover:opacity-40 z-10" />
          
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-6 text-center">
            <h3 className="text-2xl font-bold mb-2 text-shadow-sm">{category.name}</h3>
            <p className="text-shadow-sm">{category.description}</p>
            <div className="mt-4 bg-white text-primary font-medium px-4 py-2 rounded-md transition-transform duration-300 group-hover:translate-y-1">
              Перейти в каталог
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
