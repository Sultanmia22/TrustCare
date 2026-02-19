import React from "react";

/* const service = {
  _id: "6996b9c913a44a687e410b9e",
  id: "elderly-care",
  title: "Elderly Service",
  shortDesc: "Compassionate care for your elderly parents.",
  description:
    "We provide respectful and compassionate care for senior family members…",
  image: "https://i.ibb.co.com/x8Dpj5jp/Elderly-care.jpg",
  icon: "👴",
  price: 400,
  unit: "hour",
  rating: 4.9,
  caretakerCount: "280+",
  tag: "Elderly Service",

  features: [
    "Daily personal hygiene assistance",
    "Medicine reminders & health monitoring",
    "Companionship & emotional support",
    "Mobility & physiotherapy assistance",
    "Meal preparation & feeding support",
    "24/7 care options available",
  ],

  howItWorks: [
    {
      step: "1",
      title: "Select Service",
      desc: "Choose elderly care and care duration",
    },
    {
      step: "2",
      title: "Share Details",
      desc: "Tell us about your loved one's needs",
    },
    {
      step: "3",
      title: "Start Care",
      desc: "Compassionate caretaker begins support",
    },
  ],
}; */

const ServiceDetails = ({service}) => {
  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">

        {/* Image */}
        <div>
          <img
            src={service.image}
            alt={service.title}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold mb-3 flex items-center gap-2">
            {service.icon} {service.title}
          </h1>

          <p className="text-gray-600 mb-4">{service.shortDesc}</p>

          <div className="flex items-center gap-4 mb-4">
            <span className="bg-yellow-100 px-3 py-1 rounded-full text-sm">
              ⭐ {service.rating}
            </span>

            <span className="bg-green-100 px-3 py-1 rounded-full text-sm">
              {service.caretakerCount} Caretakers
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-primary mb-2">
            ৳ {service.price} / {service.unit}
          </h2>

          <p className="text-gray-700">{service.description}</p>

        <div className="my-5">
            <button className="btn btn-primary w-full">Book Now</button>
        </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Service Features</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="p-4 border rounded-xl shadow-sm bg-base-100"
            >
              ✅ {feature}
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {service.howItWorks.map((step) => (
            <div
              key={step.step}
              className="p-6 border rounded-2xl text-center shadow-sm"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {step.step}
              </div>

              <h3 className="font-semibold text-lg mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
