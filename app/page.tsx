"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Shield,
  Zap,
  Users,
  Cloud,
  ChevronDown,
  ChevronUp,
  FileText,
  Share2,
  UploadCloud,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const stepsRef = useRef(null);
  const aboutRef = useRef(null);
  const extraSectionRef = useRef(null);

  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  useEffect(() => {
    const refs = [heroRef, featuresRef, stepsRef, aboutRef, extraSectionRef];
    refs.forEach((ref, index) => {
      gsap.from(ref.current, {
        opacity: 0.8,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: index * 0.2,
      });
    });
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section ref={heroRef} className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShareHub</h1>
        <p className="text-xl mb-8">Your Personal Data Saver</p>
        <Button size="lg">Get Started</Button>
      </section>

      {/* How to Use Section */}
      <section ref={stepsRef} className="space-y-12 px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
          How to Use ShareHub
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <FileText className="w-12 h-12 text-primary mb-6" />,
              title: "Sign Up",
              text: "Create your ShareHub account to get started.",
            },
            {
              icon: <UploadCloud className="w-12 h-12 text-primary mb-6" />,
              title: "Upload Files",
              text: "Securely upload your files with ease.",
            },
            {
              icon: <Cloud className="w-12 h-12 text-primary mb-6" />,
              title: "Access Anywhere",
              text: "Access your files from any device, anytime.",
            },
            {
              icon: <Share2 className="w-12 h-12 text-primary mb-6" />,
              title: "Share Effortlessly",
              text: "Share files and collaborate with your team.",
            },
          ].map((step, index) => (
            <Card
              key={index}
              className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg"
            >
              <CardHeader>
                {step.icon}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{step.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* About Us Section */}
      <section ref={aboutRef} className="space-y-12">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="space-y-4">
          {[
            {
              title: "Secure and Encrypted Storage",
              content:
                "Your files are protected with enterprise-level encryption, ensuring they remain safe and private.",
            },
            {
              title: "Seamless Collaboration",
              content:
                "Easily share files and collaborate with your team on important projects from anywhere.",
            },
            {
              title: "Affordable and Flexible Plans",
              content:
                "Our pricing plans are designed to suit everyone—from individuals to large enterprises.",
            },
            {
              title: "Automatic Sync Across Devices",
              content:
                "Access your files from any device, anytime. Your files stay updated and synced automatically.",
            },
          ].map((item, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold"
              >
                {item.title}
                {activeAccordion === index ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </button>
              {activeAccordion === index && (
                <p className="mt-4 text-muted-foreground">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className=" text-center">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
          Our Features
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <Card>
            <CardContent className="pt-6">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
              <p className="text-muted-foreground">Bank-level security for your files</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">Quick uploads and downloads</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
              <p className="text-muted-foreground">Work together seamlessly</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Cloud className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cloud Storage</h3>
              <p className="text-muted-foreground">Access from anywhere</p>
            </CardContent>
          </Card>
        </div>
      </section>






      {/* Extra Section: FAQ */}
      <section ref={extraSectionRef} className="space-y-12">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { question: "Is ShareHub secure?", answer: "Yes, ShareHub provides enterprise-level encryption for your files." },
            { question: "Can I access my files offline?", answer: "Yes, ShareHub offers offline syncing for premium users." },
            { question: "What are the pricing plans?", answer: "We offer affordable and flexible pricing plans for individuals and teams." },
          ].map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-muted-foreground mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}

const testimonials = [
  {
    quote: "ShareHub has transformed how our team collaborates. It's incredibly easy to use and secure.",
    author: "Sarah Johnson",
    role: "Product Manager",
  },
  {
    quote: "The best file storage solution I've used. The interface is intuitive and the speed is impressive.",
    author: "Michael Chen",
    role: "Software Developer",
  },
  {
    quote: "Customer support is outstanding. Any questions I had were answered promptly and thoroughly.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
  },
];
