const TestimonialsSection = () => {
  const metrics = [
    { icon: "👨‍👩‍👧", value: "4,800+", label: "Families Served" },
    { icon: "✅", value: "1,200+", label: "Verified Caretakers" },
    { icon: "⭐", value: "98%", label: "Satisfaction Rate" },
    { icon: "📍", value: "64", label: "Districts Covered" },
  ];

  const testimonials = [
    {
      stars: 5,
      quote:
        "TrustCare saved us so much stress. We found a wonderful caretaker for our newborn within hours. The booking was easy and the caretaker was incredibly professional.",
      name: "Fatima Begum",
      role: "Mother of newborn · Dhaka",
      avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Fatima",
    },
    {
      stars: 5,
      quote:
        "My father needed daily care after surgery. The caretaker from TrustCare was punctual, kind, and medically trained. I couldn't have managed without this platform.",
      name: "Rahim Uddin",
      role: "Working professional · Chittagong",
      avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Rahim",
    },
    {
      stars: 4,
      quote:
        "Booking was smooth and the caretaker arrived on time. My elderly mother loved the companion they sent. Will definitely use TrustCare again for our family.",
      name: "Nusrat Jahan",
      role: "Daughter & caregiver · Sylhet",
      avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Nusrat",
    },
  ];

  return (
    <section className="bg-primary/5 rounded-2xl px-6 py-14 md:px-10 max-w-6xl mx-auto">

      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">
          Testimonials & Success
        </p>
        <h2 className="font-bold text-black text-2xl md:text-2xl lg:text-4xl xl:text-5xl leading-tight mb-3">
          Trusted by Thousands of Families
        </h2>
        <p className="text-black text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Real stories from real families who rely on TrustCare every single day
          for safe and trusted caregiving.
        </p>
      </div>

      {/* Success Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {metrics.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 text-center border border-green-100"
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="text-2xl font-bold text-black">{item.value}</div>
            <div className="text-xs text-gray-500 mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-green-100 mb-10" />

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-green-100 flex flex-col gap-4"
          >
            {/* Stars */}
            <div className="text-yellow-400 text-sm tracking-widest">
              {"★".repeat(item.stars)}{"☆".repeat(5 - item.stars)}
            </div>

            {/* Quote */}
            <p className="text-gray-700 text-sm leading-relaxed flex-1">
              "{item.quote}"
            </p>

            {/* User */}
            <div className="flex items-center gap-3 pt-4 border-t border-green-50">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-semibold text-black">{item.name}</div>
                <div className="text-xs text-gray-400">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TestimonialsSection;