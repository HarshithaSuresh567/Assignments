export default function Hero() {
  return (
    <section className="p-8 text-center">
      <h2 className="text-xl md:text-3xl lg:text-5xl font-bold
                     bg-gradient-to-r from-blue-500 to-purple-600
                     text-transparent bg-clip-text">
        Tailwind CSS Basics
      </h2>

      <img
        src="https://via.placeholder.com/400"
        className="mx-auto mt-6 rounded-lg shadow-lg
                   transition-transform duration-300 hover:scale-105"
      />
    </section>
  );
}
