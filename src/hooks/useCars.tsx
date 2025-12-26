import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks/index.ts";
import { fetchCarsInfo } from "../store/reducer/CarsReducer";

const useCars = () => {
  const dispatch = useAppDispatch();
  const cars = useAppSelector((state) => state.cars.cars);
  const loading = useAppSelector((state) => state.cars.loading);

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(fetchCarsInfo());
    }
  }, [cars.length, dispatch]);

  return { cars, loading };
};

export default useCars;