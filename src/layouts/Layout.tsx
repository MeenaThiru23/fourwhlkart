import CarsPage from "@/pages/cars";
import CarCard from "./CarCard";
import { CarouselComponent } from "./CarouselComponent";






const Layout = () => {
       
  return (
    <div className="flex flex-col min-h-screen py-4">
        <CarouselComponent />
        
        <CarsPage />
        
        </div>

  );
}
export default Layout;