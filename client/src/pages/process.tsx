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
import landPhoto from "@assets/Screenshot 2025-05-27 142248.png";
import approvalsPhoto from "@assets/Screenshot 2025-05-27 142340.png";
import buildPhoto from "@assets/Screenshot 2025-05-27 142618.png";
import moveInPhoto from "@assets/Screenshot 2025-05-27 142825.png";

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
      return await fetch("https://hooks.zapier.com/hooks/catch/23110786/2jqd91w/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
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
          Start the Conversation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl text-charcoal">
            Ready to start your custom home journey?
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

const processSteps = [
  {
    number: 1,
    title: "Secure Financing",
    description: "We help you figure out land loans, construction loans, and connect you with trusted lenders.",
    details: [
      "Land loan consultation and guidance",
      "Construction-to-permanent loan options", 
      "Trusted lender network referrals",
      "Budget planning and approval process"
    ]
  },
  {
    number: 2,
    title: "Find & Evaluate Land",
    description: "We assess buildability, slope, drainage, and help you avoid costly mistakes before you buy.",
    details: [
      "Site evaluation and feasibility studies",
      "Soil testing and drainage assessment",
      "Utility availability and costs",
      "HOA and deed restriction review"
    ]
  },
  {
    number: 3,
    title: "Finalize Floor Plan",
    description: "We help shape or modify your floor plan to match your land and budget, no surprises.",
    details: [
      "Custom floor plan design",
      "Site-specific modifications",
      "Budget optimization recommendations",
      "Elevation Designs and Renderings"
    ]
  },
  {
    number: 4,
    title: "Submit for Approvals",
    description: "HOA, city, and lender paperwork — we handle it all for you.",
    details: [
      "Building permit applications",
      "HOA architectural review submissions",
      "City planning and zoning approvals",
      "Lender plan and specification review"
    ]
  },
  {
    number: 5,
    title: "Build Begins",
    description: "We manage the full build and send weekly updates — often visiting the site daily.",
    details: [
      "Daily site supervision and quality control",
      "Weekly photo updates and progress reports",
      "Subcontractor coordination and management",
      "Material delivery and inspection"
    ]
  },
  {
    number: 6,
    title: "Walkthrough & Move-In",
    description: "We hand you the keys, handle final touches, and offer post-move-in support.",
    details: [
      "Pre-final walkthrough and punch list",
      "Final inspection and city approvals",
      "Key handover and home orientation",
      "One-year warranty and support"
    ]
  }
];

export default function Process() {
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
              Our Proven Process
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From financing to final walkthrough, we guide you through every step with transparency and expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mr-6">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                    <h2 className="font-playfair text-3xl font-bold text-charcoal">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-green-600 text-sm">✓</span>
                        </div>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={index === 1 ? landPhoto : index === 3 ? approvalsPhoto : index === 4 ? buildPhoto : index === 5 ? moveInPhoto : `https://images.unsplash.com/photo-${
                        index === 0 ? '1554224155-8d04cb21cd6c' : // financing
                        index === 1 ? '1500382017468-c7330b4b2fe0' : // land (fallback, won't be used)
                        index === 2 ? '1503387837-b154d5074bd2' : // floor plan
                        index === 3 ? '1507003211169-0a1dd7ef0a50' : // approvals (fallback, won't be used)
                        index === 4 ? '1504615755583-2916b52192a3' : // building (fallback, won't be used)
                        '1560518883-ce04c40253b8' // walkthrough (fallback, won't be used)
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400`}
                      alt={`Step ${step.number}: ${step.title}`}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <div className="text-center">
                      <div className="text-warm-brown font-semibold text-sm mb-2">
                        STEP {step.number}
                      </div>
                      <h3 className="font-playfair text-xl font-bold text-charcoal">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your vision and walk through how we can bring your dream home to life.
            </p>
            <ContactModal />
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}