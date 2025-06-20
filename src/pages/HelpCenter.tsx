import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HelpCircle, Trash2 } from "lucide-react";

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Help Center</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Trash2 className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Account Deletion</h2>
            </div>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-6">
                To permanently delete your WeightyAI account and all of your associated data, please follow these steps:
              </p>
              
              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                <li>Open the WeightyAI app and log in.</li>
                <li>Navigate to the 'Settings' screen.</li>
                <li>Tap the 'Delete Account' button at the bottom of the screen and follow the confirmation prompts.</li>
              </ol>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <div className="flex items-start">
                  <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
                    <p className="text-blue-800">
                      If you have any issues, please contact us at{" "}
                      <a 
                        href="mailto:kadeka@kadeka.net" 
                        className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors"
                      >
                        kadeka@kadeka.net
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter; 