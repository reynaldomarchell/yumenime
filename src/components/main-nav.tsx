import Link from "next/link";
import Image from "next/image";
import SearchAnime from "./search-anime";

export default function MainNav() {
  return (
    <nav className="flex items-center justify-between border-b pb-2 md:pb-5">
      <Link href="/">
        <Image
          src="/yumenime-logo.png"
          width={70}
          height={23}
          alt="logo"
          className="w-20 md:w-24"
        />
      </Link>
      <SearchAnime />
    </nav>
  );
}
