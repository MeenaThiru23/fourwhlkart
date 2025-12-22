import {
  Command,
  CommandInput,
} from "@/components/ui/command";
import { useState } from "react";
const SearchComponent = () => {
//   const [searchQuery, setSearchQuery] = useState('');
return(
    <Command className="rounded-lg border-grey-200 shadow-md md:min-w-[450px] my-4">
      <CommandInput placeholder="Search..." />
    </Command>
);
}
export default SearchComponent;

