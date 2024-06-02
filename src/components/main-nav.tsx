import Link from "next/link";
import Image from "next/image";
import SearchAnime from "./search-anime";

export default function MainNav() {
  return (
    <nav className="flex items-center justify-between border-b px-8 py-2 md:py-4">
      <Link href="/">
        <div className="rounded-md px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-800">
          <Image
            src="/yumenime-logo.png"
            width={70}
            height={23}
            alt="logo"
            className="w-16 md:w-20"
          />
        </div>
      </Link>
      <SearchAnime />
    </nav>
  );
}
