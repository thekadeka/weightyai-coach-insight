
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex P.",
      role: "Fitness Enthusiast",
      content: "I used to panic every time the scale went up. WeightyAI's coach explained it was just a normal fluctuation and showed me my long-term trend was still on track. It's been a game-changer for my mental health.",
      image: "/placeholder.svg?height=80&width=80&text=Alex",
      rating: 5
    },
    {
      name: "Jessica R.",
      role: "Data Analyst",
      content: "I was wasting hours in a spreadsheet trying to do this myself. The AI Check-Up gives me a better analysis in 10 seconds. It's saved me so much time and frustration.",
      image: "/placeholder.svg?height=80&width=80&text=Jessica",
      rating: 5
    },
    {
      name: "Mike T.",
      role: "Personal Trainer",
      content: "I was stuck and about to give up. The AI Coach helped me see my progress velocity had slowed and suggested a few things to consider. I'm finally making progress again. I feel so in control.",
      image: "/placeholder.svg?height=80&width=80&text=Mike",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            From Confused to Confident
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from people who transformed their fitness journey
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-400 mb-3" />
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
