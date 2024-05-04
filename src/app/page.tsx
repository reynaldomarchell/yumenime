import Link from "next/link";
import { TopAiring } from "@/components/top-airing";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-2">
      <TopAiring />
    </div>
  );
}
