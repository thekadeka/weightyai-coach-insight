
import { Target, Scale, MessageCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Target,
      title: "Set Your Goal",
      description: "Tell the AI your objective, like \"Lean Gains\" or \"Steady Weight Loss.\"",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Scale,
      title: "Log Your Weight",
      description: "Quickly and easily log your daily weight in the app.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageCircle,
      title: "Chat with Your Coach",
      description: "Tap the \"AI Check-Up\" button for an instant report or ask any question you want. Get a clear, personalized analysis in seconds.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get Expert Analysis in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600">
            From confusion to clarity in minutes, not hours
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full">
                      <div className="w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                      <div className="absolute right-2 top-[-4px] w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
