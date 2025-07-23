
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { AppStoreButtons } from "./AppStoreButtons";

export const FinalCTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Take Control of Your Fitness Journey?
          </h2>
          
          <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
            Stop the emotional rollercoaster of the scale. End the frustrating guesswork. Transform your raw weight data into clear, actionable, and personalized advice from an AI coach that finally understands.
          </p>
          
          <p className="text-lg text-yellow-300 font-semibold mb-8">
            Your path to clear, confident progress is one tap away.
          </p>
          
          <div className="mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <AppStoreButtons />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Launching Soon</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Priority Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Never Share Your Email</span>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-blue-100 text-lg">
              <strong>Join thousands</strong> waiting for the launch. 
              <br />
              <span className="text-yellow-300">Transform your relationship with the scale forever.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
