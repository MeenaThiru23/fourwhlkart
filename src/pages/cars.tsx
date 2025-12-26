import CarCard from "../layouts/CarCard";
import useCars from "@/hooks/useCars";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setQuery } from "../store/reducer/CarsReducer";
import { Fragment } from "react/jsx-runtime";

const Cars = () => {
  const { cars, loading } = useCars();

  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.cars.query);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setQuery(value));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    
      <div className="p-4">
        <h1>Our Inventory</h1>
        <input
          type="text"
          placeholder="Search cars..."
          className="border p-2 w-full mb-4 rounded"
          value={query}
          onChange={handleInputChange}
        />
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4">
          {cars.map((car) => (
            <Fragment key={car["car-id"]}>
              <CarCard car={car} />
            </Fragment>
          ))}
        </section>
      </div>
    
  );
};

export default Cars;
