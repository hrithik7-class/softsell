import React from 'react'

const Testimonials = () => {
  const reviews = [
    {
      name: 'Jane Doe',
      role: 'IT Manager',
      company: 'TechCorp',
      quote: 'SoftSell made selling our unused licenses so easy! The process was fast, and we got a great price.',
    },
    {
      name: 'Michael Chen',
      role: 'Freelance Developer',
      company: 'Innovate Solutions',
      quote: 'I was impressed by SoftSell’s professionalism and quick payments. Highly recommend!',
    },
    {
      name:'Michael p., Freelance',
      role:'Developer',
      company:'InfoTech',
      quote:'Amezing service! SoftShell gave me a fair quote for for my unused licencesn, and the payment process was seamless'
    },
      {
      name:'Emily R.',
      role:'software Consultant',
      company:'GenX',
      quote:'SoftSell was was game-changer for me! I had several unused licenses collecting dust, and they helped me sell them.',
    }
    
  ]
  return (
    <div>

      <section id="testimonials" className="py-16 bg-white  font-mysans dark:text-blue-500  dark:bg-gray-200">
        <h2 className="sm:text-4xl text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto px-4 ">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-sm bg-gray-50 dark:bg-background-dark">
              <p className="text-gray-600 italic mb-4 dark:text-white ">"{review.quote}"</p>
              <p className="font-semibold">{review.name}</p>
              <p className="text-gray-500 dark:text-white">{review.role}, {review.company}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Testimonials


