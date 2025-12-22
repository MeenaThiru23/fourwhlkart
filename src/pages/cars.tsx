import { useEffect, useState } from "react";
import carsData from "@/utils/Cars.json";
import CarCard from "@/layouts/CarCard";

const CarsPage = () => {            
//     const [cars, setCars] = useState([]);
//     const [loading, setLoading] = useState(true);   
//     useEffect(() => {
//         fetch('/cars.json') 
//         .then(response => {
//             if (!response.ok) throw new Error("Failed to fetch");
//             return response.json();
//         })
//         .then(data => {
//             setCars(data);
//             setLoading(false);
//         })
//         .catch(err => console.error(err));
// }, []);    
//     if (loading) {
//         return <div>Loading...</div>;
//     }
    const selectedCar = carsData.find(car => car["car-id"] === "014");
    return (
        // <div>
        //     <h1>Car List</h1>
        //      {selectedCar && <CarCard car={selectedCar} />}
        //             </div>
         <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Our Inventory</h1>
      
      {/* 
         The Grid:
         grid-cols-1: 1 card on mobile
         md:grid-cols-2: 2 cards on tablet
         lg:grid-cols-3: 3 cards on desktop
         xl:grid-cols-4: 4 cards on large screens
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {carsData.map((individualCar) => (
          <CarCard 
            key={individualCar["car-id"]} 
            car={individualCar} 
          />
        ))}
      </div>
    </div>
    );
}   

export default CarsPage;