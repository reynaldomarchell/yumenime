import { Trending } from "@/components/home/trending";
import { Recent } from "@/components/home/recent";
import { Popular } from "@/components/home/popular";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      <Trending />
      <Recent />
      <Popular />
    </div>
  );
}
