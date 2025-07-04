import { useState } from "react";
import { motion } from "framer-motion";
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

export default function ContactSection() {
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
        title: "Thank you for trusting us.",
        description: "You'll hear back from us soon with real answers and personalized next steps.\nYou're not just another lead — your home matters to us."
      });
      form.reset();
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
    <section id="contact" className="py-20 bg-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        
        <motion.div 
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
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
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                {submitLead.isPending ? "Sending..." : "Let's Get Started"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
