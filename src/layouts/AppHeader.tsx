import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import { Car } from "lucide-react";

const AppHeader = () => {
  return (
    <div className="flex flex-col">
     <header className="flex flex-row items-center justify-between bg-gradient-to-r from-violet-950 to-violet-180 p-4 border-rounded border-red-300 shadow-md">
      <Link to="/">
        <h1 className="text-lg text-white font-semibold flex flex-row items-center space-x-2">
          <Car className="h-10 w-10" />
          <span>FOURWHLKART</span>
          
        </h1>
      </Link>
      <div className="flex flex-row items-center space-x-4">
        <Link to="/cars" className="text-md font-medium text-gray-700">
          Cars
        </Link>
        <Link to="/Home" className="text-md font-medium text-gray-700">
          Home
        </Link>
        <Link to="/contact" className="text-md font-medium text-gray-700">
          Contact
        </Link>
        <Link to="/profile" className="text-md font-medium text-gray-700">
          Login
        </Link>
        
      </div>

  </header>
        <SearchComponent />
        </div>
  );
}
export default AppHeader;