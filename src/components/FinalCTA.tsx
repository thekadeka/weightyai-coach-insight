
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

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
          
          <div className="mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <WaitlistForm />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Launching Soon</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Be First to Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Spam, Ever</span>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-blue-100 text-lg">
              <strong>Join thousands</strong> who are waiting for the launch. 
              <br />
              <span className="text-yellow-300">Be the first to transform your relationship with the scale.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
