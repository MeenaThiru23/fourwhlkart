import { Calendar, Gauge, CircleDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CarProps {
  car: {
    "car-id": string;
    "car-img": string;
    "car-title": string;
    "car-price": number;
    "car-year": number;
    "car-milage": string;
  };
}

const CarCard = ({ car }: CarProps) => {

    return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      {/* Car Image */}
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img
          src={car["car-img"]}
          alt={car["car-title"]}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1 text-lg">{car["car-title"]}</CardTitle>
        <CardDescription>ID: {car["car-id"]}</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4 p-4 pt-0">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{car["car-year"]}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Gauge className="h-4 w-4" />
            <span>{car["car-milage"]}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-xl font-bold text-primary">
          <CircleDollarSign className="h-5 w-5" />
          <span>${car["car-price"].toLocaleString()}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}
export default CarCard;