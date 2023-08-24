import { Third } from "./third";
import Footer from "./../../components/footer/index";
import Navbar from "../../components/navbar";

export function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        {/* Hero Container */}
        <div class="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          {/* Content Container */}
          <div class="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
            <h1 class="text-1xl font-bold text-center lg:text-1xl lg:max-w-md lg:text-left">
              Solomon diary
            </h1>
            <p class="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
              It is a combination of worldly wisdom and spiritual salvation with
              Jesus Christ's Holy Blood
            </p>
            <div class="mx-auto lg:mx-0">
              <a
                href="#"
                class="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Image */}
          <div class="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
            <img src="cross-wooden.jpg" alt="" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" class="py-24 bg-gray-100">
        <div class="container mx-auto px-3">
          <h2 class="text-4xl mb-6 font-bold text-center">
            Yeshua's Second Coming
          </h2>
          <p class="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Track the events of Jesus Christ second coming on earth to rescue
            his chosen people and to raise the dead for the final armageddon for
            Holy Mount at Jerusalem
          </p>
        </div>
      </section>

      {/* Feature Box Section */}
      <section id="features" class="pb-32 bg-gray-100">
        <div class="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          {/* Horizontal Line */}
          <div class="hidden absolute top-36 w-10/12 left-16 h-3 bg-cyan md:block"></div>
          {/* Vertical Line */}
          <div class="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>

          {/* Box 1 */}
          <div class="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* Image Positioning */}
            <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* Image Container For Background & Center */}
              <div class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img src="icon-brand-recognition.svg" alt="" />
              </div>
            </div>
            <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Third Temple at Jerusalem
            </h5>
            <p class="text-center text-gray-400 md:text-left">
              Mark the beginning of third temple for Jewish people at temple
              mount at Israel & Palestinians border
            </p>
          </div>

          {/* Box 2 */}
          <div class="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3">
            {/* Image Positioning */}
            <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* Image Container For Background & Center */}
              <div class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img src="icon-detailed-records.svg" alt="" />
              </div>
            </div>
            <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Warning Events
            </h5>
            <p class="text-center text-gray-400 md:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          {/* Box 3 */}
          <div class="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-16 md:w-1/3">
            {/* Image Positioning */}
            <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* Image Container For Background & Center */}
              <div class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img src="icon-fully-customizable.svg" alt="" />
              </div>
            </div>
            <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">
              The Great Tribulation
            </h5>
            <p class="text-center text-gray-400 md:text-left">
              The great Tribulation is divided into two parts. First half of 3.5
              years of peace while second half of 3.5 years with violence &
              blood sacrifice on third temple of Jerusalem
            </p>
          </div>

          {/* Box 4 */}
          <div class="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-24 md:w-1/3">
            {/* Image Positioning */}
            <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* Image Container For Background & Center */}
              <div class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img src="icon-fully-customizable.svg" alt="" />
              </div>
            </div>
            <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">
              The Second Coming Of Yeshua
            </h5>
            <p class="text-center text-gray-400 md:text-left">
              The great Tribulation is divided into two parts. First half of 3.5
              years of peace while second half of 3.5 years with violence &
              blood sacrifice on third temple of Jerusalem
            </p>
          </div>
        </div>
      </section>

      <section class="third py-24 bg-gray-100" id="third">
        <Third />
      </section>

      <section class="fourth py-24 bg-black-100">
        <h2 class="text-4xl mb-6 font-bold text-center">
          Shroud Turin Of Jesus Christ
        </h2>
        {/* Image */}
        <div class="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
          <img src="shroud-turin-jesus.jpg.webp" alt="" />
        </div>
      </section>

      <section class="fifth py-24 bg-gray-100">
        <Third />
      </section>

      {/* CTA Section */}
      <section id="cta" class="py-24 bg-darkViolet">
        <div class="flex flex-col p-2 space-y-6">
          <h5 class="mx-auto space-y-10 text-4xl font-bold text-center text-white">
            Cross verify information until you get conviction from Holy Spirit
          </h5>
          <button class="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLlight md:text-base md:py-3 focus:outline-none">
            Get Started
          </button>
        </div>
      </section>

      {/* Shorten Section */}
      <section id="shorten" class="relative bg-gray-100">
        {/* Shorten Container */}
        <div class="max-w-4xl mx-auto p-6 space-y-6">
          {/* Form */}
          <form
            id="link-form"
            class="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          >
            <input
              type="text"
              class="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
              placeholder="Never jump in without proof, let its get started with truth gathering!"
              id="link-input"
              disabled
            />

            <button class="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
              Important Links!
            </button>

            {/* Error Message */}
            <div
              id="err-msg"
              class="absolute left-7 bottom-3 text-red text-sm italic"
            ></div>
          </form>

          {/* Link 1 */}
          <div class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p class="font-bold text-center text-veryDarkViolet md:text-left">
              Third Temple
            </p>

            <div class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div class="font-bold text-cyan">
                https://thirdtemple.org/en/project/
              </div>
              <button class="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>

          {/* Link 2 */}
          <div class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p class="font-bold text-center text-veryDarkViolet md:text-left">
              Bible with different translation version
            </p>

            <div class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div class="font-bold text-cyan">
                https://www.biblegateway.com/
              </div>
              <button class="p-2 px-8 text-white bg-darkViolet rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>

          {/* Link 3 */}
          <div class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p class="font-bold text-center text-veryDarkViolet md:text-left">
              Malayalam Mentoring in Youtube Channel
            </p>

            <div class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div class="font-bold text-cyan">
                https://www.youtube.com/@NazarethMinistries
              </div>
              <button class="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
