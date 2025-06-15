
import { AlertTriangle, TrendingDown, FileSpreadsheet, HelpCircle, Frown } from "lucide-react";

export const Problem = () => {
  const problems = [
    {
      icon: TrendingDown,
      text: "You diligently log your weight, but the daily ups and downs leave you feeling anxious and confused."
    },
    {
      icon: HelpCircle,
      text: "You stare at graphs and numbers, but have no idea what they actually mean for your progress."
    },
    {
      icon: FileSpreadsheet,
      text: "You spend hours in tedious spreadsheets trying to calculate your own trends, prone to errors and frustration."
    },
    {
      icon: Frown,
      text: "You've tried other apps, but get nothing but generic advice that doesn't apply to your specific goals."
    },
    {
      icon: AlertTriangle,
      text: "You fear you're stuck on a plateau or that all your hard work in the gym and kitchen is for nothing."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Does This Sound Familiar?
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-6 bg-red-50 border border-red-100 rounded-xl hover:bg-red-100 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{problem.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-red-100 px-6 py-3 rounded-full">
            <Frown className="w-5 h-5 text-red-600" />
            <span className="text-red-800 font-semibold">Sound exhausting? It doesn't have to be.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
