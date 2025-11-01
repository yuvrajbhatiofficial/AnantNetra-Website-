"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  const [result, setResult] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");
  const form = e.currentTarget; // ✅ store it before await
const formData = new FormData(form);
formData.append("access_key","12304545-ffbf-43db-adf1-2579f475c229");

formData.append("subject", "New Contact Form Submission");
formData.append(
  "auto_response",
  "Hi {name}, thanks for contacting AnantNetra! We’ve received your message and will get back to you shortly."
);

const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  body: formData,
});

const data = await response.json();

if (data.success) {
  setResult("✅ Message sent successfully!");
  form.reset(); // ✅ works perfectly now
} else {
  console.error("Error:", data);
  setResult("❌ Something went wrong. Please try again later.");
}

  };

  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row items-start justify-between w-full px-6 lg:px-20 py-16 gap-10"
    >
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Let’s build something amazing together 🚀
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
          Have a question, a project idea, or just want to say hello?  
          Our team is here to help you every step of the way.
        </p>

        <div className="space-y-4 mt-6">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <p className="text-gray-700 dark:text-gray-300">
              operations@anantnetra.com
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <p className="text-gray-700 dark:text-gray-300">+91 98765 43210</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <p className="text-gray-700 dark:text-gray-300">
              Jaipur, Rajasthan, India
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Working Hours
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Mon - Fri: 9:00 AM – 6:00 PM
          </p>
          <p className="text-gray-600 dark:text-gray-400">Sat - Sun: Closed</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-neutral-900 shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-neutral-800"
        >
          <FieldSet>
            <FieldLegend>Contact Form</FieldLegend>
            <FieldDescription>
              We’ll get back to you as soon as possible.
            </FieldDescription>
            <FieldSeparator />

            <FieldGroup>
              <Field orientation="responsive">
                <FieldContent>
                  <FieldLabel htmlFor="name">Full Name</FieldLabel>
                  <FieldDescription>
                    Please enter your complete name.
                  </FieldDescription>
                </FieldContent>
                <Input id="name" name="name" placeholder="Your Full Name" required />
              </Field>

              <FieldSeparator />

              <Field orientation="responsive">
                <FieldContent>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <FieldDescription>
                    We will contact you via this email.
                  </FieldDescription>
                </FieldContent>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </Field>

              <FieldSeparator />

              <Field>
                <FieldLabel>Department</FieldLabel>
                <Select name="department">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="careers">Careers</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="support">Customer Support</SelectItem>
                    <SelectItem value="hr">Human Resources</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                  </SelectContent>
                </Select>
                <FieldDescription>
                  Select your department or area of work.
                </FieldDescription>
              </Field>

              <FieldSeparator />

              <Field orientation="responsive">
                <FieldContent>
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <FieldDescription>
                    Write your message here. Keep it concise.
                  </FieldDescription>
                </FieldContent>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Hey team, I’d like to discuss a project idea..."
                  required
                  className="min-h-[120px] resize-none sm:min-w-[300px]"
                />
              </Field>

              <FieldSeparator />

              <Field orientation="responsive" className="gap-3">
                <Button type="submit" className="w-full sm:w-auto">
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() => setResult("")}
                >
                  Cancel
                </Button>
              </Field>

              {result && (
                <p className="text-center mt-4 text-sm text-green-600 dark:text-green-400">
                  {result}
                </p>
              )}
            </FieldGroup>
          </FieldSet>
        </form>
      </div>
    </div>
  );
}

export default Contact;
