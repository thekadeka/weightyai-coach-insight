
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex P.",
      role: "Fitness Enthusiast",
      content: "The daily scale fluctuations used to cause so much panic. The AI Coach showed me my underlying trend was perfect and explained *why* the number jumped. It's not just a feature; it's peace of mind. The fear of wasting my effort is gone.",
      image: "/lovable-uploads/3d7e4c61-2c53-46ee-b507-1dac2bc74766.png",
      rating: 5
    },
    {
      name: "Jessica R.",
      role: "Data Analyst",
      content: "I was doing manual 'spreadsheet gymnastics' for an hour a week, and I'm a data analyst! The AI Check-Up gives me a more accurate analysis—including a suggested calorie adjustment—in 10 seconds. The time and mental energy it saves is invaluable.",
      image: "/lovable-uploads/3cadc633-9bda-48d7-9e3c-0b1ed494938b.png",
      rating: 5
    },
    {
      name: "Mike T.",
      role: "Personal Trainer",
      content: "I hit a frustrating plateau and the fear of being stuck for good was creeping in. The AI Coach identified that my progress velocity had stalled and suggested a small caloric adjustment to break through it. I felt empowered, not like a failure. I'm making progress again and feel completely in control.",
      image: "/lovable-uploads/082860d2-08e5-439e-92d6-48b0989f93b3.png",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            From Anxious and Stuck to Confident and In Control
          </h2>
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
