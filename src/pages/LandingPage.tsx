import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, BookOpen, Trophy, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TestimonialCard from '../components/TestimonialCard';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              Transform Your Career
              <span className="text-indigo-600"> Journey</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Join over 10,000+ professionals who have accelerated their careers through our expert coaching and industry-leading curriculum.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-4"
            >
              <Link
                to="/login"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#about"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition border-2 border-indigo-600"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10K+', label: 'Active Students', icon: Users },
              { number: '95%', label: 'Success Rate', icon: Trophy },
              { number: '200+', label: 'Expert Coaches', icon: Star },
              { number: '50+', label: 'Courses', icon: BookOpen },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto text-indigo-600 mb-4" />
                <p className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Future Skills School?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive career development solutions tailored to your unique journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Career Coaching',
                description: 'Get personalized guidance from industry veterans with proven track records in career development and placement.',
                features: ['1-on-1 Mentorship', 'Career Path Planning', 'Industry Insights']
              },
              {
                icon: BookOpen,
                title: 'Comprehensive Curriculum',
                description: 'Access our carefully curated courses designed to enhance both technical and soft skills essential for career growth.',
                features: ['Updated Content', 'Industry-Aligned', 'Practical Projects']
              },
              {
                icon: Trophy,
                title: 'Proven Success Track',
                description: 'Join thousands of successful professionals who have transformed their careers through our program.',
                features: ['95% Success Rate', 'Industry Recognition', 'Alumni Network']
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <feature.icon className="h-12 w-12 text-indigo-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how our program has transformed careers and lives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="John Smith"
              role="Senior Software Engineer at Google"
              content="The career coaching at Future Skills School was transformative. Within 6 months, I landed my dream role at Google with a 70% salary increase."
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <TestimonialCard
              name="Sarah Johnson"
              role="Product Manager at Amazon"
              content="The structured curriculum and mentorship helped me transition from marketing to product management. The ROI on this program is incredible!"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <TestimonialCard
              name="Michael Chen"
              role="Tech Lead at Microsoft"
              content="The interview preparation and networking strategies were game-changers. I received multiple offers and was able to negotiate my best package ever."
              image="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored learning paths to accelerate your career growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Career Transition',
                price: '$999',
                duration: '3 months',
                features: [
                  'Career Assessment',
                  'Industry Analysis',
                  '1-on-1 Coaching',
                  'Resume Building',
                  'Interview Prep',
                  'Job Search Strategy'
                ]
              },
              {
                title: 'Leadership Track',
                price: '$1499',
                duration: '6 months',
                features: [
                  'Leadership Skills',
                  'Team Management',
                  'Strategic Planning',
                  'Executive Presence',
                  'Networking Events',
                  'Case Studies'
                ]
              },
              {
                title: 'Tech Accelerator',
                price: '$1299',
                duration: '4 months',
                features: [
                  'Technical Assessment',
                  'Skill Development',
                  'Project Portfolio',
                  'Code Reviews',
                  'Tech Interview Prep',
                  'Industry Mentorship'
                ]
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{program.title}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-indigo-600">{program.price}</span>
                  <span className="text-gray-500 ml-2">/ {program.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/login"
                  className="block w-full text-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                >
                  Enroll Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful professionals who have accelerated their careers with Future Skills School.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition transform hover:scale-105"
            >
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}