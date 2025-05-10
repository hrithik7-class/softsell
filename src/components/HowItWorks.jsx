import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons/faCalculator';
import { faDollar, faUpload } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
  const steps = [
    {
      icon: faDollar,
      title: 'Upload License',
      description: 'Submit your software license details securely.',
    },
    {
      icon: faCalculator,
      title: 'Get Valuation',
      description: 'Receive a competitive quote from our experts.',
    },
    {
      icon: faUpload,
      title: 'Get Paid',
      description: 'Get fast, secure payment after the sale.',
    },
  ];


  return (

    <section id="how-it-works" className="py-16 bg-white  font-mysans dark:text-blue-500  dark:bg-gray-200">
      <h2 className="sm:text-4xl text-3xl font-bold text-center mb-12">How It Works</h2>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 ">
        {steps.map((step, index) => (
          <div key={index} className="text-center p-6 border rounded-lg shadow-sm dark:bg-background-dark
          transition-all duration-200 ease-in-out hover:scale-105 
          ">
            <FontAwesomeIcon icon={step.icon} className="text-4xl text-blue-400 mb-4 " />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-white">{step.description}</p>

          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks

