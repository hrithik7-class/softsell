
const Hero = () => {
  return (
    <>
      <section id="hero" className="bg-gradient-to-r from-blue-500 to-blue-300 
      dark:bg-gradient-to-r dark:from-blue-300 dark:to-blue-500
       text-white dark:text-gray-700 text-center py-16 md:py-24  font-mysans dark:bg-background-light transition">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Turn Your Unused Software Licenses into Cash
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Sell your licenses quickly, securely, and at the best value with SoftSell.
        </p>
        <a
          href="#contact"
          className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition dark:bg-background-dark dark:hover:bg-white dark:hover:text-black"
        >
          Get a Quote
        </a>
      </section>
    </>

  )
}

export default Hero

