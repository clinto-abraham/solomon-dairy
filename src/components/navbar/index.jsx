const Navbar = () => {
  return (
    <nav class="relative container mx-auto p-6">
      {/* Flex Container For All Items */}

      <div class="flex items-center justify-between">
        {/* Flex Container For Logo/Menu */}

        <div class="flex items-center space-x-20">
          {/* Logo */}
          <a
            href="/"
            onClick={() => console.log("got clicked on h1")}
            class="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left"
          >
            Jesus Christ
          </a>
          {/* <img src="logo.svg" alt="" /> */}
          {/* Left Menu */}
          <div class="hidden space-x-8 font-bold lg:flex">
            <a
              href="/salvation"
              class="text-grayishViolet hover:text-veryDarkViolet"
            >
              Salvation
            </a>
            <a
              href="/repentance-of-sins"
              class="text-grayishViolet hover:text-veryDarkViolet"
            >
              Repentance of sins
            </a>
            <a
              href="/revelation"
              class="text-grayishViolet hover:text-veryDarkViolet"
            >
              Revelations
            </a>
          </div>
        </div>

        {/* Right Buttons Menu */}
        <div class="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <a href="/login">
            <div class="hover:text-veryDarkViolet">Login</div>
          </a>
          <a
            href="/sign-up"
            class="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
          >
            Sign Up
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          id="menu-btn"
          class="block hamburger lg:hidden focus:outline-none"
          type="button"
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="menu"
        class="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
      >
        <div class="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <a href="/salvation" class="w-full text-center">
            Salvation
          </a>
          <a href="repentance-of-sins" class="w-full text-center">
            Repentance of sins
          </a>
          <a href="/revelations" class="w-full text-center">
            Revelations
          </a>
          <a
            href="/login"
            class="w-full pt-6 border-t border-gray-400 text-center"
          >
            Login
          </a>
          <a
            href="/sign-up"
            class="w-full py-3 text-center rounded-full bg-cyan"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
