
import { ArrowRight, Target, TrendingUp, MessageCircle, Zap } from "lucide-react";

export const Solution = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            We Bridge the Gap Between Data and Doing.
          </h2>
          <p className="text-xl text-gray-600">
            Other apps show you a chart. WeightyAI gives you a game plan.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Your weight data holds the secret to your success, but interpreting it is a frustrating, time-consuming chore. WeightyAI eliminates this "data overload and analysis challenge" completely.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our AI coach doesn't just show you your trend; it explains what it means for your goal. Then, it does what no other app can: it translates that analysis into a powerful combination of <strong>narrative feedback and intelligent caloric adjustment suggestions</strong>.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
            {/* Before State */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-red-600 mb-4 text-center">Before WeightyAI</h4>
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
                    <p className="text-red-600 font-semibold">Raw Data Chaos</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Staring at confusing charts</li>
                  <li>• No actionable guidance</li>
                  <li>• Emotional rollercoaster</li>
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
              <h4 className="text-xl font-bold text-green-600 mb-4 text-center">With AI Check-Up</h4>
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center bg-green-500 rounded-full">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-green-600 font-semibold">Clear Action Plan</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Instant progress analysis</li>
                  <li>• Specific caloric guidance</li>
                  <li>• Confident next steps</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Introducing the "AI Check-Up"
            </h3>
            <p className="text-xl text-gray-600">
              One-Tap for a Complete Action Plan
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
              With a single tap of the "AI Check-Up" button, you get:
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-700">Exactly what your progress velocity is</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-700">How that velocity compares to your specific goal (e.g., "Lean Gains" or "Steady Weight Loss")</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-700">Whether you should adjust your calories to stay on track, and what that adjustment could look like</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <p className="text-gray-700">Clear, encouraging, narrative feedback that separates the "noise" of daily fluctuations from the "signal" of your true progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
