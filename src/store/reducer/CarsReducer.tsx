import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";


export interface Car {
  "car-id": string;
  "car-img": string;
  "car-title": string;
  "car-price": number;
  "car-year": number;
  "car-milage": string;
}

export interface CarState {
  cars: Car[];
  recentlyViewedIds: string[]; // Added to track history
  loading?: boolean;
  query?: string;
  selectedCar?: Car | null;
}

const initialState: CarState = {
  cars: [],
  recentlyViewedIds: [], // Initialize as empty array
  loading: false,
  query: "",
  selectedCar: null,
};

export const fetchCarsInfo = createAsyncThunk(
  "cars/fetchCarsInfo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/Cars.json");
      if (!response.ok) {
        throw new Error("Failed to fetch cars data");
      }
      const data = await response.json();
      return data as Car[];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setSelectedCar(state, action: PayloadAction<Car | null>) {
      state.selectedCar = action.payload;
      
      // LOGIC: If a car is selected, add its ID to recently viewed
      if (action.payload) {
        const id = action.payload["car-id"];
        // Remove ID if it already exists (to move it to the top)
        const filteredIds = state.recentlyViewedIds.filter(vId => vId !== id);
        // Add to the beginning and limit to 10 items
        state.recentlyViewedIds = [id, ...filteredIds].slice(0, 10);
      }
    },
    // Optional: Explicitly add to viewed without changing selectedCar
    addToRecentlyViewed(state, action: PayloadAction<string>) {
      const id = action.payload;
      const filteredIds = state.recentlyViewedIds.filter(vId => vId !== id);
      state.recentlyViewedIds = [id, ...filteredIds].slice(0, 10);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarsInfo.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.loading = false;
      })
      .addCase(fetchCarsInfo.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setQuery, setSelectedCar, addToRecentlyViewed } = carsSlice.actions;
export default carsSlice.reducer;
