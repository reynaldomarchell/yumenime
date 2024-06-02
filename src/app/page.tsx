import { Trending } from "@/components/home/trending";
import { Recent } from "@/components/home/recent";
import { Popular } from "@/components/home/popular";

export default function Home() {
  return (
    <div className="h-dvh w-full px-8">
      <Trending />
      <Recent />
      <Popular />
    </div>
  );
}
