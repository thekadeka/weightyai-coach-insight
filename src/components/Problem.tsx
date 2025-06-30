
import { AlertTriangle, TrendingDown, FileSpreadsheet, HelpCircle, Frown } from "lucide-react";

export const Problem = () => {
  const problems = [
    {
      icon: TrendingDown,
      quote: "Why is the scale going up? I was so good yesterday!",
      text: "You're left confused and panicked by normal daily fluctuations, derailing your motivation."
    },
    {
      icon: HelpCircle,
      quote: "Is this even working? I feel like I'm wasting my effort.",
      text: "You work hard, but without clear feedback, you fear your effort is for nothing, suspecting an 'invisible saboteur' is undermining you."
    },
    {
      icon: AlertTriangle,
      quote: "Another plateau. I knew I couldn't do it. Maybe I should just give up.",
      text: "Stagnation feels like a personal failure, triggering the baggage of past attempts and the urge to quit."
    },
    {
      icon: FileSpreadsheet,
      quote: "I wish someone would just tell me what to do next.",
      text: "You're drowning in raw data from graphs and spreadsheets but starving for clear, actionable guidance."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Does Your Internal Monologue Sound Like This?
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <div key={index} className="p-8 bg-red-50 border border-red-100 rounded-xl hover:bg-red-100 transition-colors">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <blockquote className="text-xl font-semibold text-red-700 italic">
                        "{problem.quote}"
                      </blockquote>
                      <p className="text-gray-700 text-lg leading-relaxed">{problem.text}</p>
                    </div>
                  </div>
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
