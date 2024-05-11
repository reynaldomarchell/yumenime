import { SiGithub } from "react-icons/si";

export default function MainFooter() {
  return (
    <footer>
      <div className="border-t pt-3 text-gray-300 md:pt-5">
        <div className="flex flex-col items-center justify-between gap-1 md:flex-row">
          <a
            href="https://github.com/reynaldomarchell/yumenime.git"
            className="transition-colors hover:text-violet-500"
          >
            <p className="text-md flex items-center justify-center gap-2">
              YumeNime
              <SiGithub />
            </p>
          </a>
          <p className="text-xs">
            Powered by{" "}
            <a
              href="https://github.com/amvstrm/api.git"
              className="transition-colors hover:text-violet-500"
            >
              amvstrm
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/consumet/api.consumet.org.git"
              className="transition-colors hover:text-violet-500"
            >
              Consumet
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
