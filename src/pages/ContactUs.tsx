
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <Mail className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Have questions about WeightyAI? We'd love to hear from you!
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <a 
                  href="mailto:kadeka@kadeka.net" 
                  className="text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors"
                >
                  kadeka@kadeka.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
