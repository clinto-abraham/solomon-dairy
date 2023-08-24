export default function Footer() {
  return (
    <footer class="py-16 bg-veryDarkViolet">
      <div class="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        {/* Logo */}
        <img src="cross-red.png" alt="" />

        {/* Menus Container */}
        <div class="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          {/* Menu 1 */}
          <div class="flex flex-col items-center w-full md:items-start">
            <div class="mb-5 font-bold text-white capitalize">Features</div>
            <div class="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" class="capitalize text-grayishViolet hover:text-cyan">
                Link shortening
              </a>
              <a href="#" class="capitalize text-grayishViolet hover:text-cyan">
                Branded links
              </a>
              <a href="#" class="capitalize text-grayishViolet hover:text-cyan">
                Analytics
              </a>
            </div>
          </div>

          {/* Menu 2 */}
          <div class="flex flex-col items-center w-full md:items-start">
            <div class="mb-5 font-bold text-white capitalize">Resources</div>
            <div class="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" class="capitalize text-grayishViolet hover:text-cyan">
                Blog
              </a>
              <a href="#" class="capitalize text-grayishViolet hover:text-cyan">
                Developers
              </a>
              <a href="#" class="capitalize text-grayishViolet hover:text-cyan">
                Support
              </a>
            </div>
          </div>

          {/* Menu 3 */}
          <div class="flex flex-col items-center w-full md:items-start">
            <div class="mb-5 font-bold text-white capitalize">Company</div>
            <div class="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" class="capitalize text-grayishViolet hover:text-cyan">
                About
              </a>
              <a href="#" class="capitalize text-grayishViolet hover:text-cyan">
                Our Team
              </a>
              <a href="#" class="capitalize text-grayishViolet hover:text-cyan">
                Careers
              </a>
              <a href="#" class="capitalize text-grayishViolet hover:text-cyan">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Social Container */}
        <div class="flex space-x-6">
          <a href="#">
            <img src="icon-facebook.svg" alt="" class="ficon" />
          </a>
          <a href="#">
            <img src="icon-twitter.svg" alt="" class="ficon" />
          </a>
          <a href="#">
            <img src="icon-pinterest.svg" alt="" class="ficon" />
          </a>
          <a href="#">
            <img src="icon-instagram.svg" alt="" class="ficon" />
          </a>
        </div>
      </div>
      <h1 class="md:items-end text-white">
        This application in under development
      </h1>
    </footer>
  );
}
