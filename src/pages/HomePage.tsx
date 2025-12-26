import { CarouselComponent } from "@/layouts/CarouselComponent";
const HomePage = () => {
  return (
    <div className="container mx-auto p-4">     
        <h1 className="text-3xl font-bold mb-4">Welcome to FourWheelerKart</h1>
        <p className="text-lg mb-6">
          Your one-stop destination for buying and selling cars with ease and confidence.
        </p>
        <CarouselComponent />
    </div>
  );
}   
export default HomePage;