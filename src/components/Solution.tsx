
import { ArrowRight, Target, TrendingUp, MessageCircle } from "lucide-react";

export const Solution = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Your Data, Finally Explained.
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Before State */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-red-600 mb-4 text-center">Before WeightyAI</h3>
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-r from-red-100 to-red-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 relative">
                      <svg viewBox="0 0 100 40" className="w-full h-full">
                        <polyline
                          points="0,30 10,15 20,35 30,10 40,25 50,40 60,20 70,35 80,15 90,30 100,25"
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="3"
                          className="animate-pulse"
                        />
                      </svg>
                    </div>
                    <p className="text-red-600 font-semibold">Confusing Chaos</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Daily anxiety from fluctuations</li>
                  <li>• Hours of manual calculations</li>
                  <li>• Generic, unhelpful advice</li>
                </ul>
              </div>
            </div>
            
            {/* Transformation Arrow */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* After State */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-600 mb-4 text-center">With WeightyAI</h3>
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 relative">
                      <svg viewBox="0 0 100 40" className="w-full h-full">
                        <polyline
                          points="0,35 20,30 40,25 60,20 80,15 100,10"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="3"
                        />
                        <polyline
                          points="0,30 10,35 20,25 30,40 40,30 50,35 60,25 70,30 80,20 90,25 100,15"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="1"
                          opacity="0.3"
                        />
                      </svg>
                    </div>
                    <p className="text-green-600 font-semibold">Clear Progress</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Instant clarity on your progress</li>
                  <li>• Personalized insights in seconds</li>
                  <li>• Confidence in your journey</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                WeightyAI eliminates the guesswork. We don't just show you data; our AI Coach interprets it for you. By analyzing your weight trends against your personal goals, our coach provides clear, narrative feedback in a simple chat. It separates the "noise" of daily fluctuations from the "signal" of your true progress, giving you the clarity and confidence you've been missing.
              </p>
              <div className="flex items-center justify-center space-x-2 text-blue-600 font-semibold">
                <MessageCircle className="w-5 h-5" />
                <span>Finally! An AI that actually gets it.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
