import backpic from "../assets/image1.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative h-[75vh] text-white flex flex-col justify-center items-center text-center px-4 bg-gray-800">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backpic})`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
          Trust, Expertise, & Results
        </h1>
        <p className="text-xl sm:text-2xl mb-8">
          Your Partner for Quality and Success
        </p>
        <p className="mb-10 text-base sm:text-lg text-gray-200">
          Polarix Solutions empowers individuals and businesses to achieve financial clarity and confidence with premier CPA services delivered by experienced professionals
        </p>

        {/* BUTTON REMOVED */}
        {/* <button className="bg-white text-blue-700 px-8 py-3 text-lg font-semibold rounded-full hover:bg-gray-200 transition">
          Schedule a Consultation
        </button> */}
      
      </div>
    </section>
  );
}
