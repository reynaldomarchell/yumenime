import { SiGithub } from "react-icons/si";

export default function MainFooter() {
  return (
    <footer>
      <div className="border-t pt-5 text-gray-300">
        <div className="container mx-auto px-5">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <a
              href="https://github.com/reynaldomarchell/yumenime.git"
              className="transition-colors hover:text-violet-500"
            >
              <p className="text-md flex items-center justify-center gap-2">
                YumeNime
                <SiGithub />
              </p>
            </a>
            <div className="flex space-x-5">
              <a href="#" className="text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-sm">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
