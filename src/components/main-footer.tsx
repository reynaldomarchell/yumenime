import { SiGithub } from "react-icons/si";

export default function MainFooter() {
  return (
    <footer>
      <div className="border-t px-8 py-2 text-gray-300 md:py-4">
        <div className="flex flex-col items-center justify-between gap-1 md:flex-row">
          <a
            href="https://github.com/reynaldomarchell/yumenime.git"
            className="transition-colors hover:text-violet-500"
          >
            <p className="flex items-center justify-center gap-2 text-base">
              YumeNime
              <SiGithub />
            </p>
          </a>
          <p className="text-sm">Made with ❤️ for you</p>
        </div>
      </div>
    </footer>
  );
}
