
import About from "@/Components/Home/About/About";
import Banner from "@/Components/Home/Banner/Banner";
import OurService from "@/Components/Home/OurService/OurService";
import TestimonialsSection from "@/Components/Home/Testominials/TestimonialsSection";

export default function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Banner/>
      </section>

      <section>
        <h1 className='text-2xl md:text-2xl lg:text-4xl  xl:text-5xl text-center font-bold mb-10'>Our Mission</h1>
        <About/>
      </section>

      <section>
        <OurService/>
      </section>

      <section>
        <TestimonialsSection/>
      </section>
    </div>
  );
}
