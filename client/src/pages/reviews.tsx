import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
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
        title: "Thank you for trusting us. You'll hear back from us soon with real answers and personalized next steps. You're not just another lead — your home matters to us.",
        description: ""
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
          Start Your Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl text-charcoal">
            Ready to join our happy clients?
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
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
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="(555) 123-4567" {...field} />
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
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="land"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Do you have land?</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="yes">Yes, I have land</SelectItem>
                        <SelectItem value="no">No, need help finding land</SelectItem>
                        <SelectItem value="looking">Currently looking</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget Range</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="under-750k">Below $750K</SelectItem>
                        <SelectItem value="750k-1m">$750K - $1M</SelectItem>
                        <SelectItem value="1m-1.5m">$1M - $1.5M</SelectItem>
                        <SelectItem value="1.5m-2m">$1.5M - $2M</SelectItem>
                        <SelectItem value="over-2m">$2M+</SelectItem>
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
                    <FormLabel>Timeline</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="When to start..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="immediate">Ready to start now</SelectItem>
                        <SelectItem value="3-months">Next 3 months</SelectItem>
                        <SelectItem value="6-months">Next 6 months</SelectItem>
                        <SelectItem value="1-year">Within a year</SelectItem>
                        <SelectItem value="exploring">Just exploring</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tell us about your dream home</FormLabel>
                  <FormControl>
                    <Textarea 
                      rows={4}
                      placeholder="Share your vision, style preferences, must-haves, or any questions..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={submitLead.isPending}
                className="bg-warm-brown hover:bg-warm-brown/90"
              >
                {submitLead.isPending ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

const testimonials = [
  {
    quote: "They didn't just give us a price — they explained what would cost more and what wasn't worth it.",
    author: "Gustavo S.",
    rating: 5,
    project: "Custom Hill Country Home"
  },
  {
    quote: "Every question I had — and I had a lot — was answered quickly and clearly.",
    author: "Jessica W.",
    rating: 5,
    project: "Modern Family Home"
  },
  {
    quote: "It's rare to find people this knowledgeable and this available.",
    author: "Leo G.",
    rating: 5,
    project: "Luxury Estate"
  },
  {
    quote: "These guys built our home like it was their own.",
    author: "Jack R.",
    rating: 5,
    project: "Ranch Style Home"
  },
  {
    quote: "No fluff. Just two people who know what they're doing and care.",
    author: "Rachel M.",
    rating: 5,
    project: "Contemporary Design"
  },
  {
    quote: "Weekly updates with photos and walkthroughs made it easy.",
    author: "Eric T.",
    rating: 5,
    project: "Traditional Home"
  },
  {
    quote: "They told us what wouldn't work — not just what we wanted to hear.",
    author: "Allison V.",
    rating: 5,
    project: "Custom Floor Plan"
  },
  {
    quote: "They helped us find land and gave us real cost info.",
    author: "James H.",
    rating: 5,
    project: "Dream Home Build"
  },
  {
    quote: "You can tell we weren't just another job.",
    author: "Brittany L.",
    rating: 5,
    project: "Family Estate"
  }
];

export default function Reviews() {
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
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just talk about quality, honesty, and service — we live it. Here's what our clients have to say about their experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <h3 className="font-semibold text-charcoal">{testimonial.author}</h3>
                  <p className="text-sm text-gray-500">{testimonial.project}</p>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak to our commitment to excellence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center p-6 bg-light-gray rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-warm-brown mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-light-gray rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-warm-brown mb-2">200+</div>
              <div className="text-sm text-gray-600">Homes Completed</div>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-light-gray rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-warm-brown mb-2">95%</div>
              <div className="text-sm text-gray-600">On-Time Delivery</div>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-light-gray rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-warm-brown mb-2">100%</div>
              <div className="text-sm text-gray-600">Referral Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold mb-6">
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the difference that personal attention and expert craftsmanship can make.
            </p>
            <ContactModal />
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}