import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* Flex Container For Logo/Menu */}

        <div className="flex items-center space-x-20">
          <Link
            to="/"
            preventScrollReset={true}
            className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left"
          >
            Jesus Christ
          </Link>
          <div className="hidden space-x-8 font-bold lg:flex">
            <Link
              preventScrollReset={true}
              to="/salvation"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Salvation
            </Link>
            <Link
              preventScrollReset={true}
              to="/repentance-of-sins"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Repentance of sins
            </Link>
            <Link
              preventScrollReset={true}
              to="/revelation"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Revelations
            </Link>
          </div>
        </div>

        {/* Right Buttons Menu */}
        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <Link
            to="/login"
            preventScrollReset={true}
            className="hover:text-veryDarkViolet"
          >
            Login
          </Link>
          <Link
            preventScrollReset={true}
            to="/sign-up"
            className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          id="menu-btn"
          className="block hamburger lg:hidden focus:outline-none"
          type="button"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="menu"
        className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
      >
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <Link
            to="/salvation"
            preventScrollReset={true}
            className="w-full text-center"
          >
            Salvation
          </Link>
          <Link
            to="repentance-of-sins"
            preventScrollReset={true}
            className="w-full text-center"
          >
            Repentance of sins
          </Link>
          <Link
            to="/revelations"
            preventScrollReset={true}
            className="w-full text-center"
          >
            Revelations
          </Link>
          <Link
            preventScrollReset={true}
            to="/login"
            className="w-full pt-6 border-t border-gray-400 text-center"
          >
            Login
          </Link>
          <Link
            preventScrollReset={true}
            to="/sign-up"
            className="w-full py-3 text-center rounded-full bg-cyan"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
