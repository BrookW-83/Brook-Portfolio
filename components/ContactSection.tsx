"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { contactMethods } from "@/data/data";
import { sendEmail } from "@/utils/sendEmail";

// Form fields configuration
const formFields = [
  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "your.email@example.com",
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Your message...",
    rows: 5,
  },
];

export default function ContactSection() {
  const [formData, setFormData]: [any, any] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        console.error(
          "Failed to send message:",
          result.error || "Unknown error"
        );
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Oops! Something broke. Try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-20  lg:w-[130%] lg:-ml-28 xl:w-full xl:ml-0  text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto "
      >
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 max-w-xl mb-12">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid lg:grid-cols-2 gap-12 ">
          {/* left secoint */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      required
                      rows={field.rows}
                      className="w-full px-4 py-3 bg-transparent border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-tertiary focus:border-tertiary transition-colors resize-none"
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-transparent border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-tertiary focus:border-tertiary transition-colors"
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}

              {formState.error && (
                <div className="text-red-500 text-sm">{formState.error}</div>
              )}

              <button
                type="submit"
                disabled={formState.isSubmitting || formState.isSubmitted}
                className={`px-6 py-3 bg-tertiary text-white font-mono rounded-md hover:bg-tertiary/80 transition-colors flex items-center gap-2 ${
                  formState.isSubmitting || formState.isSubmitted
                    ? "opacity-70 cursor-not-allowed"
                    : ""
                }`}
              >
                {formState.isSubmitting ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                    <span>Sending...</span>
                  </>
                ) : formState.isSubmitted ? (
                  <>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* right section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex  flex-col justify-start"
          >
            <div className="space-y-8">
              {contactMethods.map((method) => (
                <div
                  key={method.id}
                  className="bg-background/50 border border-slate-700/50 rounded-lg p-6 hover:border-tertiary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-tertiary/10 rounded-full">
                      <method.icon className="w-6 h-6 text-tertiary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {method.title}
                      </h3>
                      <p className="text-gray-400 hidden sm:block">
                        {method.value}
                      </p>

                      {method.action && (
                        <a
                          href={method.action.url}
                          className="text-tertiary hover:underline mt-2 inline-block"
                        >
                          {method.action.text}
                        </a>
                      )}

                      {method.socialLinks && (
                        <div className="flex gap-4 mt-3">
                          {method.socialLinks.map((social) => (
                            <a
                              key={social.name}
                              onClick={() => {
                                sendEmail(
                                  `Social link clicked: ${social.name}\nURL: ${social.url}`
                                );
                              }}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-tertiary hover:text-white transition-colors flex items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap"
                              style={{ maxWidth: "100%" }}
                            >
                              <social.icon className="w-4 h-4 flex-shrink-0" />
                              <span className="hidden lg:block overflow-hidden text-ellipsis">
                                {social.name}
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
