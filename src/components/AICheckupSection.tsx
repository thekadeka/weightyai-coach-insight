import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, TrendingDown, Calendar, ArrowRight } from "lucide-react";

const mockWeightData = [
  { date: "Jan 1", weight: 185, trend: 185 },
  { date: "Jan 8", weight: 183, trend: 184.2 },
  { date: "Jan 15", weight: 186, trend: 183.5 },
  { date: "Jan 22", weight: 182, trend: 182.8 },
  { date: "Jan 29", weight: 181, trend: 182.1 },
  { date: "Feb 5", weight: 183, trend: 181.5 },
  { date: "Feb 12", weight: 180, trend: 180.8 },
  { date: "Feb 19", weight: 179, trend: 180.2 },
  { date: "Feb 26", weight: 181, trend: 179.6 },
  { date: "Mar 5", weight: 178, trend: 179.1 },
];

export const AICheckupSection = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);

  const handleAICheckup = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis(
        "Great progress! Your weight trend shows a steady 0.7 lb/week loss - exactly on target for healthy weight loss. Your recent fluctuations are normal and within expected range. Continue with your current calorie intake of 1,800 calories. The data shows you're doing everything right!"
      );
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              See WeightyAI in Action
            </h2>
            <p className="text-xl text-gray-600">
              Experience how our AI transforms confusing data into clear action plans
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Weight Progress Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-blue-600" />
                  Weight Progress Tracking
                </CardTitle>
                <CardDescription>
                  Your weight data over the last 10 weeks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockWeightData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={['dataMin - 2', 'dataMax + 2']} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="weight"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                        name="Daily Weight"
                      />
                      <Line
                        type="monotone"
                        dataKey="trend"
                        stroke="#10b981"
                        strokeWidth={3}
                        strokeDasharray="5 5"
                        dot={false}
                        name="Trend Line"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* AI Check-up Button and Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-600" />
                  AI Check-Up
                </CardTitle>
                <CardDescription>
                  Get instant analysis and personalized recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button
                  onClick={handleAICheckup}
                  disabled={isAnalyzing}
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 text-lg"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin mr-2 h-5 w-5 border-2 border-white/20 border-t-white rounded-full" />
                      Analyzing Your Progress...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 h-5 w-5" />
                      Run AI Check-Up
                    </>
                  )}
                </Button>

                {/* Arrow connecting button to result */}
                {analysis && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-blue-600 animate-pulse" />
                  </div>
                )}

                {analysis && (
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-500 relative">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">AI Analysis Results</h3>
                        <p className="text-gray-700 leading-relaxed">{analysis}</p>
                        <div className="mt-4 flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-1" />
                          Analysis completed {new Date().toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    {/* Arrow pointing to hero AI chat */}
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-purple-600 animate-bounce" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};