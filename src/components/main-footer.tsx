export default function MainFooter() {
  return (
    <footer>
      <div className="border-t py-5 text-gray-300">
        <div className="container mx-auto px-5">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm">
              Made with 💖 by
              <a
                href="http://github.com/reynaldomarchell"
                className="transition-colors hover:text-violet-500"
              >
                {" "}
                Reynaldo
              </a>
            </p>
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
