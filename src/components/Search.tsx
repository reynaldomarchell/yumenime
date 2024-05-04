import { Input } from "@/components/ui/input";

export default function Search() {
  return (
    <Input
      type="search"
      placeholder="Search..."
      className="w-[150px] sm:w-[300px]"
    />
  );
}
