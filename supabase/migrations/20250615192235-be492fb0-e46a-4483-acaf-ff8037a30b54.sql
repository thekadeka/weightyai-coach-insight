
-- Create a table to store waitlist email addresses
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - making it publicly accessible for signups
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert emails (for waitlist signup)
CREATE POLICY "Anyone can join waitlist" 
  ON public.waitlist 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to prevent public reading of the waitlist (admin only)
CREATE POLICY "Only authenticated users can view waitlist" 
  ON public.waitlist 
  FOR SELECT 
  USING (false);
