import Link from "next/link";
import Image from "next/image";
import Search from "./search";

export default function MainNav() {
  return (
    <>
      <nav className="flex items-center justify-between border-b pb-3">
        <div className="flex space-x-5 md:space-x-7">
          <Image src="/yumenime-logo.png" width={70} height={23} alt="logo" />
          <Link
            href="/"
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
