import React from "react";

const Services = () => {
  // easier to edid
  const services = [
    {
      id: 1,
      title: "Plumbing Repairs",
      description:
        "From leaky faucets to pipe repairs, we handle all your plumbing needs with professional expertise.",
      icon: (
        <img
          src="https://handymencan.com/wp-content/uploads/2023/02/dfsdf-e1677330827515.png"
          alt=""
        />
      ),
    },
    {
      id: 2,
      title: "Gutter Cleaning",
      description:
        "Keep your gutters clean and functional with our thorough cleaning and maintenance services.",
      icon: (
        <img src="https://handymencan.com/wp-content/uploads/2024/12/istockphoto-1226016050-612x612-1-150x150.jpg" />
      ),
    },
    {
      id: 3,
      title: "Painting",
      description:
        "Transform your space with our professional interior and exterior painting services.",
      icon: (
        <img
          src="https://handymencan.com/wp-content/uploads/2023/03/big1.png"
          alt=""
        />
      ),
    },
    {
      id: 4,
      title: "Pressure Washing",
      description:
        "Restore the beauty of your property with our high-quality pressure washing services.",
      icon: (
        <img
          src="https://handymencan.com/wp-content/uploads/2024/12/360_F_857630534_YUvAD2gI2q6i1GUM43BeTdIHq3BACB3H.jpg"
          alt=""
        />
      ),
    },
    {
      id: 5,
      title: "Carpentry Repairs",
      description:
        "Expert carpentry work for repairs, installations, and custom woodworking projects.",
      icon: (
        <img
          src="https://handymencan.com/wp-content/uploads/2023/03/big6.png"
          alt=""
        />
      ),
    },
    {
      id: 6,
      title: "Furniture Assembly",
      description:
        "Professional furniture assembly service for all your home and office needs.",
      icon: (
        <img
          src="https://handymencan.com/wp-content/uploads/2023/03/1.png"
          alt=""
        />
      ),
    },
    {
      id: 7,
      title: "House Inspection",
      description:
        "Comprehensive property inspections to ensure your home is safe and well-maintained.",
      icon: (
        <img
          src="https://handymencan.com/wp-content/uploads/2023/03/big7.png"
          alt=""
        />
      ),
    },
    {
      id: 8,
      title: "Property Management",
      description:
        "Complete property management solutions for residential and commercial properties.",
      icon: (
        <img
          src="https://handymencan.com/wp-content/uploads/2024/12/property-management-icon-line-illustration-vector-1-150x150.jpg"
          alt=""
        />
      ),
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            What We Can Do For You?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            You can select the required services and we will be happy to serve
            you!
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white hover:bg-white border border-gray-200 hover:border-yellow-400 rounded-lg p-6 transition-all duration-300 hover:shadow-lg group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <div className="text-black">{service.icon}</div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
