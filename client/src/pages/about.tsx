import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

function ContactModal() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      land: "",
      budget: "",
      timeline: "",
      notes: ""
    }
  });

  const submitLead = useMutation({
    mutationFn: async (data: InsertLead) => {
      return await apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your inquiry!",
        description: "We'll get back to you within 24 hours with honest answers and next steps."
      });
      form.reset();
      setOpen(false);
    },
    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: InsertLead) => {
    submitLead.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-warm-brown text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
          👉 Speak With Your Future Builder
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl font-bold text-charcoal">
            Let's Talk About Your Home
          </DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-charcoal">Full Name *</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-warm-brown focus:ring-2 focus:ring-warm-brown/20 transition-colors duration-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-charcoal">Phone Number *</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-warm-brown focus:ring-2 focus:ring-warm-brown/20 transition-colors duration-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold text-charcoal">Email Address *</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-warm-brown focus:ring-2 focus:ring-warm-brown/20 transition-colors duration-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="land"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-charcoal">Do You Own Land?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                      <FormControl>
                        <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-warm-brown focus:ring-2 focus:ring-warm-brown/20 transition-colors duration-200">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="yes">Yes, I own land</SelectItem>
                        <SelectItem value="no">No, need help finding land</SelectItem>
                        <SelectItem value="progress">In progress</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-charcoal">When Are You Hoping to Build?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                      <FormControl>
                        <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-warm-brown focus:ring-2 focus:ring-warm-brown/20 transition-colors duration-200">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="1-year-plus">1+ years</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold text-charcoal">Estimated Budget</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                    <FormControl>
                      <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-warm-brown focus:ring-2 focus:ring-warm-brown/20 transition-colors duration-200">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="below-750k">Below $750K</SelectItem>
                      <SelectItem value="750k-1m">$750K - $1 Million</SelectItem>
                      <SelectItem value="1m-1.5m">$1 Million - $1.5 Million</SelectItem>
                      <SelectItem value="1.5m-2m">$1.5 Million - $2 Million</SelectItem>
                      <SelectItem value="2m-plus">$2 Million+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold text-charcoal">Additional Notes or Questions</FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field}
                      value={field.value || ""}
                      rows={4}
                      placeholder="Tell us a little more about your goals, land details, or any specific questions you have..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-warm-brown focus:ring-2 focus:ring-warm-brown/20 transition-colors duration-200 resize-vertical"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button
              type="submit"
              disabled={submitLead.isPending}
              className="w-full bg-warm-brown text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-200 focus:ring-4 focus:ring-warm-brown/20"
            >
              {submitLead.isPending ? "Sending..." : "Start the Conversation"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
              About Custom Homes Boerne
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Family-owned expertise with over 30 years of custom home building experience in Texas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional construction team" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-charcoal mb-8">
                Our Story
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  When you work with us, you're speaking directly with the person who's been the head of purchasing and estimating for over 30 years at some of the most respected homebuilders in Texas.
                </p>
                <p>
                  She's trained countless estimators, overseen multimillion-dollar budgets, and knows exactly what it takes to deliver a custom home that's on time, on budget, and built right.
                </p>
                <p>
                  Now, she leads every build personally — alongside her son, who was trained directly by her and brings a hands-on, modern touch to the business.
                </p>
                <p className="font-semibold text-charcoal">
                  No fluff. No middlemen. Just high-level knowledge and a commitment to making sure your money is spent wisely — and your home is done right.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-playfair text-3xl font-bold text-charcoal mb-8 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💎</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">Integrity</h3>
                <p className="text-gray-600">
                  Honest pricing, clear communication, and transparent processes from start to finish.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏗️</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">Expertise</h3>
                <p className="text-gray-600">
                  Three decades of purchasing, estimating, and building experience at your service.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👥</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">Personal Touch</h3>
                <p className="text-gray-600">
                  Family-owned business where your home gets the personal attention it deserves.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-warm-brown mb-2">30+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-warm-brown mb-2">100%</div>
              <div className="text-sm text-gray-600">Family Owned</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-warm-brown mb-2">200+</div>
              <div className="text-sm text-gray-600">Homes Built</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-warm-brown mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              Curious what it's like to work directly with the head estimator instead of a salesperson?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's talk.
            </p>
            <ContactModal />
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}