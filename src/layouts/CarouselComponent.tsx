import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CarCard from "./CarCard";
import carsData from "@/utils/Cars.json";

// 1. TypeScript Interfaces
interface Car {
  "car-id": string;
  "car-img": string;
  "car-title": string;
  "car-price": number;
  "car-year": number;
  "car-milage": string;
}

interface DataCarouselProps {
  cars: Car[];
}

// 2. Reusable Carousel Component
const DataCarousel = ({ cars }: DataCarouselProps) => {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[Autoplay({ delay: 2000, stopOnMouseEnter: true })]}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {cars.map((car) => (
          <CarouselItem
            key={car["car-id"]}
            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="p-1">
              <CarCard car={car} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

// 3. Main Section with Tabs
export function CarouselComponent() {
  // Simulating data split for the two tabs
  const youMightLike = carsData.slice(0, 8) as Car[];
  const recentlyViewed = carsData.slice(8, 16) as Car[];

  return (
    <section className="w-full bg-gradient-to-r from-violet-950 to-violet-180 border-y border-primary/10 py-10 my-8">
      <div className="container mx-auto px-12">
        <Tabs defaultValue="might-like" className="w-full">
          {/* Header with Title and Tabs on the same row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 px-4">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Vehicle Recommendations
            </h2>
            <TabsList className="grid w-full md:w-auto grid-cols-2 bg-background/50 border">
              <TabsTrigger value="might-like">You might like</TabsTrigger>
              <TabsTrigger value="recently-viewed">Recently Viewed</TabsTrigger>
            </TabsList>
          </div>

          {/* Carousel Content for Tab 1 */}
          <TabsContent value="might-like" className="mt-0 outline-none">
            <DataCarousel cars={youMightLike} />
          </TabsContent>

          {/* Carousel Content for Tab 2 */}
          <TabsContent value="recently-viewed" className="mt-0 outline-none">
            <DataCarousel cars={recentlyViewed} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
