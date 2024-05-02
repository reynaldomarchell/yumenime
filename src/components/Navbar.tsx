import Link from "next/link";
import { Search } from "./Search";
import Image from "next/image";

export function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between border-b px-5 py-3">
        <div className="flex space-x-5 md:space-x-7">
          <Image
            src="/yumenime-logo-white.png"
            width={70}
            height={23}
            alt="logo"
          />
          <Link
            href="#"
            className="font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
        </div>

        <Search />
      </nav>
    </>
  );
}
