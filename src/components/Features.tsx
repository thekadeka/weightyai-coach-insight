
import { MessageCircle, TrendingUp, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "One Conversation, All Your Answers",
      description: "Whether you want a quick 'Check-Up' on your progress or have a specific question like 'Should I adjust my calories?', all interactions happen in one seamless, ongoing conversation. The AI remembers your history, so you never have to repeat yourself."
    },
    {
      icon: TrendingUp,
      title: "Master Your Momentum",
      description: "Our AI is an expert at analyzing the rate of your weight change. It tells you if you're on track, moving too fast, or slowing down, giving you nuanced feedback you can't get anywhere else."
    },
    {
      icon: Zap,
      title: "Your Fitness, Your Way",
      description: "Whether you meticulously track calories or prefer a more intuitive approach to eating, our AI provides expert guidance based on your weight trends alone. We give you the insights, you choose the method."
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
        
        <div className="max-w-4xl mx-auto space-y-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
