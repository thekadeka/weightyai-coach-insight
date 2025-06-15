
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Understand Your Progress?
          </h2>
          
          <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto">
            Stop the emotional rollercoaster. End the frustration of manual analysis. Take control of your fitness journey with clarity and confidence. Your expert AI coach is waiting.
          </p>
          
          <div className="mb-8">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-12 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start My Free Trial Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>14-Day Free Trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Full Access to All Features</span>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-blue-100 text-lg">
              <strong>Join thousands</strong> who've already transformed their relationship with the scale. 
              <br />
              <span className="text-yellow-300">Your breakthrough moment is just one click away.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
