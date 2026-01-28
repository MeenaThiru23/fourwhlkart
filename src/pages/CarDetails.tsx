/* const CarDetails = () => {
    return <div>Car Details Page</div>;
};

export default CarDetails; */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { fetchCarsInfo } from "@/store/reducer/CarsReducer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  
  // Get cars and loading status from Redux
  const { cars, loading } = useAppSelector((state) => state.cars);

  useEffect(() => {
    if (cars.length === 0 && !loading) {
      dispatch(fetchCarsInfo());
    }
  }, [cars.length, loading, dispatch]);

  const car = cars.find((c) => c["car-id"] === id);

   if (loading || (cars.length === 0)) {
    return <div className="p-20 text-center text-xl">Loading car details...</div>;
  }

  if (!car) {
    return <div className="p-20 text-center text-xl text-red-500">Car not found</div>;
  }

  const handleContactSeller = () => {
    const sellerEmail = "abc@gmail.com";
    const subject = encodeURIComponent(`Inquiry about ${car["car-title"]} (ID: ${car["car-id"]})`);
    const body = encodeURIComponent(
      `Hello,\n\nI am interested in the ${car["car-title"]} listed on FOURWHLKART.\n\n` +
      `Car Details:\n` +
      `- Year: ${car["car-year"]}\n` +
      `- Price: $${car["car-price"].toLocaleString()}\n\n` +
      `Please let me know if it is still available.`
    );

    // This opens the user's email app
    window.location.href = `mailto:${sellerEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Image Gallery */}
        <div className="h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden border shadow-lg">
          <img src={car["car-img"]} alt={car["car-title"]} className="w-full h-full object-contain" />
        </div>

        {/* Right: Car Info */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-2">Featured</Badge>
            <h1 className="text-4xl font-bold">{car["car-title"]}</h1>
            <p className="text-2xl text-primary font-bold mt-2">
              ${car["car-price"].toLocaleString()}
            </p>
          </div>

          <Separator />

          <div className="grid grid-cols-2 gap-4 text-muted-foreground">
            <div>
              <p className="text-sm">Year</p>
              <p className="font-semibold text-foreground">{car["car-year"]}</p>
            </div>
            <div>
              <p className="text-sm">Mileage</p>
              <p className="font-semibold text-foreground">{car["car-milage"]}</p>
            </div>
          </div>

          <Separator />

          <p className="text-muted-foreground leading-relaxed">
            Experience the ultimate driving machine with this {car["car-title"]}. 
            Carefully maintained and ready for its next owner.
          </p>
          
          <button onClick={handleContactSeller} className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:opacity-90">
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
