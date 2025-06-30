
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle } from "lucide-react";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already on the list!",
            description: "This email is already registered for our waitlist.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        setIsSuccess(true);
        setEmail("");
        toast({
          title: "You're on the priority list! 🎉",
          description: "We'll notify you as soon as WeightyAI launches.",
        });
      }
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">You're in! 🎉</h3>
          <p className="text-gray-600">
            We'll send you priority access as soon as WeightyAI launches.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-12 text-base"
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit" 
          size="lg"
          disabled={isLoading}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 h-12 text-base whitespace-nowrap"
        >
          {isLoading ? "Adding..." : "Get Priority Access at Launch"}
        </Button>
      </div>
      <p className="text-sm text-gray-500 mt-3 text-center">
        Join thousands waiting for the launch. We will never share your email.
      </p>
    </form>
  );
};
