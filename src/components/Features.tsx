
import { MessageCircle, TrendingUp, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "One Conversation, All Your Answers",
      description: "Whether you want a quick 'Check-Up' on your progress or have a specific question like 'Should I adjust my calories?', all interactions happen in one seamless, ongoing conversation. The AI remembers your history, so you never have to repeat yourself.",
      image: "/placeholder.svg?height=300&width=400&text=Chat+Interface"
    },
    {
      icon: TrendingUp,
      title: "Master Your Momentum",
      description: "Our AI is an expert at analyzing the rate of your weight change. It tells you if you're on track, moving too fast, or slowing down, giving you nuanced feedback you can't get anywhere else.",
      image: "/placeholder.svg?height=300&width=400&text=Progress+Velocity"
    },
    {
      icon: Zap,
      title: "Your Fitness, Your Way",
      description: "Whether you meticulously track calories or prefer a more intuitive approach to eating, our AI provides expert guidance based on your weight trends alone. We give you the insights, you choose the method.",
      image: "/placeholder.svg?height=300&width=400&text=Flexible+Approach"
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Core Features & Benefits
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
