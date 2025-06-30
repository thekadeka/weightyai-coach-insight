
import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, Smartphone } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

export const Hero = () => {
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Weight Data Finally 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Makes Sense.</span>
                <br />
                Your Next Steps Are Finally Clear.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                WeightyAI isn't another weight tracker. It's an intelligent coach that translates your weight trends into clear, narrative feedback and precise caloric adjustment suggestions.
              </p>
              <p className="text-lg text-gray-500 font-medium">
                Stop wondering what to do next. Start knowing.
              </p>
            </div>
            
            <div className="space-y-6">
              <WaitlistForm />
              
              <div className="flex justify-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 text-lg"
                  onClick={scrollToHowItWorks}
                >
                  See How It Works
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Launching Soon</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Priority Access</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">AI Coach</p>
                    <p className="text-sm text-gray-500">Your Progress Expert</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700">
                      "Your velocity is perfect at -1.2lbs/week for your goal. The Tuesday spike was just water retention - your trend is steady. <strong>Consider increasing calories by 50-100 to maintain this rate as you progress.</strong> Keep going! 💪"
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 text-right">
                    <p className="text-sm text-gray-700">
                      "Should I adjust my calories after that cheat meal?"
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700">
                      "No adjustment needed! One meal won't impact your trend. Your progress velocity is still on target. Stay consistent with your current approach."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              AI Check-Up
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
