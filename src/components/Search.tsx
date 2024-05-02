import { Input } from "@/components/ui/input";

export function Search() {
  return (
    <Input
      type="search"
      placeholder="Search..."
      className="w-[150px] sm:w-[300px]"
    />
  );
}
