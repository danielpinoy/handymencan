import bluehat from "../images/about-images/sliderImage3.jpeg";
import drill from "../images/about-images/drill.jpg";
// icons
import affordable from "../images/about-images/icons/affordable.png";
import customer from "../images/about-images/icons/customer.png";
import maintenance from "../images/about-images/icons/maintenance.png";
import workers from "../images/about-images/icons/workers.png";

const About = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-yellow-500 uppercase tracking-wide text-sm font-bold">
                ABOUT US
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Preserve the Beauty of Your Space with{" "}
                <span className="bg-yellow-400 px-2 py-1 rounded">
                  Professional Handyman Services!
                </span>
              </h2>
            </div>
            {/* Image Right */}
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed text-lg">
                Handymen Can is a dedicated team for delivering repair and
                maintenance services in the Grand Cayman. Our skilled team
                boasts an extensive experience across various tasks, ensuring
                high quality service in less time.
              </p>
            </div>

            {/* Company Badge */}
            <div className="flex items-center gap-3 pt-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-gray-900">
                Certified Company
              </span>
            </div>
          </div>

          <div className="lg:order-last">
            <img
              src={bluehat}
              alt="Professional Handyman Team"
              className="w-full h-96 lg:h-[450px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="lg:order-first">
            <img
              src={drill}
              alt="Professional Craftsmanship"
              className="w-full h-96 lg:h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Service Highlights */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Trust us to handle your home maintenance needs with{" "}
                <span className="text-yellow-500">
                  professionalism and expertise.
                </span>
              </h3>
            </div>

            {/* Highlight List Section */}
            <div className="space-y-6">
              {/* Highlight 1 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Quality Workmanship
                  </h4>
                  <p className="text-gray-600">
                    Every project completed to the highest standards
                  </p>
                </div>
              </div>

              {/* Highlight 2 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Timely Service
                  </h4>
                  <p className="text-gray-600">
                    Fast response times and efficient completion
                  </p>
                </div>
              </div>

              {/* Highlight 3 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Licensed & Insured
                  </h4>
                  <p className="text-gray-600">
                    Full protection and peace of mind
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded transition-colors duration-200">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center space-y-6 mb-16">
            <p className="text-gray-500 uppercase tracking-wide text-sm font-medium">
              WHY CHOOSE US
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              <span className="bg-yellow-400 px-1 py-0.5 rounded">
                Reasons For Choosing Us
              </span>
            </h2>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 - TRAINED */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                <img src={workers} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  TRAINED
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Each of our handymen is thoroughly screened and brings
                  exceptional skills, training, and professionalism to every
                  job.
                </p>
              </div>
            </div>

            {/* Feature 2 - WELL EQUIPPED */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                <img src={maintenance} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  WELL EQUIPPED
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  With advanced tools and equipment, our handymen are ready to
                  reach you quickly and tackle all maintenance and repair tasks.
                </p>
              </div>
            </div>

            {/* Feature 3 - CUSTOMER */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                <img src={customer} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  CUSTOMER FOCUSED
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We are customer-focused service providers and make routine
                  feedback calls to our customers to collect views that help us
                  improve.
                </p>
              </div>
            </div>

            {/* Feature 4 - AFFORDABLE */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                <img src={affordable} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AFFORDABLE
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We have a no-hidden-charges policy, and all our prices are
                  affordable and fair. When a task requires additional charges,
                  we inform our customers beforehand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
