
import { 
  Truck, 
  CreditCard, 
  RotateCcw, 
  ShieldCheck 
} from "lucide-react";

// Данные о преимуществах
const benefitsData = [
  {
    id: 1,
    title: "Быстрая доставка",
    description: "Доставка по всей России от 1 до 5 рабочих дней",
    icon: Truck,
  },
  {
    id: 2,
    title: "Удобная оплата",
    description: "Наличные, карты, электронные платежи",
    icon: CreditCard,
  },
  {
    id: 3,
    title: "Гарантия качества",
    description: "Используем только качественные материалы",
    icon: ShieldCheck,
  }
];

const Benefits = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {benefitsData.map((benefit) => (
        <div 
          key={benefit.id} 
          className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
        >
          <div className="mb-4 bg-primary/10 p-4 rounded-full">
            <benefit.icon size={32} className="text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
