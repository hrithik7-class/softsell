import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faClock, faLock, faStar } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
const WhyChooseUs = () => {

  const features = [
    {
      icon: faClock,
      title: 'Fast Payments',
      description: 'Get paid quickly with our streamlined process.',
    },
    {
      icon: faLock,
      title: 'Secure Transactions',
      description: 'Your data and licenses are protected with top-tier security.',
    },
    {
      icon: faStar,
      title: 'Expert Valuation',
      description: 'Our team ensures you get the best price for your licenses.',
    },
    {
      icon: faCheckCircle,
      title: 'Hassle-Free Process',
      description: 'Sell your licenses in just a few simple steps.',
    },
  ];
  return (
    <div>

      <section id="why-us" className="py-16 bg-gray-100  font-mysans dark:text-blue-500  dark:bg-background-dark">


        <h2 className="sm:text-4xl text-3xl font-bold text-center mb-12">Why Choose SoftSell?</h2>

        {/* <FontAwesomeIcon icon={faCheckCircle}/> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 border rounded-lg shadow-sm bg-white
            transition-all duration-200 ease-in-out hover:scale-105 
            ">
              <FontAwesomeIcon icon={feature.icon} className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{feature.title}</h3>
              <p className="text-gray-600 dark:text-black">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
export default WhyChooseUs

// shadow='lg'
// 			rounded='lg'
// 			overflow='hidden'
// 			transition='all 0.3s'
// 			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
// 			bg={bg}