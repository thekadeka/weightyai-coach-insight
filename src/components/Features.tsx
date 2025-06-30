
import { MessageCircle, TrendingUp, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "The Action Bridge: From Data to Caloric Guidance",
      description: "While other apps show you charts, we give you a game plan. With one tap, get a full progress report with both qualitative feedback and concrete caloric suggestions, turning complex analysis into your next right step."
    },
    {
      icon: MessageCircle,
      title: "The Explanatory Coach, Not a Black Box",
      description: "Our AI explains the 'why' behind its analysis in a supportive, conversational tone. Understand *why* your weight fluctuates and *why* an adjustment is (or isn't) recommended, building true confidence in your strategy."
    },
    {
      icon: TrendingUp,
      title: "Specialized in Progress Velocity",
      description: "Our AI is an expert at analyzing the *rate of weight change*. It gives you nuanced feedback on whether you're progressing faster, slower, or exactly on track, giving you a level of insight you can't get anywhere else."
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Finally, an AI That Actually Gets It.
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
