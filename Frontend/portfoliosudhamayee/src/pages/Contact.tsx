import React, { useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.id]: e.target.value });
};
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setStatus(null);

  try {
    await axios.post("http://localhost:5000/api/contact", formData); // use your backend URL here
    setStatus("success");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (err) {
    console.error(err);
    setStatus("error");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary text-center animate-fade-in-up">
            Let's Work Together
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
            Have a project in mind? I'd love to hear about it and explore how we can bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  I'm always interested in new opportunities, collaborations, and interesting projects. 
                  Whether you're a startup looking to build your MVP or an established company 
                  needing technical expertise, let's discuss how I can help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a 
                      href="mailto:sudhamayeej07@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      sudhamayeej07@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a 
                      href="tel:+91 9494093154"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +91 9494093154
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Connect with me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/sudhaamayee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a 
                    href="http://www.linkedin.com/in/sudhamayee-j-456974361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Resume Download */}
<div className="bg-card p-6 rounded-lg border border-border">
  <h3 className="text-xl font-semibold mb-3 text-primary">Resume</h3>
  <p className="text-muted-foreground mb-4">
    Download my resume for a detailed overview of my experience, skills, and education.
  </p>
  <div className="flex justify-center sm:justify-start">
    <Button
      className="w-full sm:w-auto flex items-center justify-center"
      onClick={() => window.open('/resume.pdf', '_blank')}
    >
      <Download className="mr-2 h-4 w-4" />
      Download Resume (PDF)
    </Button>
  </div>
</div>

            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-6 text-primary">Send me a message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
  id="firstName"
  placeholder="John"
  required
  value={formData.firstName}
  onChange={handleChange}
/>

                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
  id="lastName"
  placeholder="Doe"
  required
  value={formData.lastName}
  onChange={handleChange}
/>

                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
  id="email"
  placeholder="xyz@gmail.com"
  required
  value={formData.email}
  onChange={handleChange}
/>

                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
  id="subject"
  placeholder="Reaching you about project..."
  required
  value={formData.subject}
  onChange={handleChange}
/>

                </div>
                
                <div className="space-y-2">
    <Label htmlFor="message">Message *</Label>
    <Textarea
      id="message"
      placeholder="Tell me about your project..."
      className="min-h-32"
      required
      value={formData.message}
      onChange={handleChange}
    />
  </div>
                
                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Current Availability
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-lg font-semibold text-foreground">Available for new projects</span>
              </div>
              <p className="text-muted-foreground mb-6">
                I'm currently accepting new freelance projects and internship opportunities. 
                Typical response time is within 24 hours.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Freelance Projects</h4>
                  <p className="text-muted-foreground">2-4 week timeline</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Internship Roles</h4>
                  <p className="text-muted-foreground">Available immediately</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;